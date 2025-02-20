// Project data
const projects = [
    {
        title: 'Predictive Analytics for Stock Market',
        description: 'Developed a machine learning model using LSTM networks to predict stock market trends with 85% accuracy.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
        tags: ['Python', 'Machine Learning', 'Deep Learning', 'Time Series Analysis']
    },
    {
        title: 'Customer Segmentation Analysis',
        description: 'Created a clustering model to segment customers based on purchasing behavior using K-means and hierarchical clustering.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        tags: ['Python', 'Clustering', 'Data Analysis', 'Scikit-learn']
    },
    {
        title: 'Natural Language Processing for Sentiment Analysis',
        description: 'Built a sentiment analysis model for social media data using BERT and achieved 92% accuracy.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80',
        tags: ['NLP', 'Deep Learning', 'Python', 'TensorFlow']
    }
];

// Populate projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="skill-tags">
                    ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return; // Prevent errors if form is missing

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            } else {
                const errorText = await response.text();
                alert('Failed to send message: ' + errorText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    });
}

// Navbar scroll effect and mobile menu
function handleNavbar() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    let lastScrollTop = 0;

    // Mobile menu toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Scroll effect
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down - Hide navbar
            navbar.classList.remove('visible');
        } else {
            // Scrolling up - Show navbar
            navbar.classList.add('visible');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
    });
}

// Automatically scroll to the home section on page load
window.addEventListener('load', () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Intersection Observer for animations
function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    handleContactForm();
    handleNavbar();
    setupAnimations();
});
