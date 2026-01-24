/* 
  CONFIGURATION AREA 
*/
const simulations = [
    {
        id: 1,
        title: "Plant Cell Structure",
        description: "Explore the organelles of a plant cell. Identify the Nucleus, Vacuole, and Chloroplasts.",
        grade: "Grade 7-9",
        file: "plant-cell.html", 
        thumbnail: "https://images.unsplash.com/photo-1596323281146-2436f5289912?auto=format&fit=crop&w=500&q=60" 
    },
    {
        id: 2,
        title: "DNA Double Helix",
        description: "Interactive DNA strand. Use the slider to unwind the helix and observe base pairs.",
        grade: "Grade 10-12",
        file: "dna-helix.html",
        thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=500&q=60" 
    },
    {
        id: 3,
        title: "Human Heart",
        description: "A 3D pumping heart model demonstrating ventricular contraction.",
        grade: "Grade 11",
        file: "heart.html",
        thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=500&q=60" 
    },
    {
        id: 4,
        title: "Bacteriophage Virus",
        description: "A 3D model of a virus structure showing the protein capsid and tail fibers.",
        grade: "Grade 11-12",
        file: "virus.html",
        thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=500&q=60" 
    }
];

// --- SMART LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    
    // Check which page we are on
    const grid = document.getElementById('simulation-grid');
    const iframe = document.getElementById('sim-frame');

    if (grid) {
        // We are on index.html -> Generate Cards
        loadGrid(grid);
    } 
    else if (iframe) {
        // We are on player.html -> Load Simulation
        loadPlayer(iframe);
    }
});

function loadGrid(gridContainer) {
    gridContainer.innerHTML = ""; 
    
    simulations.forEach(sim => {
        const card = document.createElement('div'); // Using div so we can use JS to click
        card.className = 'card';
        // When clicked, go to player.html with the ID attached
        card.onclick = () => {
            window.location.href = `player.html?id=${sim.id}`;
        };

        card.innerHTML = `
            <div class="card-thumb" style="background-image: url('${sim.thumbnail}')"></div>
            <div class="card-content">
                <span class="tag">${sim.grade}</span>
                <h3>${sim.title}</h3>
                <p>${sim.description}</p>
                <div class="launch-btn">Launch Simulation</div>
            </div>
        `;
        
        gridContainer.appendChild(card);
    });
}

function loadPlayer(iframeElement) {
    // 1. Get the ID from the URL (e.g., player.html?id=3)
    const params = new URLSearchParams(window.location.search);
    const simId = params.get('id');

    // 2. Find the matching simulation
    const sim = simulations.find(s => s.id == simId);

    if (sim) {
        // 3. Update the page
        document.getElementById('sim-title').innerText = sim.title;
        iframeElement.src = `simulations/${sim.file}`;
        document.title = `Playing: ${sim.title}`;
    } else {
        // Error handling
        document.getElementById('sim-title').innerText = "Simulation Not Found";
    }
}

function toggleFullscreen() {
    const elem = document.querySelector('.iframe-wrapper');
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}
