// FIFA World Cup 2026 Tournament Simulator
// Auto-simulation mode using FIFA rankings and Poisson distribution

// Simulation settings (configurable via UI)
const simSettings = {
    upsetChance: 50,      // 0-100: Higher = more upsets
    homeAdvantage: 50,    // 0-100: Boost for host nations
    eliteBoost: 50,       // 0-100: Extra advantage for top 8 teams
    goalVolume: 50        // 0-100: Low = defensive, High = high-scoring
};

class TournamentSimulator {
    constructor() {
        this.simulationCount = 0;
        this.groupResults = {};
        this.groupStandings = {};
        this.thirdPlaceRankings = [];
        this.qualifiedThirdPlace = [];
        this.knockoutResults = {};
        this.matchResults = {};
        this.matchTeams = {};
        this.champion = null;
        this.thirdPlace = null;

        // Elite teams get boosted stats (top 8 FIFA ranked teams)
        this.eliteTeams = ['ARG', 'FRA', 'ESP', 'ENG', 'BRA', 'POR', 'NED', 'BEL'];

        // Playoff selections (default to highest ranked)
        this.playoffSelections = {};
        this.initPlayoffSelections();
    }

    // Initialize playoff selections with highest ranked teams
    initPlayoffSelections() {
        Object.entries(playoffPaths).forEach(([pathCode, path]) => {
            const sorted = [...path.options].sort((a, b) => b.ranking - a.ranking);
            this.playoffSelections[pathCode] = sorted[0];
        });
    }

    // Get team's effective FIFA ranking
    getTeamRanking(team) {
        if (!team) return 1000;
        const stats = teamStats[team.code];
        return stats?.fifa || team.ranking || 1000;
    }

    // Resolve playoff team
    resolveTeam(team) {
        if (!team) return null;
        if (team.qualifier && playoffPaths[team.code]) {
            return this.playoffSelections[team.code] || team;
        }
        return team;
    }

    // Calculate expected goals using Poisson-based prediction
    calculateExpectedGoals(attackRating, defenseRating, isHome = false) {
        // Base expected goals - adjusted by goal volume setting
        // goalVolume 0 = 0.9 avg, goalVolume 50 = 1.3 avg, goalVolume 100 = 1.8 avg
        const baseGoals = 0.9 + (simSettings.goalVolume / 100) * 0.9;
        let expected = baseGoals;

        // Adjust based on attack vs defense ratings
        // Upset chance affects how much rating difference matters
        // upsetChance 100 = ratings barely matter, upsetChance 0 = ratings dominate
        const ratingImpact = 1.2 - (simSettings.upsetChance / 100) * 0.8; // 0.4 to 1.2
        const ratingDiff = (attackRating - defenseRating) / 500;
        expected += ratingDiff * ratingImpact;

        // Home advantage - scaled by setting
        // homeAdvantage 0 = no boost, homeAdvantage 100 = +0.3 goals
        if (isHome) {
            const homeBoost = (simSettings.homeAdvantage / 100) * 0.3;
            expected += homeBoost;
        }

        // Keep in reasonable range
        return Math.max(0.3, Math.min(3.5, expected));
    }

    // Generate goals from Poisson distribution
    poissonRandom(lambda) {
        let L = Math.exp(-lambda);
        let k = 0;
        let p = 1;

        do {
            k++;
            p *= Math.random();
        } while (p > L);

        return k - 1;
    }

    // Simulate a single match
    simulateMatch(team1, team2, isKnockout = false) {
        const t1 = this.resolveTeam(team1);
        const t2 = this.resolveTeam(team2);

        if (!t1 || !t2) return null;

        const rating1 = this.getTeamRanking(t1);
        const rating2 = this.getTeamRanking(t2);

        // Elite team boost - scaled by setting
        // eliteBoost 0 = no boost, eliteBoost 50 = +50 rating, eliteBoost 100 = +100 rating
        const eliteBoostAmount = simSettings.eliteBoost;
        const boost1 = this.eliteTeams.includes(t1.code) ? eliteBoostAmount : 0;
        const boost2 = this.eliteTeams.includes(t2.code) ? eliteBoostAmount : 0;

        // Host nation advantage
        const isHome1 = t1.host;
        const isHome2 = t2.host;

        // Calculate expected goals
        const xG1 = this.calculateExpectedGoals(rating1 + boost1, rating2 + boost2, isHome1);
        const xG2 = this.calculateExpectedGoals(rating2 + boost2, rating1 + boost1, isHome2);

        // Generate scores
        let score1 = this.poissonRandom(xG1);
        let score2 = this.poissonRandom(xG2);

        const result = {
            team1: t1,
            team2: t2,
            score1: score1,
            score2: score2,
            extraTime: false,
            penalties: false,
            penScore1: 0,
            penScore2: 0
        };

        // Handle knockout draws
        if (isKnockout && score1 === score2) {
            // Extra time - slight chance for goals
            result.extraTime = true;
            const etChance = 0.35;

            if (Math.random() < etChance) {
                // Someone scores in extra time
                const scorerProb = rating1 / (rating1 + rating2);
                if (Math.random() < scorerProb) {
                    result.score1++;
                } else {
                    result.score2++;
                }
            }

            // Still tied? Penalties
            if (result.score1 === result.score2) {
                result.penalties = true;
                const penResult = this.simulatePenalties(rating1, rating2);
                result.penScore1 = penResult.score1;
                result.penScore2 = penResult.score2;
            }
        }

        return result;
    }

