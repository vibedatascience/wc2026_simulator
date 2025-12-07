// FIFA World Cup 2026 Simulator - Main Application

// State management
const state = {
    playoffSelections: {}, // { pathCode: selectedTeam } e.g., { UPA: { name: "Italy", ... } }
    groupSelections: {}, // { groupId: { first: team, second: team, third: team } }
    thirdPlaceTeams: [], // Array of { group, team } for all 3rd place teams
    selectedThirdPlace: [], // Array of group letters for selected 3rd place teams
    knockoutResults: {}, // { matchId: winnerTeam }
    matchTeams: {} // { matchId: { team1: team, team2: team } }
};

// Initialize the application
function init() {
    renderGroups();
    renderKnockoutBracket();
    updateThirdPlaceSection();
}

// Render all groups
function renderGroups() {
    const container = document.getElementById('groups-container');
    container.innerHTML = '';

    Object.entries(groups).forEach(([groupId, group]) => {
        const groupCard = createGroupCard(groupId, group);
        container.appendChild(groupCard);
    });
}

// Helper to get team position for sorting
function getTeamPosition(team, selection) {
    const teamCode = team.code;
    if (selection.first?.code === teamCode) return 1;
    if (selection.second?.code === teamCode) return 2;
    if (selection.third?.code === teamCode) return 3;
    return 4; // Unselected
}

// Create a group card element
function createGroupCard(groupId, group) {
    const card = document.createElement('div');
    card.className = 'group-card';
    card.id = `group-${groupId}`;

    const selection = state.groupSelections[groupId] || {};
    const isComplete = selection.first && selection.second && selection.third;

    // Sort teams: 1st, 2nd, 3rd, then unselected (in original order)
    const sortedTeams = [...group.teams].sort((a, b) => {
        const aPos = getTeamPosition(a, selection);
        const bPos = getTeamPosition(b, selection);
        return aPos - bPos;
    });

    card.innerHTML = `
        <div class="group-header">
            <span class="group-name">${group.name}</span>
            <span class="group-status ${isComplete ? 'complete' : ''}">${isComplete ? '✓' : ''}</span>
        </div>
        <div class="group-teams" data-group-id="${groupId}">
            ${sortedTeams.map(team => createTeamRow(groupId, team, selection)).join('')}
        </div>
    `;

    // Add click handlers for team selection
    card.querySelectorAll('.team-row').forEach(row => {
        row.addEventListener('click', (e) => {
            // If clicking on playoff picker, show dropdown instead
            if (e.target.classList.contains('playoff-picker')) {
                e.stopPropagation();
                showPlayoffDropdown(e.target, e.target.dataset.path, groupId);
                return;
            }
            handleTeamClick(groupId, row.dataset.teamCode);
        });
    });

    return card;
}

// Handle team click - assign next available position or deselect
function handleTeamClick(groupId, teamCode) {
    const group = groups[groupId];
    const team = group.teams.find(t => t.code === teamCode);

    if (!state.groupSelections[groupId]) {
        state.groupSelections[groupId] = {};
    }

    const selection = state.groupSelections[groupId];

    // Check if team is already selected
    if (selection.first?.code === teamCode) {
        // Deselect 1st place
        selection.first = null;
    } else if (selection.second?.code === teamCode) {
        // Deselect 2nd place
        selection.second = null;
    } else if (selection.third?.code === teamCode) {
        // Deselect 3rd place
        selection.third = null;
    } else {
        // Team not selected - assign next available position
        if (!selection.first) {
            selection.first = team;
        } else if (!selection.second) {
            selection.second = team;
        } else if (!selection.third) {
            selection.third = team;
        }
        // If all positions filled, do nothing (user must deselect first)
    }

    // Re-render group
    const container = document.getElementById('groups-container');
    const oldCard = document.getElementById(`group-${groupId}`);
    const newCard = createGroupCard(groupId, group);
    container.replaceChild(newCard, oldCard);

    // Update third place teams and knockout bracket
    updateThirdPlaceSection();
    updateKnockoutBracket();
}

// Show playoff team dropdown
function showPlayoffDropdown(anchor, pathCode, groupId) {
    // Remove any existing dropdown
    const existing = document.querySelector('.playoff-dropdown');
    if (existing) existing.remove();

    const path = playoffPaths[pathCode];
    if (!path) return;

    const dropdown = document.createElement('div');
    dropdown.className = 'playoff-dropdown';

    dropdown.innerHTML = `
        <div class="playoff-dropdown-header">${path.name}</div>
        ${path.options.map(team => `
            <div class="playoff-dropdown-option ${state.playoffSelections[pathCode]?.code === team.code ? 'selected' : ''}" data-code="${team.code}">
                <span class="team-flag">${team.flag}</span>
                <span class="team-name">${team.name}</span>
            </div>
        `).join('')}
    `;

    // Position dropdown
    const rect = anchor.getBoundingClientRect();
    dropdown.style.position = 'fixed';
    dropdown.style.top = `${rect.bottom + 4}px`;
    dropdown.style.left = `${rect.left}px`;

    document.body.appendChild(dropdown);

    // Handle option clicks
    dropdown.querySelectorAll('.playoff-dropdown-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedTeam = path.options.find(t => t.code === opt.dataset.code);
            state.playoffSelections[pathCode] = selectedTeam;
            dropdown.remove();
            renderGroups();
            updateThirdPlaceSection();
            updateKnockoutBracket();
        });
    });

    // Close on outside click
    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
            }
        });
    }, 0);
}

