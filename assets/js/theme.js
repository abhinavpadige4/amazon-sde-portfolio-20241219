// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const rootElement = document.documentElement;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        rootElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        rootElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        const currentTheme = rootElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        rootElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (newTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Trigger CSS transition
        rootElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
    
    // Animate skill progress bars on scroll
    const skillBars = document.querySelectorAll('.progress-fill');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.parentElement.previousElementSibling ? 
                    bar.parentElement.previousElementSibling.textContent.match(/\d+/)[0] + '%' : '0%';
            }
        });
    };
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Add intersection observer for better performance
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                if (progressFill) {
                    const percentage = entry.target.querySelector('p:nth-child(3)')?.textContent?.match(/\d+/);
                    if (percentage) {
                        progressFill.style.width = percentage[0] + '%';
                    }
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
});