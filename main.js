// main.js

const freeGrid = document.getElementById('free-grid');
const premiumGrid = document.getElementById('premium-grid');
const searchInput = document.getElementById('searchInput');

// --- CARD GENERATOR ---
function createCardHTML(sim) {
    // Styling Logic based on type
    const isFree = sim.isFree;
    
    const badgeColor = isFree 
        ? 'bg-emerald-500 text-slate-900 shadow-emerald-500/20' 
        : 'bg-slate-800 text-blue-400 border border-slate-700';

    const btnStyle = 'bg-slate-700 hover:bg-emerald-600 hover:text-white text-slate-200';
    
    // We send them to player.html with the ID
    const link = `player.html?id=${sim.id}`;

    return `
        <a href="${link}" class="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition duration-300 hover:shadow-2xl flex flex-col h-full decoration-0">
            <!-- Image Area -->
            <div class="relative h-48 overflow-hidden">
                <div class="absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1.5 rounded-md shadow-lg ${badgeColor}">
                    ${sim.grade}
                </div>
                <img src="${sim.image}" alt="${sim.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
            </div>
            
            <!-- Content Area -->
            <div class="p-6 flex-1 flex flex-col">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">${sim.topic}</div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition">${sim.title}</h3>
                <p class="text-slate-400 text-sm mb-6 flex-1 leading-relaxed line-clamp-3">${sim.desc}</p>
                
                <div class="w-full text-center py-3 rounded-lg transition-all font-semibold ${btnStyle} mt-auto">
                    <i class="fa-solid fa-play mr-2 text-xs"></i> Launch Simulation
                </div>
            </div>
        </a>
    `;
}

// --- RENDER FUNCTION ---
function renderSimulations(data) {
    if(!freeGrid || !premiumGrid) return; // Guard clause if run on player page

    freeGrid.innerHTML = '';
    premiumGrid.innerHTML = '';

    const freeSims = data.filter(s => s.isFree);
    const premiumSims = data.filter(s => !s.isFree);

    // Render Free
    freeSims.forEach(sim => {
        const div = document.createElement('div');
        div.innerHTML = createCardHTML(sim);
        freeGrid.appendChild(div.firstElementChild); // Append the <a> tag directly
    });

    // Render Premium
    premiumSims.forEach(sim => {
        const div = document.createElement('div');
        div.innerHTML = createCardHTML(sim);
        premiumGrid.appendChild(div.firstElementChild);
    });
}

// --- SEARCH LOGIC ---
if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = simulations.filter(sim => 
            sim.title.toLowerCase().includes(term) || 
            sim.topic.toLowerCase().includes(term)
        );
        renderSimulations(filtered);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSimulations(simulations);
});
