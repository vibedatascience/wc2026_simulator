// FIFA World Cup 2026 - Teams Visualization with D3.js

// State
let selectedTeams = new Set(['ARG', 'FRA', 'ENG', 'BRA', 'ESP', 'USA', 'GER', 'MEX']);

// Color palette matching existing design
const colors = {
    primary: '#1e293b',
    secondary: '#64748b',
    accent: '#3b82f6',
    success: '#22c55e',
    muted: '#94a3b8',
    border: '#e2e8f0',
    bg: '#f8fafc'
};

// League tier colors
const tierColors = {
    1: '#1e293b',
    2: '#475569',
    3: '#94a3b8',
    4: '#cbd5e1',
    5: '#e2e8f0'
};

const tierLabels = {
    1: 'Top 5 European',
    2: 'Strong European',
    3: 'Other Top',
    4: 'Domestic',
    5: 'Other'
};

// Age colors
const ageColors = {
    '17-21': '#22c55e',
    '22-25': '#3b82f6',
    '26-29': '#8b5cf6',
    '30-33': '#f59e0b',
    '34+': '#ef4444'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTeamSelector();
    initLegends();
    renderAllCharts();
    initMapDropdown();
    updateMap();
});

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
}

// Render all
function renderAllCharts() {
    renderStrengthChart();
    renderLeagueChart();
    renderAgeChart();
}

// Squad Strength Chart
function renderStrengthChart() {
    const container = document.getElementById('strengthChart');
    if (!container) return;

    container.innerHTML = '';

    const data = Array.from(selectedTeams).map(code => ({
        code,
        name: squadData[code].name,
        flag: squadData[code].flag,
        strength: calculateSquadStrength(code)
    })).sort((a, b) => b.strength - a.strength);

    if (data.length === 0) return;

    const margin = { top: 20, right: 60, bottom: 20, left: 100 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = data.length * 36;

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.strength)])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.code))
        .range([0, height])
        .padding(0.3);

    // Bars
    svg.selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', 0)
        .attr('y', d => y(d.code))
        .attr('height', y.bandwidth())
        .attr('fill', colors.primary)
        .attr('rx', 3)
        .attr('width', 0)
        .transition()
        .duration(600)
        .delay((d, i) => i * 50)
        .attr('width', d => x(d.strength));

    // Labels (flag + name)
    svg.selectAll('.label')
        .data(data)
        .join('text')
        .attr('class', 'chart-label')
        .attr('x', -8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => `${d.flag} ${d.name}`);

    // Values
    svg.selectAll('.value')
        .data(data)
        .join('text')
        .attr('class', 'chart-value')
        .attr('x', d => x(d.strength) + 8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('opacity', 0)
        .text(d => d.strength)
        .transition()
        .duration(600)
        .delay((d, i) => i * 50 + 300)
        .attr('opacity', 1);
}

// League Distribution Chart
function renderLeagueChart() {
    const container = document.getElementById('leagueChart');
    if (!container) return;

    container.innerHTML = '';

    const data = Array.from(selectedTeams).map(code => {
        const dist = getLeagueDistribution(code);
        const tierCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        Object.entries(dist).forEach(([league, count]) => {
            const tier = leagueWeights[league]?.tier || 5;
            tierCounts[tier] += count;
        });
        return {
            code,
            name: squadData[code].name,
            flag: squadData[code].flag,
            ...tierCounts,
            total: Object.values(tierCounts).reduce((a, b) => a + b, 0)
        };
    });

    if (data.length === 0) return;

    const margin = { top: 20, right: 40, bottom: 20, left: 100 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = data.length * 36;

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const tiers = [1, 2, 3, 4, 5];
    const stack = d3.stack().keys(tiers)(data);

    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.total)])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.code))
        .range([0, height])
        .padding(0.3);

    // Stacked bars
    svg.selectAll('g.tier')
        .data(stack)
        .join('g')
        .attr('class', 'tier')
        .attr('fill', d => tierColors[d.key])
        .selectAll('rect')
        .data(d => d)
        .join('rect')
        .attr('x', d => x(d[0]))
        .attr('y', d => y(d.data.code))
        .attr('height', y.bandwidth())
        .attr('rx', 2)
        .attr('width', 0)
        .transition()
        .duration(600)
        .delay((d, i) => i * 50)
        .attr('width', d => x(d[1]) - x(d[0]));

    // Labels
    svg.selectAll('.label')
        .data(data)
        .join('text')
        .attr('class', 'chart-label')
        .attr('x', -8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => `${d.flag} ${d.name}`);

    // Totals
    svg.selectAll('.total')
        .data(data)
        .join('text')
        .attr('class', 'chart-value')
        .attr('x', d => x(d.total) + 8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .text(d => d.total);
}