// Create a team row element
function createTeamRow(groupId, team, selection) {
    let positionClass = '';
    let positionNum = '';

    // Check if this is a playoff team that can be selected
    const isPlayoffTeam = team.qualifier && playoffPaths[team.code];
    const selectedPlayoffTeam = isPlayoffTeam ? state.playoffSelections[team.code] : null;
    const displayTeam = selectedPlayoffTeam || team;

    const isComplete = selection.first && selection.second && selection.third;

    if (selection.first?.code === displayTeam.code || (selectedPlayoffTeam && selection.first?.code === team.code)) {
        positionClass = 'first-place';
        positionNum = '1';
    } else if (selection.second?.code === displayTeam.code || (selectedPlayoffTeam && selection.second?.code === team.code)) {
        positionClass = 'second-place';
        positionNum = '2';
    } else if (selection.third?.code === displayTeam.code || (selectedPlayoffTeam && selection.third?.code === team.code)) {
        positionClass = 'third-place';
        positionNum = '3';
    } else if (isComplete) {
        positionNum = '4';
    }

    const tags = [];
    if (displayTeam.host) tags.push('<span class="team-tag host">H</span>');
    if (isPlayoffTeam) tags.push(`<span class="team-tag qualifier playoff-picker" data-path="${team.code}">${selectedPlayoffTeam ? '▼' : '?'}</span>`);

    return `
        <div class="team-row ${positionClass}" data-team-code="${team.code}" data-is-playoff="${isPlayoffTeam}">
            ${positionNum ? `<span class="team-pos">${positionNum}</span>` : ''}
            <span class="team-flag">${displayTeam.flag}</span>
            <span class="team-name">${displayTeam.name}</span>
            ${tags.join('')}
        </div>
    `;
}

// Update third place section
function updateThirdPlaceSection() {
    state.thirdPlaceTeams = [];

    // Collect all third place teams
    Object.entries(state.groupSelections).forEach(([groupId, selection]) => {
        if (selection.third) {
            state.thirdPlaceTeams.push({
                group: groupId,
                team: selection.third
            });
        }
    });

    renderThirdPlaceTeams();
}

// Render third place teams as a table with qualified teams on top
function renderThirdPlaceTeams() {
    const container = document.getElementById('third-place-container');
    const statusEl = document.getElementById('third-place-status');
    const selectedCount = document.getElementById('selected-count');

    container.innerHTML = '';

    if (state.thirdPlaceTeams.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 1rem; font-size: 0.7rem;">Complete group selections to see third-placed teams</p>';
        selectedCount.textContent = '0';
        return;
    }

    // Sort: selected teams first (sorted by group), then unselected (sorted by group)
    const selectedTeams = state.thirdPlaceTeams
        .filter(t => state.selectedThirdPlace.includes(t.group))
        .sort((a, b) => state.selectedThirdPlace.indexOf(a.group) - state.selectedThirdPlace.indexOf(b.group));

    const unselectedTeams = state.thirdPlaceTeams
        .filter(t => !state.selectedThirdPlace.includes(t.group))
        .sort((a, b) => a.group.localeCompare(b.group));

    // Render selected teams first
    selectedTeams.forEach(({ group, team }, index) => {
        const el = createThirdPlaceRow(group, team, index + 1, true);
        container.appendChild(el);
    });

    // Add divider line after 8th team if we have exactly 8 selected
    if (selectedTeams.length === 8 && unselectedTeams.length > 0) {
        const divider = document.createElement('div');
        divider.className = 'third-place-divider';
        container.appendChild(divider);
    }

    // Render unselected teams
    unselectedTeams.forEach(({ group, team }, index) => {
        const rank = selectedTeams.length + index + 1;
        const isDisabled = state.selectedThirdPlace.length >= 8;
        const el = createThirdPlaceRow(group, team, rank, false, isDisabled);
        container.appendChild(el);
    });

    selectedCount.textContent = state.selectedThirdPlace.length;

    if (state.selectedThirdPlace.length === 8) {
        statusEl.classList.add('complete');
        statusEl.innerHTML = '<span id="selected-count">8</span> of 8 selected ✓';
    } else {
        statusEl.classList.remove('complete');
        statusEl.innerHTML = `<span id="selected-count">${state.selectedThirdPlace.length}</span> of 8 selected`;
    }
}

// Create a third place table row
function createThirdPlaceRow(group, team, rank, isQualified, isDisabled = false) {
    const el = document.createElement('div');
    el.className = `third-place-team ${isQualified ? 'qualified' : ''} ${isDisabled ? 'eliminated' : ''}`;
    el.dataset.group = group;

    // Resolve playoff team for display
    const displayTeam = (team.qualifier && playoffPaths[team.code] && state.playoffSelections[team.code])
        ? state.playoffSelections[team.code]
        : team;

    el.innerHTML = `
        <span class="rank">${rank}</span>
        <span class="group-badge">${group}</span>
        <div class="team-info">
            <span class="team-flag">${displayTeam.flag}</span>
            <span class="team-name">${displayTeam.name}</span>
        </div>
        <span class="status-badge">${isQualified ? 'Q' : (isDisabled ? 'OUT' : '—')}</span>
    `;

    if (!isDisabled) {
        el.addEventListener('click', () => handleThirdPlaceClick(group));
    }

    return el;
}

// Handle third place team selection
function handleThirdPlaceClick(group) {
    const index = state.selectedThirdPlace.indexOf(group);

    if (index > -1) {
        state.selectedThirdPlace.splice(index, 1);
    } else if (state.selectedThirdPlace.length < 8) {
        state.selectedThirdPlace.push(group);
    }

    renderThirdPlaceTeams();
    updateKnockoutBracket();
}

// Render knockout bracket (both list and bracket views)
function renderKnockoutBracket() {
    // List view
    // Round of 32
    renderRound(r32Matches.slice(0, 8), 'r32-left');
    renderRound(r32Matches.slice(8), 'r32-right');

    // Round of 16
    renderRound(r16Matches.slice(0, 4), 'r16-left');
    renderRound(r16Matches.slice(4), 'r16-right');

    // Quarterfinals
    renderRound(qfMatches.slice(0, 2), 'qf-left');
    renderRound(qfMatches.slice(2), 'qf-right');

    // Semifinals
    renderRound([sfMatches[0]], 'sf-left');
    renderRound([sfMatches[1]], 'sf-right');

    // Final
    renderFinalMatch();

    // Third place
    renderThirdPlaceGame();

    // Bracket view
    renderBracketView();
}

// Render a round of matches
function renderRound(matches, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    matches.forEach(match => {
        const matchCard = createMatchCard(match);
        container.appendChild(matchCard);
    });
}

