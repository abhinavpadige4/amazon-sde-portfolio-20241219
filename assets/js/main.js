// Main JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hero Section Animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    // Animate hero elements on load
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(-30px)';
        heroTitle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(-30px)';
        heroSubtitle.style.transition = 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s';
        heroSubtitle.style.visibility = 'hidden';
        
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
            heroSubtitle.style.visibility = 'visible';
        }, 500);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(30px)';
        heroButtons.style.transition = 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s';
        heroButtons.style.visibility = 'hidden';
        
        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
            heroButtons.style.visibility = 'visible';
        }, 700);
    }
    
    // Add parallax effect to hero background
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    }
    
    // Add hover effects to navigation links (if we had a nav)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add active section highlighting for scroll spy
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    const activateSectionOnScroll = () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };
    
    // Add active class styling
    const style = document.createElement('style');
    style.textContent = `
        a.active {
            position: relative;
        }
        a.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--gradient-primary);
        }
    `;
    document.head.appendChild(style);
    
    // Initialize scroll spy
    window.addEventListener('scroll', activateSectionOnScroll);
    activateSectionOnScroll(); // Initial call
    
    // Add smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = 0; // Adjust if you have a fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add hover effects to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.97)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add loading state simulation for performance
    const simulateLoading = () => {
        // Add a subtle loading effect on first load
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    };
    
    simulateLoading();
    
    // Add focus trap for accessibility (useful for modals if we add them later)
    const trapFocus = (element) => {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftShift) { // shift + tab
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else { // tab
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    };
    
    // Add resize handler for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalculate any dimensions or positions that depend on viewport size
            // For example, recalculate chart sizes, reposition floating elements, etc.
        }, 250);
    });
    
    // Add visibility change handler for performance
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Page is hidden - pause animations, stop polling, etc.
        } else {
            // Page is visible - resume animations, restart polling, etc.
        }
    });
    
    // Add offline detection
    window.addEventListener('online', function() {
        // Show offline notification or sync data
        console.log('Browser is online');
    });
    
    window.addEventListener('offline', function() {
        // Show offline warning
        console.log('Browser is offline');
    });
    
    // Initialize any third-party libraries or widgets here
    // For example: analytics, chat widgets, social media embeds, etc.
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page load time: ${pageLoadTime}ms`);
                
                // You could send this to analytics
                if (pageLoadTime > 2500) {
                    console.warn('Page load time exceeds 2.5s threshold');
                }
            }, 1000);
        });
    }
});