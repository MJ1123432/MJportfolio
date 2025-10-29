// Project insights
const portfolioData = {
    projects: [
        {
            title: "CARSADA",
            description: "An everyday navigation app that focuses on tracking and identifying jeepney routes for those who are new in Iloilo city. This aims to minimize stress and confusion and maximize the productivity of our users.",
            image: "img/CARSADA.jpg"
        },
        {
            title: "TaskTime",
            description: "A productivity app that manages and organizes a student's schedule by setting subjects on specific days. It also monitors pending tasks and tracks professors related to those subjects.",
            image: "img/Tasktime.png"
        },
        {
            title: "Boteco",
            description: "A webapp that motivates users to recycle. It gives points for every recyclable item, which can later be exchanged for cash rewards.",
            image: "img/boteco.png"
        }
    ]
};

// Project Projection
function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" draggable="false"
                    onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22225%22%3E%3Crect fill=%22%23333%22 width=%22400%22 height=%22225%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%2300ff00%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage not found%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `).join('');
}

// Img Protection
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => e.preventDefault());
        img.addEventListener('dragstart', (e) => e.preventDefault());
        img.addEventListener('drop', (e) => e.preventDefault());
    });
    window.addEventListener('dragover', e => e.preventDefault(), false);
    window.addEventListener('drop', e => e.preventDefault(), false);

    //Scrolling adjustments
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