// Create a match card
function createMatchCard(match) {
    const card = document.createElement('div');
    card.id = `match-${match.id}`;

    const teams = state.matchTeams[match.id] || { team1: null, team2: null };
    const winner = state.knockoutResults[match.id];
    const bothTeamsReady = teams.team1 && teams.team2;
    const awaitingPick = bothTeamsReady && !winner;

    card.className = `match-card ${awaitingPick ? 'awaiting-pick' : ''}`;

    card.innerHTML = `
        <div class="match-header">
            <span class="match-number">M${match.id}</span>
            <span class="match-city">${match.city || ''}</span>
            <span class="match-date">${match.date}</span>
        </div>
        <div class="match-teams">
            ${createMatchTeamRow(match.id, teams.team1, match.team1, winner, 1, teams.team2 != null)}
            <div class="match-vs">vs</div>
            ${createMatchTeamRow(match.id, teams.team2, match.team2, winner, 2, teams.team1 != null)}
        </div>
    `;

    // Add click handlers for team selection
    card.querySelectorAll('.match-team:not(.empty)').forEach(row => {
        row.addEventListener('click', () => {
            const teamNum = parseInt(row.dataset.teamNum);
            const team = teamNum === 1 ? teams.team1 : teams.team2;
            if (team) {
                handleKnockoutClick(match.id, team);
            }
        });
    });

    return card;
}

// Check if match is Round of 32 (IDs 73-88)
function isR32Match(matchId) {
    return matchId >= 73 && matchId <= 88;
}

// Create match team row
function createMatchTeamRow(matchId, team, placeholder, winner, teamNum, otherTeamExists = false) {
    if (!team) {
        return `
            <div class="match-team empty" data-team-num="${teamNum}">
                <span class="team-name">${formatPlaceholder(placeholder)}</span>
            </div>
        `;
    }

    const isWinner = winner?.code === team.code;
    const isClickable = otherTeamExists && !winner;
    // Only show group position in R32
    const groupPos = isR32Match(matchId) ? getTeamGroupPosition(team) : null;

    return `
        <div class="match-team ${isWinner ? 'winner' : ''} ${isClickable ? 'clickable' : ''}" data-team-num="${teamNum}">
            ${groupPos ? `<span class="team-seed">${groupPos}</span>` : ''}
            <span class="team-flag">${team.flag}</span>
            <span class="team-name">${team.name}</span>
        </div>
    `;
}

// Format placeholder text
function formatPlaceholder(placeholder) {
    if (placeholder.startsWith('W')) {
        return `W${placeholder.slice(1)}`;
    }
    if (placeholder.startsWith('L')) {
        return `L${placeholder.slice(1)}`;
    }
    if (placeholder.startsWith('1')) {
        return `1st ${placeholder.slice(1)}`;
    }
    if (placeholder.startsWith('2')) {
        return `2nd ${placeholder.slice(1)}`;
    }
    if (placeholder.startsWith('3')) {
        return `3rd`;
    }
    return placeholder;
}

// Handle knockout match click
function handleKnockoutClick(matchId, team) {
    if (state.knockoutResults[matchId]?.code === team.code) {
        // Deselect
        delete state.knockoutResults[matchId];
    } else {
        state.knockoutResults[matchId] = team;
    }

    updateKnockoutBracket();
}

// Update knockout bracket based on selections
function updateKnockoutBracket() {
    // Clear match teams
    state.matchTeams = {};

    // Populate R32 teams from group selections
    r32Matches.forEach(match => {
        state.matchTeams[match.id] = {
            team1: resolveTeamReference(match.team1),
            team2: resolveTeamReference(match.team2)
        };
    });

    // Propagate winners through rounds
    propagateWinners(r16Matches);
    propagateWinners(qfMatches);
    propagateWinners(sfMatches);
    propagateWinners([finalMatch]);
    propagateWinners([thirdPlaceMatch], true);

    // Re-render knockout bracket
    renderKnockoutBracket();

    // Update share hint visibility
    updateShareHint();
}

// Helper to resolve playoff team if applicable
function resolvePlayoffTeam(team) {
    if (!team) return null;
    // If this is a playoff placeholder and we have a selection, use the selected team
    if (team.qualifier && playoffPaths[team.code] && state.playoffSelections[team.code]) {
        return state.playoffSelections[team.code];
    }
    return team;
}

// Get group position label for a team (e.g., "A1", "B2", "C3")
function getTeamGroupPosition(team) {
    if (!team) return null;

    // Check each group's selections
    for (const [groupId, selection] of Object.entries(state.groupSelections)) {
        if (!selection) continue;

        const first = resolvePlayoffTeam(selection.first);
        const second = resolvePlayoffTeam(selection.second);
        const third = resolvePlayoffTeam(selection.third);

        if (first?.code === team.code) return `${groupId}1`;
        if (second?.code === team.code) return `${groupId}2`;
        if (third?.code === team.code) return `${groupId}3`;
    }
    return null;
}

// Resolve team reference (1A, 2B, 3_74, W73, L101, etc.)
function resolveTeamReference(ref) {
    if (!ref) return null;

    // Winner reference (W73, W74, etc.)
    if (ref.startsWith('W')) {
        const matchId = parseInt(ref.slice(1));
        return state.knockoutResults[matchId] || null;
    }

    // Loser reference (L101, L102)
    if (ref.startsWith('L')) {
        const matchId = parseInt(ref.slice(1));
        const winner = state.knockoutResults[matchId];
        if (!winner) return null;
        const matchTeams = state.matchTeams[matchId];
        if (!matchTeams) return null;
        return matchTeams.team1?.code === winner.code ? matchTeams.team2 : matchTeams.team1;
    }

    // Group position reference (1A, 2B, etc.)
    if (ref.match(/^[12][A-L]$/)) {
        const position = ref[0];
        const groupId = ref[1];
        const selection = state.groupSelections[groupId];
        if (!selection) return null;
        const team = position === '1' ? selection.first : selection.second;
        return resolvePlayoffTeam(team);
    }

    // Third place reference (3_74, 3_77, etc. - format is 3_matchId)
    if (ref.startsWith('3_')) {
        // Check if we have 8 third place teams selected
        if (state.selectedThirdPlace.length !== 8) {
            return null;
        }

        // Get the match ID from the reference
        const matchId = parseInt(ref.slice(2));

        // Get the mapping based on which teams qualified
        const mapping = getThirdPlaceMatchMapping(state.selectedThirdPlace);

        // Get which group's 3rd place team plays in this match
        const groupLetter = mapping[matchId];

        if (!groupLetter) return null;

        // Check if this group's 3rd place team is selected
        if (!state.selectedThirdPlace.includes(groupLetter)) {
            return null;
        }

        // Find the third place team from this group
        const thirdPlaceEntry = state.thirdPlaceTeams.find(t => t.group === groupLetter);
        return resolvePlayoffTeam(thirdPlaceEntry?.team) || null;
    }

    return null;
}

