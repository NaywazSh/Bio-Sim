/* 
  CONFIGURATION AREA 
  Add your new simulations to this list.
  
  file: The name of your HTML file inside the 'simulations' folder.
  thumbnail: Image URL (can be local 'assets/img.jpg' or external link).
*/

const simulations = [
    {
        id: 1,
        title: "Plant Cell Structure",
        description: "Explore the organelles of a plant cell in 3D. Identify the chloroplasts and cell wall.",
        grade: "Grade 8-10",
        file: "plant-cell.html", 
        thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=500&q=60" // Placeholder image
    },
    {
        id: 2,
        title: "Human DNA Helix",
        description: "Interactive rotation of the double helix structure. Learn about base pairs.",
        grade: "Grade 10-12",
        file: "dna-helix.html",
        thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=60" 
    },
  {
    id: 3,
    title: "Human Heart",
    description: "Real-time pumping heart model.",
    grade: "Grade 11",
    file: "heart.html",
    thumbnail: "assets/heart.jpg"
},
    // COPY AND PASTE THE BLOCK ABOVE TO ADD MORE CARDS
];

// --- DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW JS ---

const grid = document.getElementById('simulation-grid');
const viewer = document.getElementById('viewer-overlay');
const mainView = document.getElementById('library-view');
const iframe = document.getElementById('sim-frame');
const viewerTitle = document.getElementById('viewer-title');

// 1. Generate Cards
function init() {
    grid.innerHTML = ""; // Clear grid
    
    simulations.forEach(sim => {
        // Create Card Element
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openViewer(sim);

        // Fill HTML
        card.innerHTML = `
            <div class="card-thumb" style="background-image: url('${sim.thumbnail}')">
                ${!sim.thumbnail ? '<i class="fas fa-cube"></i>' : ''}
            </div>
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

// 2. Open Viewer
function openViewer(sim) {
    // Construct path to file
    const filePath = `simulations/${sim.file}`;
    
    viewerTitle.innerText = sim.title;
    iframe.src = filePath;
    
    mainView.style.display = 'none';
    viewer.classList.remove('hidden');
    viewer.style.display = 'flex';
}

// 3. Close Viewer
function closeViewer() {
    iframe.src = ""; // Stop simulation to save memory
    viewer.style.display = 'none';
    mainView.style.display = 'block';
}

// 4. Fullscreen Toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
