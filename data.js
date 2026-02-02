// data.js
const simulations = [
    // =========================================
    // JUNIOR BIOLOGY (Grades 7-10) - FREE
    // =========================================
    {
        id: 'bio_1',
        title: "Plant Cell Structure",
        topic: "Cell Biology",
        grade: "Grade 7-9", 
        desc: "Explore the organelles of a plant cell. Identify the Nucleus, Vacuole, and Chloroplasts in 3D.",
        image: "https://images.unsplash.com/photo-1596323281146-2436f5289912?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/plant-cell.html",
        isFree: true
    },
    {
        id: 'bio_2',
        title: "Human Digestive System",
        topic: "Human Physiology",
        grade: "Grade 9-10",
        desc: "A complete 3D view of the alimentary canal, from the esophagus to the large intestine.",
        image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/Human Digestive System 3D.html",
        isFree: true
    },
    {
        id: 'bio_3',
        title: "3D Human Liver",
        topic: "Human Anatomy",
        grade: "Grade 9-10",
        desc: "Examine the lobes and blood vessels of the liver, the body's chemical factory.",
        image: "https://plus.unsplash.com/premium_photo-1682126104327-b7d588260210?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/3D Human Liver.html",
        isFree: true
    },
    {
        id: 'bio_4',
        title: "Salivary Gland",
        topic: "Human Anatomy",
        grade: "Grade 9-10",
        desc: "Detailed look at the Parotid and Submandibular glands responsible for saliva production.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/3D Salivary Gland.html",
        isFree: true
    },

    // =========================================
    // ADVANCED BIOLOGY (Grades 11-12) - PREMIUM
    // =========================================
    {
        id: 'bio_5',
        title: "DNA Double Helix",
        topic: "Genetics",
        grade: "Grade 10",
        desc: "Interactive DNA strand. Use the slider to unwind the helix and observe base pair connections.",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/dna-helix.html",
        isFree: false
    },
    {
        id: 'bio_6',
        title: "Human Heart",
        topic: "Anatomy",
        grade: "Grade 11",
        desc: "A realistic 3D pumping heart model demonstrating ventricular contraction and artery placement.",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/heart.html",
        isFree: false
    },
    {
        id: 'bio_7',
        title: "Bacteriophage Virus",
        topic: "Microbiology",
        grade: "Grade 12",
        desc: "A detailed structure of a virus showing the protein capsid and tail fibers.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/virus.html",
        isFree: false
    }, // <--- I ADDED THE MISSING COMMA HERE
    {
        id: 'bio_8',
        title: "Renal Anatomy (Kidney)",
        topic: "Excretory System",
        grade: "Grade 11",
        desc: "Detailed cross-section of the human kidney, showing the cortex, medulla, and pelvis.",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/3D Renal Anatomy.html",
        isFree: false
    },
    {
        id: 'bio_9',
        title: "Hydra Biological Sim",
        topic: "Invertebrate Zoology",
        grade: "Grade 11",
        desc: "Study the morphology of Hydra, a freshwater cnidarian, including its tentacles and body stalk.",
        image: "https://images.unsplash.com/photo-1525095388086-444f2d2c1630?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/3D Hydra Biological Sim.html",
        isFree: false
    },
    {
        id: 'bio_10',
        title: "Ascaris Lumbricoides",
        topic: "Nematoda",
        grade: "Grade 11",
        desc: "3D model of the giant roundworm, a common parasitic nematode in humans.",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/Ascaris Lumbricoides 3D.html",
        isFree: false
    },
    {
        id: 'bio_11',
        title: "Metaphire Posthuma",
        topic: "Annelida (Earthworm)",
        grade: "Grade 11",
        desc: "Dissection view of the Earthworm, highlighting the segments and clitellum.",
        image: "https://images.unsplash.com/photo-1596570656093-6c783c512365?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/Metaphire Posthuma 3D.html",
        isFree: false
    },
    {
        id: 'bio_12',
        title: "Gastropoda Anatomy",
        topic: "Mollusca (Snail)",
        grade: "Grade 11",
        desc: "Internal and external anatomy of a Gastropod, showing the shell coil and soft body.",
        image: "https://images.unsplash.com/photo-1533157451421-4d370e515d94?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/Gastropoda Anatomy 3D.html",
        isFree: false
    },
    {
        id: 'bio_13',
        title: "Hirudinaria (Leech)",
        topic: "Annelida",
        grade: "Grade 12",
        desc: "Study the external features and suckers of the medicinal leech.",
        image: "https://images.unsplash.com/photo-1596728329622-c322b7245d17?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/Hirudinaria Manillensis 3D.html",
        isFree: false
    },
    {
        id: 'bio_14',
        title: "Lamellidens Marginalis",
        topic: "Mollusca (Mussel)",
        grade: "Grade 12",
        desc: "Freshwater mussel anatomy, highlighting the shell valves and internal organs.",
        image: "https://images.unsplash.com/photo-1444065707204-12decac917e8?auto=format&fit=crop&w=600&q=60", 
        file: "simulations/Lamellidens Marginalis 3D.html",
        isFree: false
    }
];