// Propagate winners through a round
function propagateWinners(matches, isLoserBracket = false) {
    matches.forEach(match => {
        state.matchTeams[match.id] = {
            team1: resolveTeamReference(match.team1),
            team2: resolveTeamReference(match.team2)
        };

        // Clear winner if teams changed
        const winner = state.knockoutResults[match.id];
        const teams = state.matchTeams[match.id];
        if (winner) {
            if (teams.team1?.code !== winner.code && teams.team2?.code !== winner.code) {
                delete state.knockoutResults[match.id];
            }
        }
    });
}

// Render final match
function renderFinalMatch() {
    const container = document.getElementById('final-match');
    container.innerHTML = '';

    const teams = state.matchTeams[finalMatch.id] || { team1: null, team2: null };
    const winner = state.knockoutResults[finalMatch.id];
    const bothTeamsReady = teams.team1 && teams.team2;
    const awaitingPick = bothTeamsReady && !winner;

    const card = document.createElement('div');
    card.className = `match-card ${awaitingPick ? 'awaiting-pick' : ''}`;
    card.id = `match-${finalMatch.id}`;

    card.innerHTML = `
        <div class="match-header">
            <span class="match-number">Final</span>
            <span class="match-city">${finalMatch.city}</span>
            <span class="match-date">${finalMatch.date}</span>
        </div>
        <div class="match-teams">
            ${createMatchTeamRow(finalMatch.id, teams.team1, finalMatch.team1, winner, 1, teams.team2 != null)}
            <div class="match-vs">vs</div>
            ${createMatchTeamRow(finalMatch.id, teams.team2, finalMatch.team2, winner, 2, teams.team1 != null)}
        </div>
        ${winner ? `<div class="champion-label">🏆 Champion</div>` : ''}
    `;

    // Add click handlers
    card.querySelectorAll('.match-team:not(.empty)').forEach(row => {
        row.addEventListener('click', () => {
            const teamNum = parseInt(row.dataset.teamNum);
            const team = teamNum === 1 ? teams.team1 : teams.team2;
            if (team) {
                handleKnockoutClick(finalMatch.id, team);
            }
        });
    });

    container.appendChild(card);
}

// Render third place game
function renderThirdPlaceGame() {
    const container = document.getElementById('third-place-game');
    container.innerHTML = '';

    const teams = state.matchTeams[thirdPlaceMatch.id] || { team1: null, team2: null };
    const winner = state.knockoutResults[thirdPlaceMatch.id];
    const bothTeamsReady = teams.team1 && teams.team2;
    const awaitingPick = bothTeamsReady && !winner;

    const card = document.createElement('div');
    card.className = `match-card ${awaitingPick ? 'awaiting-pick' : ''}`;
    card.id = `match-${thirdPlaceMatch.id}`;

    card.innerHTML = `
        <div class="match-header">
            <span class="match-number">3rd Place</span>
            <span class="match-city">${thirdPlaceMatch.city}</span>
            <span class="match-date">${thirdPlaceMatch.date}</span>
        </div>
        <div class="match-teams">
            ${createMatchTeamRow(thirdPlaceMatch.id, teams.team1, thirdPlaceMatch.team1, winner, 1, teams.team2 != null)}
            <div class="match-vs">vs</div>
            ${createMatchTeamRow(thirdPlaceMatch.id, teams.team2, thirdPlaceMatch.team2, winner, 2, teams.team1 != null)}
        </div>
        ${winner ? `<div class="third-label">🥉 Third Place</div>` : ''}
    `;

    // Add click handlers
    card.querySelectorAll('.match-team:not(.empty)').forEach(row => {
        row.addEventListener('click', () => {
            const teamNum = parseInt(row.dataset.teamNum);
            const team = teamNum === 1 ? teams.team1 : teams.team2;
            if (team) {
                handleKnockoutClick(thirdPlaceMatch.id, team);
            }
        });
    });

    container.appendChild(card);
}

// ==========================================
// RANDOMIZE FUNCTIONALITY
// ==========================================

function randomizeAll() {
    // Clear existing state
    state.groupSelections = {};
    state.selectedThirdPlace = [];
    state.knockoutResults = {};
    state.playoffSelections = {};

    // Randomize playoff selections
    Object.entries(playoffPaths).forEach(([pathCode, path]) => {
        const randomIndex = Math.floor(Math.random() * path.options.length);
        state.playoffSelections[pathCode] = path.options[randomIndex];
    });

    // Randomize group selections
    Object.entries(groups).forEach(([groupId, group]) => {
        const shuffled = [...group.teams].sort(() => Math.random() - 0.5);
        state.groupSelections[groupId] = {
            first: shuffled[0],
            second: shuffled[1],
            third: shuffled[2]
        };
    });

    // Update third place teams list
    updateThirdPlaceSection();

    // Randomly select 8 third place teams
    const allGroups = Object.keys(groups);
    const shuffledGroups = [...allGroups].sort(() => Math.random() - 0.5);
    state.selectedThirdPlace = shuffledGroups.slice(0, 8);

    // Update knockout bracket with group selections
    updateKnockoutBracket();

    // Randomize knockout results
    randomizeKnockoutRound(r32Matches);
    randomizeKnockoutRound(r16Matches);
    randomizeKnockoutRound(qfMatches);
    randomizeKnockoutRound(sfMatches);
    randomizeKnockoutRound([finalMatch]);
    randomizeKnockoutRound([thirdPlaceMatch]);

    // Re-render everything
    renderGroups();
    renderThirdPlaceTeams();
    updateKnockoutBracket();
}