// Age Distribution Chart
function renderAgeChart() {
    const container = document.getElementById('ageChart');
    if (!container) return;

    container.innerHTML = '';

    const ageRanges = ['17-21', '22-25', '26-29', '30-33', '34+'];
    const data = Array.from(selectedTeams).map(code => {
        const dist = getAgeDistribution(code);
        return {
            code,
            name: squadData[code].name,
            flag: squadData[code].flag,
            avgAge: getAverageAge(code),
            ...dist
        };
    }).sort((a, b) => parseFloat(a.avgAge) - parseFloat(b.avgAge));

    if (data.length === 0) return;

    const margin = { top: 20, right: 60, bottom: 20, left: 100 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = data.length * 36;

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const maxTotal = d3.max(data, d => ageRanges.reduce((sum, r) => sum + d[r], 0));

    const x = d3.scaleLinear()
        .domain([0, maxTotal])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.code))
        .range([0, height])
        .padding(0.3);

    const stack = d3.stack().keys(ageRanges)(data);

    // Stacked bars
    svg.selectAll('g.age')
        .data(stack)
        .join('g')
        .attr('class', 'age')
        .attr('fill', d => ageColors[d.key])
        .selectAll('rect')
        .data(d => d)
        .join('rect')
        .attr('x', d => x(d[0]))
        .attr('y', d => y(d.data.code))
        .attr('height', y.bandwidth())
        .attr('rx', 2)
        .attr('width', 0)
        .transition()
        .duration(600)
        .delay((d, i) => i * 50)
        .attr('width', d => x(d[1]) - x(d[0]));

    // Labels
    svg.selectAll('.label')
        .data(data)
        .join('text')
        .attr('class', 'chart-label')
        .attr('x', -8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => `${d.flag} ${d.name}`);

    // Avg age
    svg.selectAll('.avg')
        .data(data)
        .join('text')
        .attr('class', 'chart-value')
        .attr('x', d => x(ageRanges.reduce((sum, r) => sum + d[r], 0)) + 8)
        .attr('y', d => y(d.code) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .text(d => `${d.avgAge} avg`);
}

// Map dropdown
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

// Birthplace Map
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
        .style('background', '#f8fafc');

    const projection = d3.geoNaturalEarth1()
        .scale(width / 5.5)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Draw countries
    const countries = topojson.feature(world, world.objects.countries);

    svg.append('g')
        .selectAll('path')
        .data(countries.features)
        .join('path')
        .attr('d', path)
        .attr('fill', '#e2e8f0')
        .attr('stroke', '#fff')
        .attr('stroke-width', 0.5);

    // Draw country borders
    svg.append('path')
        .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
        .attr('d', path)
        .attr('fill', 'none')
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 0.5);

    // Player dots
    const players = team.players.filter(p => p.birthplace.lat && p.birthplace.lng);

    svg.selectAll('circle')
        .data(players)
        .join('circle')
        .attr('cx', d => projection([d.birthplace.lng, d.birthplace.lat])[0])
        .attr('cy', d => projection([d.birthplace.lng, d.birthplace.lat])[1])
        .attr('r', 0)
        .attr('fill', '#ef4444')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .attr('opacity', 0.9)
        .style('cursor', 'pointer')
        .transition()
        .duration(400)
        .delay((d, i) => i * 30)
        .attr('r', 7);

    // Tooltips
    svg.selectAll('circle')
        .on('mouseenter', function(event, d) {
            d3.select(this).transition().duration(150).attr('r', 11).attr('fill', '#dc2626');
        })
        .on('mouseleave', function() {
            d3.select(this).transition().duration(150).attr('r', 7).attr('fill', '#ef4444');
        })
        .append('title')
        .text(d => `${d.name}\n${d.birthplace.city}, ${d.birthplace.country}`);

    // Update list
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
