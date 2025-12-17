document.addEventListener('DOMContentLoaded', function () {
    // 3D Scroll Effect for Hero
    var hero = document.getElementById('hero');
    var heroWrapper = document.getElementById('heroWrapper');
    var heroContent = document.querySelector('.hero-content');

    if (hero && heroWrapper) {
        var updateHero3D = function () {
            var scrollY = window.scrollY;
            // Apply effect only in the first 600px of scroll
            if (scrollY > 600) return;

            // Calculate rotation
            // Rotate X axis: tilt back (positive degree)
            var rotateX = (scrollY / 15);
            if (rotateX > 15) rotateX = 15;

            // Apply transforms
            // We rotate the wrapper to give depth
            heroWrapper.style.transform = 'rotateX(' + rotateX + 'deg) scale(' + (1 - scrollY * 0.0005) + ')';

            // Move content slightly differently
            if (heroContent) {
                heroContent.style.transform = 'translateZ(30px) translateY(' + (-scrollY * 0.2) + 'px)';
            }
        };

        // Initialize immediately
        updateHero3D();

        // Update on scroll
        window.addEventListener('scroll', updateHero3D, { passive: true });

        // Add subtle mouse float effect
        window.addEventListener('mousemove', function (e) {
            if (window.scrollY > 200) return; // Only when near top
            var x = (e.clientX - window.innerWidth / 2) / 100;
            var y = (e.clientY - window.innerHeight / 2) / 100;

            if (heroContent) {
                // Combine with existing transform (we need to be careful not to override scroll transform too awkwardly)
                // For simplicity, we just add a small margin or slight rotation to content children if possible, 
                // or just apply to specific elements.
                // Let's apply a slight rotation to the wrapper content?
                // Actually, let's just gently rotate the content text 
                heroContent.style.transition = 'transform 0.1s ease-out';
                // Note: The scroll handler updates this too. 
                // Ideally we'd combine them. For now, let's keep it simple: 
                // just tilt the h1 slightly.
                var h1 = heroContent.querySelector('h1');
                if (h1) h1.style.transform = 'translateX(' + (-x) + 'px) translateY(' + (-y) + 'px)';
            }
        }, { passive: true });
    }
});