function randomizeKnockoutRound(matches) {
    matches.forEach(match => {
        const teams = state.matchTeams[match.id];
        if (teams?.team1 && teams?.team2) {
            // Randomly pick winner
            state.knockoutResults[match.id] = Math.random() > 0.5 ? teams.team1 : teams.team2;
        }
    });

    // Update match teams after each round to propagate winners
    if (matches === r32Matches) {
        propagateWinners(r16Matches);
    } else if (matches === r16Matches) {
        propagateWinners(qfMatches);
    } else if (matches === qfMatches) {
        propagateWinners(sfMatches);
    } else if (matches === sfMatches) {
        propagateWinners([finalMatch]);
        propagateWinners([thirdPlaceMatch], true);
    }
}

function resetAll() {
    state.playoffSelections = {};
    state.groupSelections = {};
    state.thirdPlaceTeams = [];
    state.selectedThirdPlace = [];
    state.knockoutResults = {};
    state.matchTeams = {};

    renderGroups();
    updateThirdPlaceSection();
    updateKnockoutBracket();
}

// ==========================================
// AUTO-FILL MODES
// ==========================================

// Scoring functions for different modes
const scoringModes = {
    // Favorites: Higher FIFA ranking wins
    favorites: (team) => {
        if (!team) return 0;
        const stats = teamStats[team.code];
        return stats?.fifa || team.ranking || 0;
    },

    // Underdogs: Lower FIFA ranking wins (inverse)
    underdogs: (team) => {
        if (!team) return 0;
        const stats = teamStats[team.code];
        const fifa = stats?.fifa || team.ranking || 0;
        // Invert: lower ranking = higher score
        return fifa > 0 ? (2000 - fifa) : 0;
    },

    // Champions: Historical World Cup performance
    champions: (team) => {
        if (!team) return 0;
        const stats = teamStats[team.code];
        if (!stats) return team.ranking || 0;

        // Calculate historical score
        const historyScore = (stats.titles * 10) + (stats.finals * 5) + (stats.semis * 2) + (stats.quarters * 1);

        // If no history, fall back to FIFA ranking (scaled down to not overshadow history)
        if (historyScore === 0) {
            return stats.fifa / 100; // Max ~18 points from FIFA ranking
        }
        return historyScore;
    }
};

// Get team score based on current mode
function getTeamScore(team, mode = 'favorites') {
    const scoreFn = scoringModes[mode] || scoringModes.favorites;
    return scoreFn(team);
}

// Generic auto-fill function
function autoFillAll(mode = 'favorites') {
    // Clear existing state
    state.groupSelections = {};
    state.selectedThirdPlace = [];
    state.knockoutResults = {};
    state.playoffSelections = {};

    // Select best playoff team for each path based on mode
    Object.entries(playoffPaths).forEach(([pathCode, path]) => {
        const sorted = [...path.options].sort((a, b) =>
            getTeamScore(b, mode) - getTeamScore(a, mode)
        );
        state.playoffSelections[pathCode] = sorted[0];
    });

    // Sort each group by score
    Object.entries(groups).forEach(([groupId, group]) => {
        const teamsWithScores = group.teams.map(team => {
            // Resolve playoff team if applicable
            if (team.qualifier && playoffPaths[team.code]) {
                const selected = state.playoffSelections[team.code];
                return { ...team, score: getTeamScore(selected, mode), resolved: selected };
            }
            return { ...team, score: getTeamScore(team, mode) };
        });

        // Sort by score (highest first)
        teamsWithScores.sort((a, b) => b.score - a.score);

        state.groupSelections[groupId] = {
            first: teamsWithScores[0],
            second: teamsWithScores[1],
            third: teamsWithScores[2]
        };
    });

    // Update third place teams list
    updateThirdPlaceSection();

    // Select top 8 third-place teams by score
    const thirdPlaceWithScores = state.thirdPlaceTeams.map(({ group, team }) => {
        const score = getTeamScore(team, mode);
        return { group, team, score };
    });
    thirdPlaceWithScores.sort((a, b) => b.score - a.score);
    state.selectedThirdPlace = thirdPlaceWithScores.slice(0, 8).map(t => t.group);

    // Update knockout bracket with group selections
    updateKnockoutBracket();

    // Pick winners in knockout rounds based on mode
    autoFillKnockoutRound(r32Matches, mode);
    autoFillKnockoutRound(r16Matches, mode);
    autoFillKnockoutRound(qfMatches, mode);
    autoFillKnockoutRound(sfMatches, mode);
    autoFillKnockoutRound([finalMatch], mode);
    autoFillKnockoutRound([thirdPlaceMatch], mode);

    // Re-render everything
    renderGroups();
    renderThirdPlaceTeams();
    updateKnockoutBracket();
}

function autoFillKnockoutRound(matches, mode) {
    matches.forEach(match => {
        const teams = state.matchTeams[match.id];
        if (teams?.team1 && teams?.team2) {
            const score1 = getTeamScore(teams.team1, mode);
            const score2 = getTeamScore(teams.team2, mode);
            // Higher score wins
            state.knockoutResults[match.id] = score1 >= score2 ? teams.team1 : teams.team2;
        }
    });

    // Update match teams after each round to propagate winners
    if (matches === r32Matches) {
        propagateWinners(r16Matches);
    } else if (matches === r16Matches) {
        propagateWinners(qfMatches);
    } else if (matches === qfMatches) {
        propagateWinners(sfMatches);
    } else if (matches === sfMatches) {
        propagateWinners([finalMatch]);
        propagateWinners([thirdPlaceMatch], true);
    }
}

// Convenience functions for each mode
function favoritesAll() { autoFillAll('favorites'); }
function underdogsAll() { autoFillAll('underdogs'); }
function championsAll() { autoFillAll('champions'); }

// Legacy support
function getTeamRanking(team) {
    return getTeamScore(team, 'favorites');
}

// ==========================================
// BRACKET VIEW FUNCTIONALITY
// ==========================================

