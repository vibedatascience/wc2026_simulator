// FIFA World Cup 2026 - Teams Visualization with D3.js

// State
let selectedTeams = new Set(['ARG', 'FRA', 'ENG', 'BRA', 'ESP', 'USA', 'GER', 'MEX']);

// Shared tooltip
let tooltip;

// Color palettes
const strengthColorScale = d3.scaleLinear()
    .domain([30, 100])
    .range(['#c9a96e', '#8b0000'])
    .clamp(true);

const tierColors = {
    1: '#8b0000',
    2: '#c05621',
    3: '#b7944a',
    4: '#94a3b8',
    5: '#e2e8f0'
};

const tierLabels = {
    1: 'Top 5 European',
    2: 'Strong European',
    3: 'Other Top',
    4: 'Domestic',
    5: 'Other'
};

const ageColors = {
    '17-21': '#60a5fa',
    '22-25': '#3b82f6',
    '26-29': '#1e40af',
    '30-33': '#c05621',
    '34+': '#8b0000'
};

const positionColors = {
    'GK': '#f59e0b',
    'DF': '#3b82f6',
    'MF': '#22c55e',
    'FW': '#8b0000'
};

const positionLabels = {
    'GK': 'Goalkeeper',
    'DF': 'Defender',
    'MF': 'Midfielder',
    'FW': 'Forward'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    tooltip = d3.select('body')
        .append('div')
        .attr('class', 'chart-tooltip')
        .style('opacity', 0);

    initTeamSelector();
    initLegends();
    renderAllCharts();
    initMapDropdown();
    updateMap();
});

// Tooltip helpers
function showTooltip(event, html) {
    tooltip.html(html)
        .style('opacity', 1)
        .style('left', (event.clientX + 12) + 'px')
        .style('top', (event.clientY - 10) + 'px');
}

function moveTooltip(event) {
    tooltip
        .style('left', (event.clientX + 12) + 'px')
        .style('top', (event.clientY - 10) + 'px');
}

function hideTooltip() {
    tooltip.style('opacity', 0);
}

// Team selector
function initTeamSelector() {
    const container = document.getElementById('teamSelector');
    if (!container) return;

    Object.entries(squadData).forEach(([code, team]) => {
        const chip = document.createElement('button');
        chip.className = `team-chip ${selectedTeams.has(code) ? 'selected' : ''}`;
        chip.dataset.team = code;
        chip.innerHTML = `<span class="team-chip-flag">${team.flag}</span><span class="team-chip-name">${team.name}</span>`;
        chip.onclick = () => toggleTeam(code);
        container.appendChild(chip);
    });
}

function toggleTeam(code) {
    if (selectedTeams.has(code)) {
        selectedTeams.delete(code);
    } else {
        selectedTeams.add(code);
    }
    document.querySelector(`[data-team="${code}"]`)?.classList.toggle('selected');
    renderAllCharts();
}

function selectAllTeams() {
    Object.keys(squadData).forEach(code => selectedTeams.add(code));
    document.querySelectorAll('.team-chip').forEach(c => c.classList.add('selected'));
    renderAllCharts();
}

// Legends
function initLegends() {
    // League legend
    const leagueLegend = document.getElementById('leagueLegend');
    if (leagueLegend) {
        Object.entries(tierLabels).forEach(([tier, label]) => {
            leagueLegend.innerHTML += `
                <div class="legend-item">
                    <span class="legend-dot" style="background:${tierColors[tier]}"></span>
                    <span>${label}</span>
                </div>`;
        });
    }

    // Age legend
    const ageLegend = document.getElementById('ageLegend');
    if (ageLegend) {
        Object.entries(ageColors).forEach(([range, color]) => {
            ageLegend.innerHTML += `
                <div class="legend-item">
                    <span class="legend-dot" style="background:${color}"></span>
                    <span>${range}</span>
                </div>`;
        });
    }

    // Position legend
    const positionLegend = document.getElementById('positionLegend');
    if (positionLegend) {
        Object.entries(positionColors).forEach(([pos, color]) => {
            positionLegend.innerHTML += `
                <div class="legend-item">
                    <span class="legend-dot" style="background:${color}"></span>
                    <span>${pos}</span>
                </div>`;
        });
    }
}

