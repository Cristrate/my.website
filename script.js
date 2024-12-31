document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Ensures proper alignment
                });
                targetElement.focus({ preventScroll: true }); // Improves accessibility
            }
        });
    });

    // Animation for service cards on intersection
    const serviceCards = document.querySelectorAll('.service-card');
    if ('IntersectionObserver' in window) { // Check for IntersectionObserver support
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        // Initialize animation properties and observe
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease-out';
            observer.observe(card);
        });
    } else {
        // Fallback for older browsers (no IntersectionObserver)
        serviceCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        });
    }
});