    // Simulate penalty shootout
    simulatePenalties(rating1, rating2) {
        let score1 = 0, score2 = 0;

        // First 5 rounds
        for (let i = 0; i < 5; i++) {
            // Team 1 takes
            const prob1 = 0.75 + (rating1 - 1500) / 5000;
            if (Math.random() < prob1) score1++;

            // Team 2 takes
            const prob2 = 0.75 + (rating2 - 1500) / 5000;
            if (Math.random() < prob2) score2++;
        }

        // Sudden death if tied
        while (score1 === score2) {
            const prob1 = 0.75 + (rating1 - 1500) / 5000;
            const prob2 = 0.75 + (rating2 - 1500) / 5000;
            if (Math.random() < prob1) score1++;
            if (Math.random() < prob2) score2++;
        }

        return { score1, score2 };
    }

    // Get winner from match result
    getWinner(result) {
        if (!result) return null;

        if (result.penalties) {
            return result.penScore1 > result.penScore2 ? result.team1 : result.team2;
        }

        if (result.score1 > result.score2) return result.team1;
        if (result.score2 > result.score1) return result.team2;

        return null; // Draw (only in group stage)
    }

    // Get loser from knockout match result
    getLoser(result) {
        const winner = this.getWinner(result);
        if (!winner || !result) return null;
        return winner.code === result.team1.code ? result.team2 : result.team1;
    }

    // Simulate all group stage matches
    simulateGroupStage() {
        this.groupResults = {};
        this.groupStandings = {};

        Object.entries(groups).forEach(([groupId, group]) => {
            const teams = group.teams.map(t => this.resolveTeam(t));
            this.groupResults[groupId] = [];

            // Round-robin: each team plays each other once
            for (let i = 0; i < teams.length; i++) {
                for (let j = i + 1; j < teams.length; j++) {
                    const result = this.simulateMatch(teams[i], teams[j], false);
                    if (result) {
                        this.groupResults[groupId].push(result);
                    }
                }
            }

            // Calculate standings
            this.groupStandings[groupId] = this.calculateStandings(groupId, teams);
        });

        // Rank third-place teams
        this.rankThirdPlaceTeams();
    }