// Render all
function renderAllCharts() {
    renderStrengthChart();
    renderPositionChart();
    renderLeagueChart();
    renderAgeChart();
}

// Empty state helper
function showEmpty(container) {
    container.innerHTML = '<div class="chart-empty">Select teams above to see data</div>';
}

// ==========================================
// Squad Strength Chart
// ==========================================
function renderStrengthChart() {
    const container = document.getElementById('strengthChart');
    if (!container) return;
    container.innerHTML = '';

    const data = Array.from(selectedTeams).map(code => ({
        code,
        name: squadData[code].name,
        flag: squadData[code].flag,
        strength: calculateSquadStrength(code),
        playerCount: squadData[code].players.length
    })).sort((a, b) => b.strength - a.strength);

    if (data.length === 0) { showEmpty(container); return; }

    const margin = { top: 10, right: 80, bottom: 10, left: 120 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = data.length * 36;

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.code))
        .range([0, height])
        .padding(0.35);

    // Gridlines
    const ticks = x.ticks(5);
    svg.selectAll('.grid-line')
        .data(ticks.slice(1))
        .join('line')
        .attr('x1', d => x(d)).attr('x2', d => x(d))
        .attr('y1', 0).attr('y2', height)
        .attr('stroke', '#f0f0f0').attr('stroke-width', 1);

    // Bars
    const bars = svg.selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', 0)
        .attr('y', d => y(d.code))
        .attr('height', y.bandwidth())
        .attr('fill', d => strengthColorScale(d.strength))
        .attr('rx', 4)
        .attr('width', 0)
        .style('cursor', 'pointer');

    bars.transition()
        .duration(400)
        .delay((d, i) => i * 30)
        .attr('width', d => x(d.strength));

    // Hover interactions
    bars.on('mouseenter', function(event, d) {
        svg.selectAll('.bar').transition().duration(150).attr('opacity', 0.3);
        d3.select(this).transition().duration(150).attr('opacity', 1);
        svg.selectAll('.chart-label, .chart-value').transition().duration(150).attr('opacity', 0.3);
        svg.selectAll(`.label-${d.code}, .value-${d.code}`).transition().duration(150).attr('opacity', 1);
        showTooltip(event, `<strong>${d.flag} ${d.name}</strong>Strength: ${d.strength} / 100<br>${d.playerCount} players`);
    })
    .on('mousemove', moveTooltip)
    .on('mouseleave', function() {
        svg.selectAll('.bar').transition().duration(150).attr('opacity', 1);
        svg.selectAll('.chart-label, .chart-value').transition().duration(150).attr('opacity', 1);
        hideTooltip();
    });

    // Labels (rank + flag + name)
    svg.selectAll('.label')
        .data(data)
        .join('text')
        .attr('class', (d) => `chart-label label-${d.code}`)
        .attr('x', -8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .each(function(d, i) {
            const el = d3.select(this);
            el.append('tspan').attr('fill', '#999').text(`${i + 1}. `);
            el.append('tspan').text(`${d.flag} ${d.name}`);
        });

    // Values
    svg.selectAll('.value')
        .data(data)
        .join('text')
        .attr('class', (d) => `chart-value value-${d.code}`)
        .attr('x', d => x(d.strength) + 8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('opacity', 0)
        .each(function(d) {
            const el = d3.select(this);
            el.append('tspan').text(d.strength);
            el.append('tspan').attr('fill', '#ccc').style('font-size', '0.55rem').text(' / 100');
        })
        .transition()
        .duration(400)
        .delay((d, i) => i * 30 + 200)
        .attr('opacity', 1);
}

// ==========================================
// Squad Composition Chart (Position Distribution)
// ==========================================
function renderPositionChart() {
    const container = document.getElementById('positionChart');
    if (!container) return;
    container.innerHTML = '';

    const positions = ['GK', 'DF', 'MF', 'FW'];
    const data = Array.from(selectedTeams).map(code => {
        const dist = getPositionDistribution(code);
        const total = Object.values(dist).reduce((a, b) => a + b, 0);
        const pct = {};
        positions.forEach(p => { pct[p] = total > 0 ? (dist[p] / total) * 100 : 0; });
        return {
            code,
            name: squadData[code].name,
            flag: squadData[code].flag,
            ...pct,
            total,
            counts: dist,
            fwPct: Math.round(pct['FW'])
        };
    }).sort((a, b) => b.fwPct - a.fwPct);

    if (data.length === 0) { showEmpty(container); return; }

    const margin = { top: 10, right: 80, bottom: 10, left: 120 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = data.length * 36;

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const stack = d3.stack().keys(positions)(data);

    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const y = d3.scaleBand().domain(data.map(d => d.code)).range([0, height]).padding(0.35);

    // Stacked bars
    const tierGroups = svg.selectAll('g.pos')
        .data(stack)
        .join('g')
        .attr('class', 'pos')
        .attr('fill', d => positionColors[d.key]);

    tierGroups.selectAll('rect')
        .data(d => d.map(dd => ({ ...dd, key: d.key })))
        .join('rect')
        .attr('x', d => x(d[0]))
        .attr('y', d => y(d.data.code))
        .attr('height', y.bandwidth())
        .attr('rx', 2)
        .attr('width', 0)
        .style('cursor', 'pointer')
        .on('mouseenter', function(event, d) {
            const team = d.data;
            svg.selectAll('rect').transition().duration(150).attr('opacity', 0.3);
            svg.selectAll('rect').filter(r => r.data && r.data.code === team.code).transition().duration(150).attr('opacity', 1);
            d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
            svg.selectAll('.chart-label, .chart-value').transition().duration(150).attr('opacity', 0.3);
            svg.selectAll(`.label-${team.code}, .value-${team.code}`).transition().duration(150).attr('opacity', 1);
            const lines = positions.map(p =>
                `${p}: ${team.counts[p]} (${Math.round(team[p])}%)`
            ).join('<br>');
            showTooltip(event, `<strong>${team.flag} ${team.name} (${team.total} players)</strong>${lines}`);
        })
        .on('mousemove', moveTooltip)
        .on('mouseleave', function() {
            svg.selectAll('rect').transition().duration(150).attr('opacity', 1);
            d3.select(this).attr('stroke', 'none');
            svg.selectAll('.chart-label, .chart-value').transition().duration(150).attr('opacity', 1);
            hideTooltip();
        })
        .transition()
        .duration(400)
        .delay((d, i) => i * 30)
        .attr('width', d => Math.max(0, x(d[1]) - x(d[0])));

    // On-bar percentage labels
    tierGroups.selectAll('text')
        .data(d => d.map(dd => ({ ...dd, key: d.key })))
        .join('text')
        .attr('x', d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
        .attr('y', d => y(d.data.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .attr('fill', d => {
            const segWidth = x(d[1]) - x(d[0]);
            return segWidth > 40 ? '#fff' : 'transparent';
        })
        .attr('font-size', '0.55rem')
        .attr('font-weight', 600)
        .attr('pointer-events', 'none')
        .text(d => {
            const pct = Math.round(d[1] - d[0]);
            return pct > 0 ? `${pct}%` : '';
        })
        .attr('opacity', 0)
        .transition()
        .duration(400)
        .delay((d, i) => i * 30 + 200)
        .attr('opacity', 1);

    // Labels
    svg.selectAll('.label')
        .data(data)
        .join('text')
        .attr('class', d => `chart-label label-${d.code}`)
        .attr('x', -8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => `${d.flag} ${d.name}`);

    // Player count
    svg.selectAll('.total')
        .data(data)
        .join('text')
        .attr('class', d => `chart-value value-${d.code}`)
        .attr('x', x(100) + 8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .each(function(d) {
            const el = d3.select(this);
            el.append('tspan').text(d.total);
            el.append('tspan').attr('fill', '#ccc').style('font-size', '0.55rem').text(' players');
        });
}

// ==========================================
// League Distribution Chart (normalized to 100%)
// ==========================================
function renderLeagueChart() {
    const container = document.getElementById('leagueChart');
    if (!container) return;
    container.innerHTML = '';

    const tiers = [1, 2, 3, 4, 5];
    const data = Array.from(selectedTeams).map(code => {
        const dist = getLeagueDistribution(code);
        const tierCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        Object.entries(dist).forEach(([league, count]) => {
            const tier = leagueWeights[league]?.tier || 5;
            tierCounts[tier] += count;
        });
        const total = Object.values(tierCounts).reduce((a, b) => a + b, 0);
        const pct = {};
        tiers.forEach(t => { pct[t] = total > 0 ? (tierCounts[t] / total) * 100 : 0; });
        return {
            code,
            name: squadData[code].name,
            flag: squadData[code].flag,
            ...pct,
            total,
            tierCounts,
            tier1pct: Math.round(pct[1])
        };
    }).sort((a, b) => b.tier1pct - a.tier1pct);

    if (data.length === 0) { showEmpty(container); return; }

    const margin = { top: 10, right: 80, bottom: 10, left: 120 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = data.length * 36;

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const stack = d3.stack().keys(tiers)(data);

    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const y = d3.scaleBand().domain(data.map(d => d.code)).range([0, height]).padding(0.35);

    // Stacked bars
    const tierGroups = svg.selectAll('g.tier')
        .data(stack)
        .join('g')
        .attr('class', 'tier')
        .attr('fill', d => tierColors[d.key]);

    tierGroups.selectAll('rect')
        .data(d => d.map(dd => ({ ...dd, key: d.key })))
        .join('rect')
        .attr('x', d => x(d[0]))
        .attr('y', d => y(d.data.code))
        .attr('height', y.bandwidth())
        .attr('rx', 2)
        .attr('width', 0)
        .style('cursor', 'pointer')
        .on('mouseenter', function(event, d) {
            const team = d.data;
            svg.selectAll('rect').transition().duration(150).attr('opacity', 0.3);
            svg.selectAll('rect').filter(r => r.data && r.data.code === team.code).transition().duration(150).attr('opacity', 1);
            d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
            svg.selectAll('.chart-label, .chart-value').transition().duration(150).attr('opacity', 0.3);
            svg.selectAll(`.label-${team.code}, .value-${team.code}`).transition().duration(150).attr('opacity', 1);
            const lines = tiers.map(t =>
                `${tierLabels[t]}: ${team.tierCounts[t]} (${Math.round(team[t])}%)`
            ).join('<br>');
            showTooltip(event, `<strong>${team.flag} ${team.name} (${team.total} players)</strong>${lines}`);
        })
        .on('mousemove', moveTooltip)
        .on('mouseleave', function() {
            svg.selectAll('rect').transition().duration(150).attr('opacity', 1);
            d3.select(this).attr('stroke', 'none');
            svg.selectAll('.chart-label, .chart-value').transition().duration(150).attr('opacity', 1);
            hideTooltip();
        })
        .transition()
        .duration(400)
        .delay((d, i) => i * 30)
        .attr('width', d => Math.max(0, x(d[1]) - x(d[0])));

    // On-bar percentage labels for segments wider than 40px
    tierGroups.selectAll('text')
        .data(d => d.map(dd => ({ ...dd, key: d.key })))
        .join('text')
        .attr('x', d => x(d[0]) + (x(d[1]) - x(d[0])) / 2)
        .attr('y', d => y(d.data.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .attr('fill', d => {
            const segWidth = x(d[1]) - x(d[0]);
            return segWidth > 40 ? '#fff' : 'transparent';
        })
        .attr('font-size', '0.55rem')
        .attr('font-weight', 600)
        .attr('pointer-events', 'none')
        .text(d => {
            const pct = Math.round(d[1] - d[0]);
            return pct > 0 ? `${pct}%` : '';
        })
        .attr('opacity', 0)
        .transition()
        .duration(400)
        .delay((d, i) => i * 30 + 200)
        .attr('opacity', 1);

    // Labels
    svg.selectAll('.label')
        .data(data)
        .join('text')
        .attr('class', d => `chart-label label-${d.code}`)
        .attr('x', -8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => `${d.flag} ${d.name}`);

    // Tier 1 percentage label
    svg.selectAll('.total')
        .data(data)
        .join('text')
        .attr('class', d => `chart-value value-${d.code}`)
        .attr('x', x(100) + 8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .each(function(d) {
            const el = d3.select(this);
            el.append('tspan').text(`${d.tier1pct}%`);
            el.append('tspan').attr('fill', '#ccc').style('font-size', '0.55rem').text(' T1');
        });
}

// ==========================================
// Age Distribution Chart (normalized to 100%)
// ==========================================
function renderAgeChart() {
    const container = document.getElementById('ageChart');
    if (!container) return;
    container.innerHTML = '';

    const ageRanges = ['17-21', '22-25', '26-29', '30-33', '34+'];
    const data = Array.from(selectedTeams).map(code => {
        const dist = getAgeDistribution(code);
        const total = Object.values(dist).reduce((a, b) => a + b, 0);
        const pct = {};
        ageRanges.forEach(r => { pct[r] = total > 0 ? (dist[r] / total) * 100 : 0; });
        return {
            code,
            name: squadData[code].name,
            flag: squadData[code].flag,
            avgAge: getAverageAge(code),
            ...pct,
            counts: dist,
            total
        };
    }).sort((a, b) => parseFloat(a.avgAge) - parseFloat(b.avgAge));

    if (data.length === 0) { showEmpty(container); return; }

    const margin = { top: 10, right: 80, bottom: 10, left: 120 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = data.length * 36;

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const y = d3.scaleBand().domain(data.map(d => d.code)).range([0, height]).padding(0.35);
    const stack = d3.stack().keys(ageRanges)(data);

    // Stacked bars
    const ageGroups = svg.selectAll('g.age')
        .data(stack)
        .join('g')
        .attr('class', 'age')
        .attr('fill', d => ageColors[d.key]);

    ageGroups.selectAll('rect')
        .data(d => d.map(dd => ({ ...dd, key: d.key })))
        .join('rect')
        .attr('x', d => x(d[0]))
        .attr('y', d => y(d.data.code))
        .attr('height', y.bandwidth())
        .attr('rx', 2)
        .attr('width', 0)
        .style('cursor', 'pointer')
        .on('mouseenter', function(event, d) {
            const team = d.data;
            svg.selectAll('rect').transition().duration(150).attr('opacity', 0.3);
            svg.selectAll('rect').filter(r => r.data && r.data.code === team.code).transition().duration(150).attr('opacity', 1);
            d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
            svg.selectAll('.chart-label, .chart-value').transition().duration(150).attr('opacity', 0.3);
            svg.selectAll(`.label-${team.code}, .value-${team.code}`).transition().duration(150).attr('opacity', 1);
            const lines = ageRanges.map(r =>
                `${r}: ${team.counts[r]} (${Math.round(team[r])}%)`
            ).join('<br>');
            showTooltip(event, `<strong>${team.flag} ${team.name} (avg ${team.avgAge})</strong>${lines}`);
        })
        .on('mousemove', moveTooltip)
        .on('mouseleave', function() {
            svg.selectAll('rect').transition().duration(150).attr('opacity', 1);
            d3.select(this).attr('stroke', 'none');
            svg.selectAll('.chart-label, .chart-value').transition().duration(150).attr('opacity', 1);
            hideTooltip();
        })
        .transition()
        .duration(400)
        .delay((d, i) => i * 30)
        .attr('width', d => Math.max(0, x(d[1]) - x(d[0])));

    // Labels
    svg.selectAll('.label')
        .data(data)
        .join('text')
        .attr('class', d => `chart-label label-${d.code}`)
        .attr('x', -8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => `${d.flag} ${d.name}`);

    // Avg age
    svg.selectAll('.avg')
        .data(data)
        .join('text')
        .attr('class', d => `chart-value value-${d.code}`)
        .attr('x', x(100) + 8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .each(function(d) {
            const el = d3.select(this);
            el.append('tspan').text(d.avgAge);
            el.append('tspan').attr('fill', '#ccc').style('font-size', '0.55rem').text(' avg');
        });
}

// ==========================================
// Birthplace Map
// ==========================================
let worldData = null;

async function loadWorldMap() {
    if (worldData) return worldData;
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        worldData = await response.json();
        return worldData;
    } catch (e) {
        console.error('Failed to load world map:', e);
        return null;
    }
}

function initMapDropdown() {
    const select = document.getElementById('mapTeamSelect');
    if (!select) return;

    Object.entries(squadData).forEach(([code, team]) => {
        const opt = document.createElement('option');
        opt.value = code;
        opt.textContent = `${team.flag} ${team.name}`;
        select.appendChild(opt);
    });
}

async function updateMap() {
    const container = document.getElementById('birthplaceMap');
    const listContainer = document.getElementById('birthplaceList');
    const select = document.getElementById('mapTeamSelect');
    if (!container || !select) return;

    container.innerHTML = '<div style="text-align:center;padding:2rem;color:#999;">Loading map...</div>';

    const world = await loadWorldMap();
    if (!world) {
        container.innerHTML = '<div style="text-align:center;padding:2rem;color:#999;">Failed to load map</div>';
        return;
    }

    container.innerHTML = '';
    const teamCode = select.value;
    const team = squadData[teamCode];
    if (!team) return;

    const width = container.clientWidth || 600;
    const height = 400;

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#fafafa');

    const players = team.players.filter(p => p.birthplace.lat && p.birthplace.lng);

    // Auto-zoom: compute bounding box of player birthplaces
    let projection;
    if (players.length > 0) {
        const lats = players.map(p => p.birthplace.lat);
        const lngs = players.map(p => p.birthplace.lng);
        const latMin = Math.min(...lats), latMax = Math.max(...lats);
        const lngMin = Math.min(...lngs), lngMax = Math.max(...lngs);
        const latSpan = latMax - latMin;
        const lngSpan = lngMax - lngMin;

        // If players span a wide area (>120 degrees), use world view
        if (latSpan > 80 || lngSpan > 120) {
            projection = d3.geoNaturalEarth1()
                .scale(width / 5.5)
                .translate([width / 2, height / 2]);
        } else {
            // Fit to bounding box with padding
            const pad = 15; // degrees padding
            projection = d3.geoMercator()
                .fitExtent(
                    [[30, 30], [width - 30, height - 30]],
                    {
                        type: 'FeatureCollection',
                        features: [{
                            type: 'Feature',
                            geometry: {
                                type: 'Polygon',
                                coordinates: [[
                                    [lngMin - pad, latMin - pad],
                                    [lngMax + pad, latMin - pad],
                                    [lngMax + pad, latMax + pad],
                                    [lngMin - pad, latMax + pad],
                                    [lngMin - pad, latMin - pad]
                                ]]
                            }
                        }]
                    }
                );
        }
    } else {
        projection = d3.geoNaturalEarth1()
            .scale(width / 5.5)
            .translate([width / 2, height / 2]);
    }

    const path = d3.geoPath().projection(projection);
    const countries = topojson.feature(world, world.objects.countries);

    // Draw countries
    svg.append('g')
        .selectAll('path')
        .data(countries.features)
        .join('path')
        .attr('d', path)
        .attr('fill', '#f1f5f9')
        .attr('stroke', '#e2e8f0')
        .attr('stroke-width', 0.5);

    // Country borders
    svg.append('path')
        .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
        .attr('d', path)
        .attr('fill', 'none')
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 0.5);

    // Drop shadow filter
    const defs = svg.append('defs');
    const filter = defs.append('filter').attr('id', 'dot-shadow');
    filter.append('feDropShadow')
        .attr('dx', 0).attr('dy', 1)
        .attr('stdDeviation', 1.5)
        .attr('flood-opacity', 0.2);

    // Player dots colored by position
    svg.selectAll('circle')
        .data(players)
        .join('circle')
        .attr('cx', d => {
            const coords = projection([d.birthplace.lng, d.birthplace.lat]);
            return coords ? coords[0] : 0;
        })
        .attr('cy', d => {
            const coords = projection([d.birthplace.lng, d.birthplace.lat]);
            return coords ? coords[1] : 0;
        })
        .attr('r', 0)
        .attr('fill', d => positionColors[d.position] || '#ef4444')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .attr('opacity', 0.9)
        .attr('filter', 'url(#dot-shadow)')
        .style('cursor', 'pointer')
        .transition()
        .duration(400)
        .delay((d, i) => i * 30)
        .attr('r', 6);

    // Tooltips using shared tooltip
    svg.selectAll('circle')
        .on('mouseenter', function(event, d) {
            d3.select(this).transition().duration(150).attr('r', 10);
            showTooltip(event, `<strong>${d.name}</strong>${d.position} &mdash; ${d.club}<br>${d.birthplace.city}, ${d.birthplace.country}`);
        })
        .on('mousemove', moveTooltip)
        .on('mouseleave', function() {
            d3.select(this).transition().duration(150).attr('r', 6);
            hideTooltip();
        });

    // Position legend inside map wrapper (below SVG)
    const legendDiv = document.createElement('div');
    legendDiv.className = 'map-position-legend';
    legendDiv.innerHTML = Object.entries(positionColors).map(([pos, color]) =>
        `<div class="legend-item"><span class="legend-dot" style="background:${color}"></span><span>${positionLabels[pos]}</span></div>`
    ).join('');
    container.appendChild(legendDiv);

    // Update sidebar list
    if (listContainer) {
        const byCountry = {};
        team.players.forEach(p => {
            const c = p.birthplace.country;
            if (!byCountry[c]) byCountry[c] = [];
            byCountry[c].push(p);
        });

        const sorted = Object.entries(byCountry).sort((a, b) => b[1].length - a[1].length);
        const nativeCountry = teamCode === 'ENG' ? 'England' : (teamCode === 'USA' ? 'USA' : team.name);
        const foreignCount = team.players.filter(p => p.birthplace.country !== nativeCountry).length;
        const foreignPct = Math.round((foreignCount / team.players.length) * 100);

        let html = `<div class="map-stat">${foreignPct}% born abroad</div>`;
        sorted.forEach(([country, players]) => {
            const isNative = country === nativeCountry;
            html += `
                <div class="map-country ${isNative ? 'native' : ''}">
                    <div class="map-country-header">
                        <span>${country}</span>
                        <span class="map-country-count">${players.length}</span>
                    </div>
                    <div class="map-country-players">${players.map(p => p.name).join(', ')}</div>
                </div>
            `;
        });
        listContainer.innerHTML = html;
    }
}

// Resize handler
window.addEventListener('resize', debounce(() => {
    renderAllCharts();
    updateMap();
}, 250));

function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Exports
window.toggleTeam = toggleTeam;
window.selectAllTeams = selectAllTeams;
window.updateMap = updateMap;