// Visual order for bracket - ensures correct bracket flow
// Left side: 8 R32 matches feeding into 4 R16, 2 QF, 1 SF
// Right side: 8 R32 matches feeding into 4 R16, 2 QF, 1 SF
const bracketConfig = {
    // Left side feeds into SF M101 (W97 vs W98)
    // M97: W89 vs W90, M98: W93 vs W94
    // M89: W74 vs W77, M90: W73 vs W75, M93: W83 vs W84, M94: W81 vs W82
    left: {
        r32: [74, 77, 73, 75, 83, 84, 81, 82], // Feed into M89, M90, M93, M94
        r16: [89, 90, 93, 94], // Feed into M97, M98
        qf: [97, 98], // Both feed M101
        sf: [101]
    },
    // Right side feeds into SF M102 (W99 vs W100)
    // M99: W91 vs W92, M100: W95 vs W96
    // M91: W76 vs W78, M92: W79 vs W80, M95: W86 vs W88, M96: W85 vs W87
    right: {
        r32: [76, 78, 79, 80, 86, 88, 85, 87], // Feed into M91, M92, M95, M96
        r16: [91, 92, 95, 96], // Feed into M99, M100
        qf: [99, 100], // Both feed M102
        sf: [102]
    }
};

// Get grid position for a match based on round
function getGridPosition(round, index) {
    switch (round) {
        case 'r32':
            // Each R32 match spans 2 rows
            return { rowStart: index * 2 + 1, span: 2 };
        case 'r16':
            // Each R16 match spans 4 rows, centered between two R32 matches
            return { rowStart: index * 4 + 1, span: 4 };
        case 'qf':
            // Each QF match spans 8 rows
            return { rowStart: index * 8 + 1, span: 8 };
        case 'sf':
            // SF spans 16 rows (full height)
            return { rowStart: 1, span: 16 };
        default:
            return { rowStart: 1, span: 2 };
    }
}

// Create bracket node HTML
function createBracketNode(match, matchId) {
    const teams = state.matchTeams[matchId] || { team1: null, team2: null };
    const winner = state.knockoutResults[matchId];
    const hasWinner = !!winner;

    const team1Class = teams.team1 ? (winner?.code === teams.team1.code ? 'winner' : (teams.team2 ? 'clickable' : '')) : 'empty';
    const team2Class = teams.team2 ? (winner?.code === teams.team2.code ? 'winner' : (teams.team1 ? 'clickable' : '')) : 'empty';

    // Only show group position in R32
    const pos1 = isR32Match(matchId) && teams.team1 ? getTeamGroupPosition(teams.team1) : null;
    const pos2 = isR32Match(matchId) && teams.team2 ? getTeamGroupPosition(teams.team2) : null;

    return `
        <div class="bracket-node ${hasWinner ? 'has-winner' : ''}" data-match-id="${matchId}">
            <div class="bracket-node-header">
                <span>M${matchId}</span>
                <span>${match.city || ''}</span>
            </div>
            <div class="bracket-node-teams">
                <div class="bracket-team ${team1Class}" data-team-num="1">
                    ${teams.team1 ? `${pos1 ? `<span class="team-seed">${pos1}</span>` : ''}<span class="team-flag">${teams.team1.flag}</span><span class="team-name">${teams.team1.name}</span>` : `<span class="team-name">${formatPlaceholder(match.team1)}</span>`}
                </div>
                <div class="bracket-team ${team2Class}" data-team-num="2">
                    ${teams.team2 ? `${pos2 ? `<span class="team-seed">${pos2}</span>` : ''}<span class="team-flag">${teams.team2.flag}</span><span class="team-name">${teams.team2.name}</span>` : `<span class="team-name">${formatPlaceholder(match.team2)}</span>`}
                </div>
            </div>
        </div>
    `;
}

// Render bracket column
function renderBracketColumn(containerId, matchIds, round, allMatches) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    matchIds.forEach((matchId, index) => {
        const match = allMatches.find(m => m.id === matchId);
        if (!match) return;

        const pos = getGridPosition(round, index);
        const slot = document.createElement('div');
        slot.className = 'bracket-match-slot';
        slot.style.gridRow = `${pos.rowStart} / span ${pos.span}`;
        slot.innerHTML = createBracketNode(match, matchId);

        // Add click handlers
        slot.querySelectorAll('.bracket-team:not(.empty)').forEach(teamEl => {
            teamEl.addEventListener('click', () => {
                const teamNum = parseInt(teamEl.dataset.teamNum);
                const teams = state.matchTeams[matchId];
                const team = teamNum === 1 ? teams?.team1 : teams?.team2;
                if (team && teams?.team1 && teams?.team2) {
                    handleKnockoutClick(matchId, team);
                }
            });
        });

        container.appendChild(slot);
    });
}

// Render final match in bracket
function renderBracketFinal() {
    const container = document.getElementById('bracket-final');
    if (!container) return;

    const teams = state.matchTeams[finalMatch.id] || { team1: null, team2: null };
    const winner = state.knockoutResults[finalMatch.id];

    container.innerHTML = `
        <div class="bracket-match-slot">
            ${createBracketNode(finalMatch, finalMatch.id)}
            ${winner ? `<div class="bracket-champion">🏆 Champion</div>` : ''}
        </div>
    `;

    // Add click handlers
    container.querySelectorAll('.bracket-team:not(.empty)').forEach(teamEl => {
        teamEl.addEventListener('click', () => {
            const teamNum = parseInt(teamEl.dataset.teamNum);
            const team = teamNum === 1 ? teams.team1 : teams.team2;
            if (team && teams.team1 && teams.team2) {
                handleKnockoutClick(finalMatch.id, team);
            }
        });
    });
}

// Render third place match in bracket
function renderBracketThirdPlace() {
    const container = document.getElementById('bracket-third');
    if (!container) return;

    const teams = state.matchTeams[thirdPlaceMatch.id] || { team1: null, team2: null };
    const winner = state.knockoutResults[thirdPlaceMatch.id];

    container.innerHTML = `
        <div class="bracket-match-slot">
            ${createBracketNode(thirdPlaceMatch, thirdPlaceMatch.id)}
            ${winner ? `<div class="bracket-third-label">🥉 3rd Place</div>` : ''}
        </div>
    `;

    // Add click handlers
    container.querySelectorAll('.bracket-team:not(.empty)').forEach(teamEl => {
        teamEl.addEventListener('click', () => {
            const teamNum = parseInt(teamEl.dataset.teamNum);
            const team = teamNum === 1 ? teams.team1 : teams.team2;
            if (team && teams.team1 && teams.team2) {
                handleKnockoutClick(thirdPlaceMatch.id, team);
            }
        });
    });
}

