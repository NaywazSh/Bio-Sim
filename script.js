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

// --- SIMPLE LOGIC ---

const grid = document.getElementById('simulation-grid');

function init() {
    grid.innerHTML = ""; 
    
    simulations.forEach(sim => {
        // Create an Anchor Tag <a> instead of a div
        const card = document.createElement('a');
        card.className = 'card';
        // This makes it link directly to the file
        card.href = `simulations/${sim.file}`;
        // Opens in a new tab (Remove this line if you want it to open in the same tab)
        card.target = "_blank"; 

        card.innerHTML = `
            <div class="card-thumb" style="background-image: url('${sim.thumbnail}')"></div>
            <div class="card-content">
                <span class="tag">${sim.grade}</span>
                <h3>${sim.title}</h3>
                <p>${sim.description}</p>
                <div class="launch-btn">Launch Simulation</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', init);
