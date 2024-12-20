document.addEventListener('DOMContentLoaded', (event) => {
    const projects = [
        { name: 'Project 1', type: 'web', image: 'project1.jpg' },
        { name: 'Project 2', type: 'design', image: 'project2.jpg' },
        // Add more projects here
    ];

    function renderProjects(filter = 'all') {
        const grid = document.querySelector('.projects-grid');
        grid.innerHTML = '';
        projects.forEach(project => {
            if (filter === 'all' || project.type === filter) {
                const div = document.createElement('div');
                div.className = 'project-item';
                div.innerHTML = `<h3>${project.name}</h3><img src="images/${project.image}" alt="${project.name}">`;
                grid.appendChild(div);
                // Add animation for each project item
                setTimeout(() => {
                    div.style.animation = 'fadeIn 0.5s ease-out forwards';
                }, 100); // Stagger the animation
            }
        });
    }

    document.querySelectorAll('.filter-buttons button').forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            renderProjects(filter);
            // Reset animations for a smooth transition
            document.querySelectorAll('.project-item').forEach(item => {
                item.style.animation = '';
            });
        });
    });

    // Initial load
    renderProjects();

    // Contact form animation
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.animation = 'pulse 0.5s ease-in-out';
        });
        input.addEventListener('blur', () => {
            input.style.animation = '';
        });
    });

    // Keyframe animations for input focus
    document.styleSheets[0].insertRule(`
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `, 0);

    // Contact form submission (you would typically handle this server-side)
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted!'); // Replace with actual submission logic
        // Add a simple success animation here
        form.style.animation = 'shake 0.5s';
        // Reset animation
        setTimeout(() => form.style.animation = '', 500);
    });

    // Keyframe animation for form submission
    document.styleSheets[0].insertRule(`
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `, 0);
});