    // Calculate group standings
    calculateStandings(groupId, teams) {
        const standings = teams.map(team => ({
            team: team,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            gf: 0,
            ga: 0,
            gd: 0,
            points: 0
        }));

        const teamMap = {};
        standings.forEach((s, i) => {
            if (s.team) teamMap[s.team.code] = i;
        });

        // Process match results
        this.groupResults[groupId].forEach(result => {
            const idx1 = teamMap[result.team1.code];
            const idx2 = teamMap[result.team2.code];

            if (idx1 === undefined || idx2 === undefined) return;

            standings[idx1].played++;
            standings[idx2].played++;
            standings[idx1].gf += result.score1;
            standings[idx1].ga += result.score2;
            standings[idx2].gf += result.score2;
            standings[idx2].ga += result.score1;

            if (result.score1 > result.score2) {
                standings[idx1].won++;
                standings[idx1].points += 3;
                standings[idx2].lost++;
            } else if (result.score2 > result.score1) {
                standings[idx2].won++;
                standings[idx2].points += 3;
                standings[idx1].lost++;
            } else {
                standings[idx1].drawn++;
                standings[idx2].drawn++;
                standings[idx1].points++;
                standings[idx2].points++;
            }
        });

        // Calculate goal difference
        standings.forEach(s => {
            s.gd = s.gf - s.ga;
        });

        // Sort by: Points, GD, GF, then FIFA ranking
        standings.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.gd !== a.gd) return b.gd - a.gd;
            if (b.gf !== a.gf) return b.gf - a.gf;
            return this.getTeamRanking(b.team) - this.getTeamRanking(a.team);
        });

        return standings;
    }

    // Rank all third-place teams
    rankThirdPlaceTeams() {
        this.thirdPlaceRankings = [];

        Object.entries(this.groupStandings).forEach(([groupId, standings]) => {
            if (standings[2]) {
                this.thirdPlaceRankings.push({
                    group: groupId,
                    ...standings[2]
                });
            }
        });

        // Sort third-place teams
        this.thirdPlaceRankings.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.gd !== a.gd) return b.gd - a.gd;
            if (b.gf !== a.gf) return b.gf - a.gf;
            return this.getTeamRanking(b.team) - this.getTeamRanking(a.team);
        });

        // Top 8 qualify
        this.qualifiedThirdPlace = this.thirdPlaceRankings.slice(0, 8).map(t => t.group);
    }

    // Get team for knockout match slot
    getKnockoutTeam(ref) {
        if (!ref) return null;

        // Winner reference (W73, W74, etc.)
        if (ref.startsWith('W')) {
            const matchId = parseInt(ref.slice(1));
            const result = this.matchResults[matchId];
            return result ? this.getWinner(result) : null;
        }

        // Loser reference (L101, L102)
        if (ref.startsWith('L')) {
            const matchId = parseInt(ref.slice(1));
            const result = this.matchResults[matchId];
            return result ? this.getLoser(result) : null;
        }

        // Group position (1A, 2B)
        if (ref.match(/^[12][A-L]$/)) {
            const position = parseInt(ref[0]) - 1;
            const groupId = ref[1];
            return this.groupStandings[groupId]?.[position]?.team || null;
        }

        // Third place (3_74, 3_77, etc.)
        if (ref.startsWith('3_')) {
            const matchId = parseInt(ref.slice(2));
            const mapping = getThirdPlaceMatchMapping(this.qualifiedThirdPlace);
            const groupLetter = mapping[matchId];

            if (!groupLetter) return null;

            const thirdPlace = this.thirdPlaceRankings.find(t => t.group === groupLetter);
            return thirdPlace?.team || null;
        }

        return null;
    }

    // Get group position label for a team (e.g., "A1", "B2", "C3")
    getTeamGroupPosition(team) {
        if (!team) return null;

        for (const [groupId, standings] of Object.entries(this.groupStandings)) {
            if (!standings) continue;
            const first = standings[0]?.team;
            const second = standings[1]?.team;
            const third = standings[2]?.team;

            if (first?.code === team.code) return `${groupId}1`;
            if (second?.code === team.code) return `${groupId}2`;
            if (third?.code === team.code) return `${groupId}3`;
        }
        return null;
    }

    // Check if match is Round of 32 (IDs 73-88)
    isR32Match(matchId) {
        return matchId >= 73 && matchId <= 88;
    }

    // Simulate all knockout rounds
    simulateKnockout() {
        this.matchResults = {};
        this.matchTeams = {};

        // Round of 32
        r32Matches.forEach(match => {
            const team1 = this.getKnockoutTeam(match.team1);
            const team2 = this.getKnockoutTeam(match.team2);
            this.matchTeams[match.id] = { team1, team2 };
            this.matchResults[match.id] = this.simulateMatch(team1, team2, true);
        });

        // Round of 16
        r16Matches.forEach(match => {
            const team1 = this.getKnockoutTeam(match.team1);
            const team2 = this.getKnockoutTeam(match.team2);
            this.matchTeams[match.id] = { team1, team2 };
            this.matchResults[match.id] = this.simulateMatch(team1, team2, true);
        });

        // Quarterfinals
        qfMatches.forEach(match => {
            const team1 = this.getKnockoutTeam(match.team1);
            const team2 = this.getKnockoutTeam(match.team2);
            this.matchTeams[match.id] = { team1, team2 };
            this.matchResults[match.id] = this.simulateMatch(team1, team2, true);
        });

        // Semifinals
        sfMatches.forEach(match => {
            const team1 = this.getKnockoutTeam(match.team1);
            const team2 = this.getKnockoutTeam(match.team2);
            this.matchTeams[match.id] = { team1, team2 };
            this.matchResults[match.id] = this.simulateMatch(team1, team2, true);
        });

        // Third place
        const third1 = this.getKnockoutTeam(thirdPlaceMatch.team1);
        const third2 = this.getKnockoutTeam(thirdPlaceMatch.team2);
        this.matchTeams[thirdPlaceMatch.id] = { team1: third1, team2: third2 };
        this.matchResults[thirdPlaceMatch.id] = this.simulateMatch(third1, third2, true);
        this.thirdPlace = this.getWinner(this.matchResults[thirdPlaceMatch.id]);

        // Final
        const final1 = this.getKnockoutTeam(finalMatch.team1);
        const final2 = this.getKnockoutTeam(finalMatch.team2);
        this.matchTeams[finalMatch.id] = { team1: final1, team2: final2 };
        this.matchResults[finalMatch.id] = this.simulateMatch(final1, final2, true);
        this.champion = this.getWinner(this.matchResults[finalMatch.id]);
    }

    // Run full tournament simulation
    simulate() {
        this.simulationCount++;
        this.simulateGroupStage();
        this.simulateKnockout();
        this.render();
    }

    // Render all displays
    render() {
        this.renderGroupStage();
        this.renderThirdPlace();
        this.renderKnockoutBracket();
        this.renderChampion();
        this.updateStats();
    }

    // Update stats display
    updateStats() {
        const counter = document.getElementById('tournamentSimulationCounter');
        if (counter) counter.textContent = this.simulationCount;
    }

    // ==========================================
    // GROUP STAGE RENDERING (matching app.js style)
    // ==========================================

    renderGroupStage() {
        const container = document.getElementById('groupStageContent');
        const status = document.getElementById('groupStageStatus');

        if (!container) return;

        // Update status
        if (status) {
            status.className = 'sim-section-status status-complete';
            status.textContent = 'Complete';
        }

        // Check current view
        const standingsBtn = document.getElementById('standingsViewBtn');
        const isStandingsView = standingsBtn?.classList.contains('active');

        if (isStandingsView) {
            this.renderGroupStandings(container);
        } else {
            this.renderGroupMatches(container);
        }
    }

    // Render group standings - clean table layout
    renderGroupStandings(container) {
        let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; padding: 1rem;">';

        Object.entries(this.groupStandings).forEach(([groupId, standings]) => {
            html += `
                <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 0.625rem 1rem; font-weight: 600; font-size: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
                        <span>Group ${groupId}</span>
                        <span style="font-size: 0.65rem; opacity: 0.8;">Complete</span>
                    </div>
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem;">
                        <thead>
                            <tr style="background: #f8fafc; font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase;">
                                <th style="padding: 0.5rem 0.375rem; text-align: left; width: 24px;">#</th>
                                <th style="padding: 0.5rem 0.375rem; text-align: left;">Team</th>
                                <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">P</th>
                                <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">W</th>
                                <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">D</th>
                                <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">L</th>
                                <th style="padding: 0.5rem 0.375rem; text-align: center; width: 36px;">GD</th>
                                <th style="padding: 0.5rem 0.375rem; text-align: center; width: 32px; font-weight: 700;">Pts</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            standings.forEach((row, idx) => {
                const team = row.team;
                const isQualified = idx < 2 || (idx === 2 && this.qualifiedThirdPlace.includes(groupId));
                const isEliminated = idx === 3;

                let rowBg = '#fff';
                let borderLeft = 'none';
                if (idx === 0) { rowBg = 'rgba(212, 175, 55, 0.1)'; borderLeft = '3px solid #d4af37'; }
                else if (idx === 1) { rowBg = 'rgba(168, 168, 168, 0.1)'; borderLeft = '3px solid #a8a8a8'; }
                else if (idx === 2 && isQualified) { rowBg = 'rgba(205, 127, 50, 0.1)'; borderLeft = '3px solid #cd7f32'; }

                html += `
                    <tr style="background: ${rowBg}; border-left: ${borderLeft}; ${isEliminated ? 'opacity: 0.5;' : ''}">
                        <td style="padding: 0.5rem 0.375rem; font-weight: 600; color: var(--text-muted);">${idx + 1}</td>
                        <td style="padding: 0.5rem 0.375rem;">
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <span style="font-size: 1rem;">${team?.flag || ''}</span>
                                <span style="font-weight: 500;">${team?.name || 'TBD'}</span>
                            </div>
                        </td>
                        <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.played}</td>
                        <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.won}</td>
                        <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.drawn}</td>
                        <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.lost}</td>
                        <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace; color: ${row.gd > 0 ? '#166534' : row.gd < 0 ? '#991b1b' : 'inherit'};">${row.gd > 0 ? '+' : ''}${row.gd}</td>
                        <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace; font-weight: 700;">${row.points}</td>
                    </tr>
                `;
            });

            html += '</tbody></table></div>';
        });

        html += '</div>';
        container.innerHTML = html;
    }

    // Render group match results - clean grid layout
    renderGroupMatches(container) {
        let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem; padding: 1rem;">';

        Object.entries(this.groupResults).forEach(([groupId, matches]) => {
            html += `
                <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 0.625rem 1rem; font-weight: 600; font-size: 0.8rem;">
                        Group ${groupId} Results
                    </div>
                    <div style="padding: 0.5rem;">
            `;

            // Build match data with proper match info, then sort by match number
            const groupMatches = GROUP_MATCHES[groupId];
            const groupTeams = groups[groupId].teams;

            const matchesWithInfo = matches.map(result => {
                // Find team indices by matching resolved team codes
                let team1Idx = -1, team2Idx = -1;
                for (let i = 0; i < groupTeams.length; i++) {
                    const resolved = this.resolveTeam(groupTeams[i]);
                    if (resolved?.code === result.team1.code) team1Idx = i;
                    if (resolved?.code === result.team2.code) team2Idx = i;
                }

                // Find matching GROUP_MATCHES entry by team indices
                const matchInfo = groupMatches?.find(m =>
                    (m.team1 === team1Idx && m.team2 === team2Idx) ||
                    (m.team1 === team2Idx && m.team2 === team1Idx)
                );

                return { result, matchInfo };
            });

            // Sort by match number (chronological order)
            matchesWithInfo.sort((a, b) => (a.matchInfo?.match || 999) - (b.matchInfo?.match || 999));

            matchesWithInfo.forEach(({ result, matchInfo }, idx) => {
                const isWinner1 = result.score1 > result.score2;
                const isWinner2 = result.score2 > result.score1;
                const isDraw = result.score1 === result.score2;

                html += `
                    <div style="background: ${idx % 2 === 0 ? '#fafafa' : '#fff'}; border-radius: 6px; padding: 0.5rem 0.75rem; margin-bottom: 0.375rem; border: 1px solid #eee;">
                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.6rem; color: var(--text-muted); margin-bottom: 0.375rem;">
                            <span style="font-weight: 600;">M${matchInfo?.match || idx + 1}</span>
                            <span>${matchInfo?.venue || ''}</span>
                            <span>${matchInfo?.date || ''}</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; ${isWinner1 ? 'font-weight: 600;' : isDraw ? '' : 'opacity: 0.6;'}">
                                <span style="font-size: 1.1rem;">${result.team1.flag}</span>
                                <span style="font-size: 0.75rem; ${isWinner1 ? 'color: #166534;' : ''}">${result.team1.name}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem; background: #f1f5f9; padding: 0.25rem 0.625rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.85rem;">
                                <span style="${isWinner1 ? 'color: #166534;' : ''}">${result.score1}</span>
                                <span style="color: #999; font-size: 0.7rem;">-</span>
                                <span style="${isWinner2 ? 'color: #166534;' : ''}">${result.score2}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; justify-content: flex-end; ${isWinner2 ? 'font-weight: 600;' : isDraw ? '' : 'opacity: 0.6;'}">
                                <span style="font-size: 0.75rem; ${isWinner2 ? 'color: #166534;' : ''}">${result.team2.name}</span>
                                <span style="font-size: 1.1rem;">${result.team2.flag}</span>
                            </div>
                        </div>
                    </div>
                `;
            });

            html += '</div></div>';
        });

        html += '</div>';
        container.innerHTML = html;
    }

    // ==========================================
    // THIRD PLACE RENDERING (matching app.js style)
    // ==========================================

    renderThirdPlace() {
        const section = document.getElementById('thirdPlaceSection');
        const container = document.getElementById('thirdPlaceContent');

        if (!section || !container) return;

        section.classList.remove('hidden');

        let html = `
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem;">
                    <thead>
                        <tr style="background: #f8fafc; font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase;">
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">#</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 32px;">Grp</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: left;">Team</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">P</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">W</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">D</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 28px;">L</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 36px;">GF</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 36px;">GA</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 36px;">GD</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 32px; font-weight: 700;">Pts</th>
                            <th style="padding: 0.5rem 0.375rem; text-align: center; width: 40px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        this.thirdPlaceRankings.forEach((row, idx) => {
            const isQualified = idx < 8;
            const team = row.team;

            let rowBg = '#fff';
            let borderLeft = 'none';
            if (isQualified) {
                rowBg = 'rgba(34, 197, 94, 0.08)';
                borderLeft = '3px solid #22c55e';
            }

            const statusBadge = isQualified
                ? '<span style="background: #dcfce7; color: #166534; padding: 0.15rem 0.375rem; border-radius: 3px; font-size: 0.55rem; font-weight: 600;">Q</span>'
                : '<span style="background: #fef2f2; color: #991b1b; padding: 0.15rem 0.375rem; border-radius: 3px; font-size: 0.55rem; font-weight: 600;">OUT</span>';

            html += `
                <tr style="background: ${rowBg}; border-left: ${borderLeft}; ${!isQualified ? 'opacity: 0.5;' : ''}">
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-weight: 600; color: var(--text-muted);">${idx + 1}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-weight: 600; color: ${isQualified ? '#166534' : 'var(--text-muted)'};">${row.group}</td>
                    <td style="padding: 0.5rem 0.375rem;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1rem;">${team?.flag || ''}</span>
                            <span style="font-weight: 500;">${team?.name || 'TBD'}</span>
                        </div>
                    </td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.played}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.won}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.drawn}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.lost}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.gf}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace;">${row.ga}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace; color: ${row.gd > 0 ? '#166534' : row.gd < 0 ? '#991b1b' : 'inherit'};">${row.gd > 0 ? '+' : ''}${row.gd}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center; font-family: 'JetBrains Mono', monospace; font-weight: 700;">${row.points}</td>
                    <td style="padding: 0.5rem 0.375rem; text-align: center;">${statusBadge}</td>
                </tr>
            `;

            // Add divider row after 8th team
            if (idx === 7 && this.thirdPlaceRankings.length > 8) {
                html += `
                    <tr>
                        <td colspan="12" style="padding: 0; position: relative;">
                            <div style="height: 1px; background: var(--border-color); margin: 0.25rem 0;"></div>
                            <span style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); font-size: 0.45rem; color: var(--text-muted); background: #fff; padding: 0 0.375rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.04em;">cutoff</span>
                        </td>
                    </tr>
                `;
            }
        });

        html += `
                    </tbody>
                </table>
            </div>
            <div style="text-align: center; font-size: 0.65rem; color: #166534; padding: 0.5rem; border-top: 1px solid var(--border-color);">
                8 of 8 qualified ✓
            </div>
        `;

        container.innerHTML = html;
    }

    // ==========================================
    // KNOCKOUT BRACKET RENDERING (matching app.js style)
    // ==========================================

    renderKnockoutBracket() {
        const section = document.getElementById('knockoutSection');
        const container = document.getElementById('knockoutContent');

        if (!section || !container) return;

        section.classList.remove('hidden');

        // Check current view
        const bracketBtn = document.getElementById('bracketViewBtn');
        const isBracketView = bracketBtn?.classList.contains('active');

        if (isBracketView) {
            this.renderBracketView(container);
        } else {
            this.renderKnockoutMatchList(container);
        }
    }

    // Create bracket node HTML (same as app.js)
    createBracketNode(match, matchId) {
        const result = this.matchResults[matchId];
        const teams = this.matchTeams[matchId] || { team1: null, team2: null };
        const winner = result ? this.getWinner(result) : null;
        const hasWinner = !!winner;

        const team1Class = teams.team1 ? (winner?.code === teams.team1.code ? 'winner' : '') : 'empty';
        const team2Class = teams.team2 ? (winner?.code === teams.team2.code ? 'winner' : '') : 'empty';

        // Only show group position in R32
        const pos1 = this.isR32Match(matchId) && teams.team1 ? this.getTeamGroupPosition(teams.team1) : null;
        const pos2 = this.isR32Match(matchId) && teams.team2 ? this.getTeamGroupPosition(teams.team2) : null;

        // Format score display
        let score1 = result ? result.score1 : '';
        let score2 = result ? result.score2 : '';
        let penDisplay = '';
        if (result?.penalties) {
            penDisplay = `<div style="text-align: center; font-size: 0.5rem; color: var(--text-muted); background: #fef3c7; padding: 1px;">PEN: ${result.penScore1}-${result.penScore2}</div>`;
        } else if (result?.extraTime) {
            penDisplay = `<div style="text-align: center; font-size: 0.5rem; color: var(--text-muted); background: #f0f7ff; padding: 1px;">AET</div>`;
        }

        return `
            <div class="bracket-node ${hasWinner ? 'has-winner' : ''}" data-match-id="${matchId}">
                <div class="bracket-node-header">
                    <span>M${matchId}</span>
                    <span>${match.city || ''}</span>
                </div>
                <div class="bracket-node-teams">
                    <div class="bracket-team ${team1Class}">
                        ${teams.team1 ? `${pos1 ? `<span class="team-seed">${pos1}</span>` : ''}<span class="team-flag">${teams.team1.flag}</span><span class="team-name">${teams.team1.name}</span><span style="margin-left: auto; font-weight: 700; font-family: monospace;">${score1}</span>` : '<span class="team-name">TBD</span>'}
                    </div>
                    <div class="bracket-team ${team2Class}">
                        ${teams.team2 ? `${pos2 ? `<span class="team-seed">${pos2}</span>` : ''}<span class="team-flag">${teams.team2.flag}</span><span class="team-name">${teams.team2.name}</span><span style="margin-left: auto; font-weight: 700; font-family: monospace;">${score2}</span>` : '<span class="team-name">TBD</span>'}
                    </div>
                </div>
                ${penDisplay}
            </div>
        `;
    }

    // Bracket configuration (same as app.js)
    getBracketConfig() {
        return {
            left: {
                r32: [74, 77, 73, 75, 83, 84, 81, 82],
                r16: [89, 90, 93, 94],
                qf: [97, 98],
                sf: [101]
            },
            right: {
                r32: [76, 78, 79, 80, 86, 88, 85, 87],
                r16: [91, 92, 95, 96],
                qf: [99, 100],
                sf: [102]
            }
        };
    }

    // Get grid position for a match
    getGridPosition(round, index) {
        switch (round) {
            case 'r32': return { rowStart: index * 2 + 1, span: 2 };
            case 'r16': return { rowStart: index * 4 + 1, span: 4 };
            case 'qf': return { rowStart: index * 8 + 1, span: 8 };
            case 'sf': return { rowStart: 1, span: 16 };
            default: return { rowStart: 1, span: 2 };
        }
    }

    // Render bracket column
    renderBracketColumn(matchIds, round, allMatches) {
        let html = '';
        matchIds.forEach((matchId, index) => {
            const match = allMatches.find(m => m.id === matchId);
            if (!match) return;

            const pos = this.getGridPosition(round, index);
            html += `
                <div class="bracket-match-slot" style="grid-row: ${pos.rowStart} / span ${pos.span};">
                    ${this.createBracketNode(match, matchId)}
                </div>
            `;
        });
        return html;
    }

    // Render full bracket view (same structure as app.js)
    renderBracketView(container) {
        const config = this.getBracketConfig();
        const allMatches = [...r32Matches, ...r16Matches, ...qfMatches, ...sfMatches];

        // Create final and third place nodes
        const finalResult = this.matchResults[finalMatch.id];
        const finalWinner = finalResult ? this.getWinner(finalResult) : null;
        const thirdResult = this.matchResults[thirdPlaceMatch.id];
        const thirdWinner = thirdResult ? this.getWinner(thirdResult) : null;

        const html = `
            <div class="bracket-view">
                <div class="bracket-container">
                    <!-- Left Side -->
                    <div class="bracket-side bracket-left">
                        <div class="bracket-column r32-col" id="bracket-r32-left">
                            ${this.renderBracketColumn(config.left.r32, 'r32', allMatches)}
                        </div>
                        <div class="bracket-column r16-col" id="bracket-r16-left">
                            ${this.renderBracketColumn(config.left.r16, 'r16', allMatches)}
                        </div>
                        <div class="bracket-column qf-col" id="bracket-qf-left">
                            ${this.renderBracketColumn(config.left.qf, 'qf', allMatches)}
                        </div>
                        <div class="bracket-column sf-col" id="bracket-sf-left">
                            ${this.renderBracketColumn(config.left.sf, 'sf', allMatches)}
                        </div>
                    </div>
                    <!-- Final -->
                    <div class="bracket-final">
                        <div class="final-column" id="bracket-final">
                            <div class="bracket-match-slot">
                                ${this.createBracketNode(finalMatch, finalMatch.id)}
                                ${finalWinner ? `<div class="bracket-champion">🏆 Champion</div>` : ''}
                            </div>
                        </div>
                        <div class="third-place-column" id="bracket-third">
                            <div class="bracket-match-slot">
                                ${this.createBracketNode(thirdPlaceMatch, thirdPlaceMatch.id)}
                                ${thirdWinner ? `<div class="bracket-third-label">🥉 3rd Place</div>` : ''}
                            </div>
                        </div>
                    </div>
                    <!-- Right Side -->
                    <div class="bracket-side bracket-right">
                        <div class="bracket-column sf-col" id="bracket-sf-right">
                            ${this.renderBracketColumn(config.right.sf, 'sf', allMatches)}
                        </div>
                        <div class="bracket-column qf-col" id="bracket-qf-right">
                            ${this.renderBracketColumn(config.right.qf, 'qf', allMatches)}
                        </div>
                        <div class="bracket-column r16-col" id="bracket-r16-right">
                            ${this.renderBracketColumn(config.right.r16, 'r16', allMatches)}
                        </div>
                        <div class="bracket-column r32-col" id="bracket-r32-right">
                            ${this.renderBracketColumn(config.right.r32, 'r32', allMatches)}
                        </div>
                    </div>
                </div>
                <!-- Round Labels -->
                <div class="bracket-labels">
                    <span>R32</span>
                    <span>R16</span>
                    <span>QF</span>
                    <span>SF</span>
                    <span>Final</span>
                    <span>SF</span>
                    <span>QF</span>
                    <span>R16</span>
                    <span>R32</span>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    // Render knockout matches as list (using original match card style)
    renderKnockoutMatchList(container) {
        const renderRound = (title, matches, isFinal = false) => {
            let html = `
                <div style="margin-bottom: 2rem;">
                    <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 0.625rem 1rem; font-weight: 600; font-size: 0.85rem; border-radius: 8px 8px 0 0; letter-spacing: 0.03em;">
                        ${title}
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 0.5rem; padding: 0.75rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-top: none; border-radius: 0 0 8px 8px;">
            `;

            matches.forEach((match, idx) => {
                const result = this.matchResults[match.id];
                if (!result) return;

                const winner = this.getWinner(result);
                const isWinner1 = winner?.code === result.team1.code;
                const isWinner2 = winner?.code === result.team2.code;

                let extraInfo = '';
                if (result.penalties) {
                    extraInfo = `<div style="text-align: center; font-size: 0.6rem; color: #92400e; background: #fef3c7; padding: 0.25rem 0.5rem; border-radius: 3px; margin-top: 0.375rem; font-family: 'JetBrains Mono', monospace;">PEN: ${result.penScore1} - ${result.penScore2}</div>`;
                } else if (result.extraTime) {
                    extraInfo = `<div style="text-align: center; font-size: 0.6rem; color: #1e40af; background: #dbeafe; padding: 0.25rem 0.5rem; border-radius: 3px; margin-top: 0.375rem;">After Extra Time</div>`;
                }

                const cardBorder = isFinal ? '2px solid var(--gold)' : '1px solid #eee';
                const cardBg = isFinal ? 'linear-gradient(180deg, #fffbeb 0%, #fff 100%)' : (idx % 2 === 0 ? '#fafafa' : '#fff');

                html += `
                    <div style="background: ${cardBg}; border-radius: 6px; padding: 0.625rem 0.75rem; border: ${cardBorder};">
                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.6rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                            <span style="font-weight: 600; font-family: 'JetBrains Mono', monospace;">M${match.id}</span>
                            <span>${match.city}</span>
                            <span>${match.date}</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; ${isWinner1 ? 'font-weight: 600;' : 'opacity: 0.6;'}">
                                <span style="font-size: 1.1rem;">${result.team1.flag}</span>
                                <span style="font-size: 0.75rem; ${isWinner1 ? 'color: #166534;' : ''}">${result.team1.name}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.375rem; background: #f1f5f9; padding: 0.375rem 0.75rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.9rem;">
                                <span style="${isWinner1 ? 'color: #166534;' : ''}">${result.score1}</span>
                                <span style="color: #999; font-size: 0.75rem;">-</span>
                                <span style="${isWinner2 ? 'color: #166534;' : ''}">${result.score2}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; justify-content: flex-end; ${isWinner2 ? 'font-weight: 600;' : 'opacity: 0.6;'}">
                                <span style="font-size: 0.75rem; ${isWinner2 ? 'color: #166534;' : ''}">${result.team2.name}</span>
                                <span style="font-size: 1.1rem;">${result.team2.flag}</span>
                            </div>
                        </div>
                        ${extraInfo}
                    </div>
                `;
            });

            html += '</div></div>';
            return html;
        };

        let html = '<div style="padding: 1rem;">';
        html += renderRound('Round of 32', r32Matches);
        html += renderRound('Round of 16', r16Matches);
        html += renderRound('Quarterfinals', qfMatches);
        html += renderRound('Semifinals', sfMatches);
        html += renderRound('Third Place Match', [thirdPlaceMatch]);
        html += renderRound('Final', [finalMatch], true);
        html += '</div>';

        container.innerHTML = html;
    }

    // ==========================================
    // CHAMPION RENDERING
    // ==========================================

    renderChampion() {
        const section = document.getElementById('championSection');
        const container = document.getElementById('championContent');

        if (!section || !container || !this.champion) return;

        section.classList.remove('hidden');

        const finalResult = this.matchResults[finalMatch.id];
        const runnerUp = this.getLoser(finalResult);

        // Count wins and goals
        let wins = 0, goalsFor = 0, goalsAgainst = 0;

        // Knockout stage stats
        Object.values(this.matchResults).forEach(result => {
            if (!result) return;
            const winner = this.getWinner(result);
            if (winner?.code === this.champion.code) {
                wins++;
                goalsFor += result.team1.code === this.champion.code ? result.score1 : result.score2;
                goalsAgainst += result.team1.code === this.champion.code ? result.score2 : result.score1;
            }
        });

        // Group stage stats
        Object.entries(this.groupStandings).forEach(([groupId, standings]) => {
            const champRow = standings.find(s => s.team?.code === this.champion.code);
            if (champRow) {
                wins += champRow.won;
                goalsFor += champRow.gf;
                goalsAgainst += champRow.ga;
            }
        });

        container.innerHTML = `
            <div style="text-align: center; padding: 2rem 1rem; background: linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%); border: 2px solid var(--gold); border-radius: 12px;">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">🏆</div>
                <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.25rem;">FIFA World Cup 2026 Champion</div>
                <div style="font-size: 1.75rem; font-weight: 700; color: #92400e; margin-bottom: 1rem;">
                    <span style="font-size: 2rem; margin-right: 0.5rem;">${this.champion.flag}</span>
                    ${this.champion.name}
                </div>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; font-size: 0.75rem;">
                    <div style="text-align: center;">
                        <div style="font-weight: 600; color: var(--text-primary);">${wins}</div>
                        <div style="font-size: 0.6rem; color: var(--text-muted);">Matches Won</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-weight: 600; color: var(--text-primary);">${goalsFor}</div>
                        <div style="font-size: 0.6rem; color: var(--text-muted);">Goals Scored</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-weight: 600; color: var(--text-primary);">${goalsAgainst}</div>
                        <div style="font-size: 0.6rem; color: var(--text-muted);">Goals Conceded</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-weight: 600; color: var(--text-primary);">${runnerUp?.flag || ''} ${runnerUp?.name || ''}</div>
                        <div style="font-size: 0.6rem; color: var(--text-muted);">Runner-up</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-weight: 600; color: var(--text-primary);">${this.thirdPlace?.flag || ''} ${this.thirdPlace?.name || ''}</div>
                        <div style="font-size: 0.6rem; color: var(--text-muted);">Third Place</div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Global simulator instance
let simulator = new TournamentSimulator();

// View switching functions
function switchGroupView(view) {
    const standingsBtn = document.getElementById('standingsViewBtn');
    const resultsBtn = document.getElementById('matchResultsViewBtn');

    if (view === 'standings') {
        standingsBtn?.classList.add('active');
        resultsBtn?.classList.remove('active');
    } else {
        standingsBtn?.classList.remove('active');
        resultsBtn?.classList.add('active');
    }

    if (Object.keys(simulator.groupStandings).length > 0) {
        simulator.renderGroupStage();
    }
}

function switchKnockoutView(view) {
    const bracketBtn = document.getElementById('bracketViewBtn');
    const matchesBtn = document.getElementById('knockoutMatchesViewBtn');

    if (view === 'bracket') {
        bracketBtn?.classList.add('active');
        matchesBtn?.classList.remove('active');
    } else {
        bracketBtn?.classList.remove('active');
        matchesBtn?.classList.add('active');
    }

    if (Object.keys(simulator.matchResults).length > 0) {
        simulator.renderKnockoutBracket();
    }
}

// Third place section toggle
let thirdPlaceExpanded = true;
function toggle3rdPlaceSection() {
    const content = document.getElementById('thirdPlaceContent');
    const toggleBtn = document.getElementById('toggle3rdPlace');

    thirdPlaceExpanded = !thirdPlaceExpanded;

    if (content) {
        content.style.display = thirdPlaceExpanded ? 'block' : 'none';
    }
    if (toggleBtn) {
        toggleBtn.innerHTML = `<span>${thirdPlaceExpanded ? '&#9650;' : '&#9660;'}</span> ${thirdPlaceExpanded ? 'Hide' : 'Show'}`;
    }
}

// Zoom controls
let currentZoom = 1;
function zoomBracket(delta) {
    currentZoom = Math.max(0.5, Math.min(1.5, currentZoom + delta));
    const container = document.querySelector('.bracket-container');
    if (container) {
        container.style.transform = `scale(${currentZoom})`;
        container.style.transformOrigin = 'center top';
    }
    const zoomLevel = document.getElementById('zoomLevel');
    if (zoomLevel) {
        zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
    }
}

function resetZoom() {
    currentZoom = 1;
    const container = document.querySelector('.bracket-container');
    if (container) {
        container.style.transform = 'scale(1)';
    }
    const zoomLevel = document.getElementById('zoomLevel');
    if (zoomLevel) {
        zoomLevel.textContent = '100%';
    }
}

// Download bracket as image
function downloadBracketAsImage() {
    const bracket = document.querySelector('.bracket-container');
    if (!bracket) return;

    html2canvas(bracket, {
        backgroundColor: '#fafafa',
        scale: 2,
        logging: false
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `wc2026-simulation-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        console.error('Screenshot failed:', err);
        alert('Failed to download bracket image.');
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const simulateBtn = document.getElementById('simulateAllBtn');
    if (simulateBtn) {
        simulateBtn.addEventListener('click', () => {
            simulator.simulate();
            simulateBtn.textContent = 'Re-simulate Tournament';
        });
    }
});

// Settings panel functions
function toggleSimSettings() {
    const panel = document.getElementById('simSettingsPanel');
    const btn = document.getElementById('toggleSettingsBtn');
    if (panel) {
        panel.classList.toggle('hidden');
        if (btn) {
            btn.innerHTML = panel.classList.contains('hidden')
                ? '<span class="btn-icon">⚙</span> Settings'
                : '<span class="btn-icon">✕</span> Close';
        }
    }
}

function updateSettingValue(settingId) {
    const slider = document.getElementById(settingId);
    const valueDisplay = document.getElementById(settingId + 'Value');
    if (slider && valueDisplay) {
        const value = slider.value;
        valueDisplay.textContent = value + '%';
        simSettings[settingId] = parseInt(value);
    }
}

function applyPreset(preset) {
    const presets = {
        realistic: { upsetChance: 40, homeAdvantage: 50, eliteBoost: 50, goalVolume: 45 },
        chaotic: { upsetChance: 80, homeAdvantage: 30, eliteBoost: 20, goalVolume: 70 },
        favorites: { upsetChance: 15, homeAdvantage: 40, eliteBoost: 80, goalVolume: 50 },
        underdogs: { upsetChance: 75, homeAdvantage: 60, eliteBoost: 10, goalVolume: 55 }
    };

    const settings = presets[preset];
    if (!settings) return;

    Object.entries(settings).forEach(([key, value]) => {
        simSettings[key] = value;
        const slider = document.getElementById(key);
        const valueDisplay = document.getElementById(key + 'Value');
        if (slider) slider.value = value;
        if (valueDisplay) valueDisplay.textContent = value + '%';
    });
}

// Make functions globally available
window.switchGroupView = switchGroupView;
window.switchKnockoutView = switchKnockoutView;
window.toggle3rdPlaceSection = toggle3rdPlaceSection;
window.zoomBracket = zoomBracket;
window.resetZoom = resetZoom;
window.downloadBracketAsImage = downloadBracketAsImage;
window.toggleSimSettings = toggleSimSettings;
window.updateSettingValue = updateSettingValue;
window.applyPreset = applyPreset;
