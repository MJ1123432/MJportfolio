// Project data
const portfolioData = {
    projects: [
        {
            title: "CARSADA",
            description: "An everyday navigation app that focuses on tracking and identifying jeepney routes for those who are new in Iloilo city. This aims to minimize stress and confusion and maximize the productivity of our users.",
            image: "img/CARSADA.jpg",
            link:"https://carsadawebsite.vercel.app/?fbclid=IwY2xjawNv7uxleHRuA2FlbQIxMABicmlkETFxb0FmQ1ZmMGNxU0RVbUo3AR4y9VVjBxH0HY8ydQJmAfhuURBWRajHSicR9yLejyhBgMPRzYVlNPz-xBqA8w_aem_t6ZA9HobaQMdc_1Elvo5Hw"
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

// Render projects
function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = portfolioData.projects.map(project => `
        <a href="${project.link}" target="_blank" class="project-card" style="text-decoration: none; color: inherit;">
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" draggable="false"
                    onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22225%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22225%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2216%22 fill=%22%233b82f6%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage not found%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </a>
    `).join('');
}

// Image protection
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Prevent context menu and drag on all images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => e.preventDefault());
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});