// Render entire bracket view
function renderBracketView() {
    // Combine all matches for lookup
    const allMatches = [...r32Matches, ...r16Matches, ...qfMatches, ...sfMatches];

    // Left side
    renderBracketColumn('bracket-r32-left', bracketConfig.left.r32, 'r32', allMatches);
    renderBracketColumn('bracket-r16-left', bracketConfig.left.r16, 'r16', allMatches);
    renderBracketColumn('bracket-qf-left', bracketConfig.left.qf, 'qf', allMatches);
    renderBracketColumn('bracket-sf-left', bracketConfig.left.sf, 'sf', allMatches);

    // Right side
    renderBracketColumn('bracket-r32-right', bracketConfig.right.r32, 'r32', allMatches);
    renderBracketColumn('bracket-r16-right', bracketConfig.right.r16, 'r16', allMatches);
    renderBracketColumn('bracket-qf-right', bracketConfig.right.qf, 'qf', allMatches);
    renderBracketColumn('bracket-sf-right', bracketConfig.right.sf, 'sf', allMatches);

    // Final and third place
    renderBracketFinal();
    renderBracketThirdPlace();
}

// Toggle between bracket and list view
function setKnockoutView(view) {
    const bracketView = document.getElementById('bracket-view');
    const listView = document.getElementById('list-view');
    const buttons = document.querySelectorAll('.view-btn');

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    if (view === 'bracket') {
        bracketView.style.display = 'block';
        listView.style.display = 'none';
    } else {
        bracketView.style.display = 'none';
        listView.style.display = 'block';
    }
}

// ==========================================
// SHARING FUNCTIONALITY
// ==========================================

// Character set for encoding (URL-safe)
const ENCODE_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

// Encode state to a compact string
function encodeState() {
    let encoded = '';

    // 1. Encode playoff selections (6 paths, each 0-3 or 4 for none)
    // UPA, UPB, UPC, UPD, IC1, IC2
    const playoffOrder = ['UPA', 'UPB', 'UPC', 'UPD', 'IC1', 'IC2'];
    let playoffBits = 0;
    playoffOrder.forEach((path, i) => {
        const selection = state.playoffSelections[path];
        const options = playoffPaths[path]?.options || [];
        const idx = selection ? options.findIndex(o => o.code === selection.code) : options.length;
        playoffBits |= (idx & 0x7) << (i * 3); // 3 bits per playoff (0-4)
    });
    // 18 bits total, encode as 3 chars (6 bits each)
    encoded += ENCODE_CHARS[playoffBits & 0x3F];
    encoded += ENCODE_CHARS[(playoffBits >> 6) & 0x3F];
    encoded += ENCODE_CHARS[(playoffBits >> 12) & 0x3F];

    // 2. Encode group selections (12 groups, each needs 4 positions = 4! = 24 possibilities)
    // We encode as 5 bits per group (0-23), 12 groups = 60 bits = 10 chars
    const groupOrder = 'ABCDEFGHIJKL'.split('');
    let groupBits = BigInt(0);
    groupOrder.forEach((groupId, i) => {
        const selection = state.groupSelections[groupId] || {};
        const group = groups[groupId];

        // Get team order as indices 0-3
        const teamIndices = group.teams.map((t, idx) => idx);
        const orderedIndices = [];

        // Map selections to indices
        const firstIdx = selection.first ? group.teams.findIndex(t => t.code === selection.first.code) : -1;
        const secondIdx = selection.second ? group.teams.findIndex(t => t.code === selection.second.code) : -1;
        const thirdIdx = selection.third ? group.teams.findIndex(t => t.code === selection.third.code) : -1;

        // Encode as permutation number (0-23)
        let perm = 0;
        if (firstIdx >= 0 && secondIdx >= 0 && thirdIdx >= 0) {
            // Full selection - encode order
            const remaining = [0, 1, 2, 3];
            perm += remaining.indexOf(firstIdx) * 6;
            remaining.splice(remaining.indexOf(firstIdx), 1);
            perm += remaining.indexOf(secondIdx) * 2;
            remaining.splice(remaining.indexOf(secondIdx), 1);
            perm += remaining.indexOf(thirdIdx);
        } else {
            perm = 24; // No/partial selection
        }
        groupBits |= BigInt(perm) << BigInt(i * 5);
    });
    // 60 bits = 10 chars
    for (let i = 0; i < 10; i++) {
        encoded += ENCODE_CHARS[Number((groupBits >> BigInt(i * 6)) & BigInt(0x3F))];
    }

    // 3. Encode selected third place teams (8 of 12 = 12 bits, one per group)
    let thirdBits = 0;
    groupOrder.forEach((groupId, i) => {
        if (state.selectedThirdPlace.includes(groupId)) {
            thirdBits |= (1 << i);
        }
    });
    // 12 bits = 2 chars
    encoded += ENCODE_CHARS[thirdBits & 0x3F];
    encoded += ENCODE_CHARS[(thirdBits >> 6) & 0x3F];

    // 4. Encode knockout results (32 matches: 73-104)
    // Each match: 0 = no winner, 1 = team1 wins, 2 = team2 wins
    // 2 bits per match, 32 matches = 64 bits = 11 chars
    let knockoutBits = BigInt(0);
    for (let matchId = 73; matchId <= 104; matchId++) {
        const winner = state.knockoutResults[matchId];
        const teams = state.matchTeams[matchId];
        let val = 0;
        if (winner && teams) {
            if (teams.team1?.code === winner.code) val = 1;
            else if (teams.team2?.code === winner.code) val = 2;
        }
        knockoutBits |= BigInt(val) << BigInt((matchId - 73) * 2);
    }
    // 64 bits = 11 chars
    for (let i = 0; i < 11; i++) {
        encoded += ENCODE_CHARS[Number((knockoutBits >> BigInt(i * 6)) & BigInt(0x3F))];
    }

    return encoded;
}

