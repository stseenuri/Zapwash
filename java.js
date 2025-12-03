// Configuration
const config = {
    hero: {
        animatedTexts: ['Reimagined.', 'Delivered in 60 min.', 'Zero hassle.'],
    },
    whatsappNumber: '918639103842',
};

// Animated Text Rotation
function initTextRotation() {
    const element = document.getElementById('animated-text');
    if (!element) return;
    
    let index = 0;
    const texts = config.hero.animatedTexts;
    
    setInterval(() => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            index = (index + 1) % texts.length;
            element.textContent = texts[index];
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300);
    }, 3500);
}

// Read More Toggle
function initReadMoreToggle() {
    const btn = document.getElementById('read-more-toggle');
    const moreText = document.getElementById('intro-more');
    
    if (!btn || !moreText) return;
    
    btn.addEventListener('click', () => {
        if (moreText.classList.contains('expanded')) {
            moreText.classList.remove('expanded');
            btn.textContent = 'Read more';
        } else {
            moreText.classList.add('expanded');
            btn.textContent = 'Read less';
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('[data-scroll]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('data-scroll');
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Action Dock Handlers
function initActionDock() {
    const bookBtn = document.querySelector('[data-action="book"]');
    const trackBtn = document.querySelector('[data-action="track"]');
    const pricesBtn = document.querySelector('[data-action="prices"]');
    
    if (bookBtn) {
        bookBtn.addEventListener('click', () => {
            window.open(`https://wa.me/${config.whatsappNumber}?text=Hi!%20I'd%20like%20to%20schedule%20a%20pickup`, '_blank');
        });
    }
    
    if (trackBtn) {
        trackBtn.addEventListener('click', () => {
            window.open(`https://wa.me/${config.whatsappNumber}?text=I'd%20like%20to%20track%20my%20order`, '_blank');
        });
    }
    
    if (pricesBtn) {
        pricesBtn.addEventListener('click', () => {
            window.open(`https://wa.me/${config.whatsappNumber}?text=Can%20I%20get%20the%20pricing%20details?`, '_blank');
        });
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
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
    
    document.querySelectorAll('.step-card, .service-card-new').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        observer.observe(el);
    });
}

// Initialize All
document.addEventListener('DOMContentLoaded', () => {
    initTextRotation();
    initReadMoreToggle();
    initSmoothScroll();
    initActionDock();
    initScrollReveal();
});