// Decode state from a compact string
function decodeState(encoded) {
    if (!encoded || encoded.length < 26) return false;

    try {
        let pos = 0;

        // Helper to read char as number
        const readChar = () => ENCODE_CHARS.indexOf(encoded[pos++]);

        // 1. Decode playoff selections (3 chars)
        let playoffBits = readChar();
        playoffBits |= readChar() << 6;
        playoffBits |= readChar() << 12;

        const playoffOrder = ['UPA', 'UPB', 'UPC', 'UPD', 'IC1', 'IC2'];
        playoffOrder.forEach((path, i) => {
            const idx = (playoffBits >> (i * 3)) & 0x7;
            const options = playoffPaths[path]?.options || [];
            if (idx < options.length) {
                state.playoffSelections[path] = options[idx];
            }
        });

        // 2. Decode group selections (10 chars)
        let groupBits = BigInt(0);
        for (let i = 0; i < 10; i++) {
            groupBits |= BigInt(readChar()) << BigInt(i * 6);
        }

        const groupOrder = 'ABCDEFGHIJKL'.split('');
        groupOrder.forEach((groupId, i) => {
            const perm = Number((groupBits >> BigInt(i * 5)) & BigInt(0x1F));
            const group = groups[groupId];

            if (perm < 24) {
                // Decode permutation
                const remaining = [0, 1, 2, 3];
                const firstIdx = remaining[Math.floor(perm / 6)];
                remaining.splice(Math.floor(perm / 6), 1);
                const secondIdx = remaining[Math.floor((perm % 6) / 2)];
                remaining.splice(Math.floor((perm % 6) / 2), 1);
                const thirdIdx = remaining[perm % 2];

                state.groupSelections[groupId] = {
                    first: group.teams[firstIdx],
                    second: group.teams[secondIdx],
                    third: group.teams[thirdIdx]
                };
            }
        });

        // 3. Decode selected third place teams (2 chars)
        let thirdBits = readChar();
        thirdBits |= readChar() << 6;

        state.selectedThirdPlace = [];
        groupOrder.forEach((groupId, i) => {
            if (thirdBits & (1 << i)) {
                state.selectedThirdPlace.push(groupId);
            }
        });

        // 4. Decode knockout results (11 chars)
        let knockoutBits = BigInt(0);
        for (let i = 0; i < 11; i++) {
            knockoutBits |= BigInt(readChar()) << BigInt(i * 6);
        }

        // First update match teams from group selections
        updateThirdPlaceSection();
        r32Matches.forEach(match => {
            state.matchTeams[match.id] = {
                team1: resolveTeamReference(match.team1),
                team2: resolveTeamReference(match.team2)
            };
        });

        // Now decode knockout winners round by round
        const allKnockoutMatches = [...r32Matches, ...r16Matches, ...qfMatches, ...sfMatches, { id: 103 }, { id: 104 }];

        for (let matchId = 73; matchId <= 104; matchId++) {
            const val = Number((knockoutBits >> BigInt((matchId - 73) * 2)) & BigInt(0x3));
            const teams = state.matchTeams[matchId];

            if (val === 1 && teams?.team1) {
                state.knockoutResults[matchId] = teams.team1;
            } else if (val === 2 && teams?.team2) {
                state.knockoutResults[matchId] = teams.team2;
            }

            // Propagate winners to next round
            if (matchId <= 88) {
                propagateWinners(r16Matches);
            } else if (matchId <= 96) {
                propagateWinners(qfMatches);
            } else if (matchId <= 100) {
                propagateWinners(sfMatches);
            } else if (matchId <= 102) {
                propagateWinners([finalMatch]);
                propagateWinners([thirdPlaceMatch], true);
            }
        }

        return true;
    } catch (e) {
        console.error('Failed to decode state:', e);
        return false;
    }
}

// Generate short code from encoded string
function generateShortCode(encoded) {
    // Take first 8 chars and format nicely
    const code = encoded.substring(0, 8).toUpperCase();
    return `WC26-${code.substring(0, 4)}-${code.substring(4, 8)}`;
}

// Get shareable URL
function getShareableURL() {
    const encoded = encodeState();
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = encoded;
    return url.toString();
}

// Copy share link to clipboard
function copyShareLink() {
    const url = getShareableURL();
    navigator.clipboard.writeText(url).then(() => {
        const hint = document.getElementById('share-hint');
        hint.classList.add('copied');
        setTimeout(() => {
            hint.classList.remove('copied');
        }, 2000);
    });
}

// Update share hint visibility based on selections
function updateShareHint() {
    const hint = document.getElementById('share-hint');
    if (!hint) return;

    // Show hint if there are any group selections
    const hasSelections = Object.keys(state.groupSelections).length > 0;
    hint.classList.toggle('visible', hasSelections);

    // Update URL hash when state changes
    if (hasSelections) {
        const encoded = encodeState();
        window.history.replaceState(null, '', '#' + encoded);
    } else {
        window.history.replaceState(null, '', window.location.pathname);
    }
}

// Load state from URL hash on page load
function loadFromURL() {
    const hash = window.location.hash.substring(1);
    if (hash && hash.length >= 26) {
        if (decodeState(hash)) {
            renderGroups();
            renderThirdPlaceTeams();
            updateKnockoutBracket();
            return true;
        }
    }
    return false;
}

// Make functions globally available
window.randomizeAll = randomizeAll;
window.favoritesAll = favoritesAll;
window.underdogsAll = underdogsAll;
window.championsAll = championsAll;
window.resetAll = resetAll;
window.setKnockoutView = setKnockoutView;
window.copyShareLink = copyShareLink;
window.toggleAutoFillDropdown = toggleAutoFillDropdown;

// Toggle dropdown for auto-fill options
function toggleAutoFillDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('autofill-dropdown');
    dropdown.classList.toggle('show');

    // Close dropdown when clicking outside
    const closeDropdown = (e) => {
        if (!e.target.closest('.autofill-dropdown-container')) {
            dropdown.classList.remove('show');
            document.removeEventListener('click', closeDropdown);
        }
    };

    if (dropdown.classList.contains('show')) {
        setTimeout(() => document.addEventListener('click', closeDropdown), 0);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Try to load from URL first
    if (!loadFromURL()) {
        init();
    } else {
        // Just render knockout bracket (groups already rendered)
        renderKnockoutBracket();
    }
});
