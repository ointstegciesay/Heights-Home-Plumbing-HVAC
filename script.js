const menuToggle = document.getElementById('menuToggle');
        const menuOverlay = document.getElementById('menuOverlay');
        const mainNavbar = document.getElementById('mainNavbar');

        // Toggle full screen interactive nav panel overlay state logic
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menuOverlay.classList.toggle('open');
        });

        // Optional UX: Close window if item links inside overlay container block are pressed
        document.querySelectorAll('.overlay-nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menuOverlay.classList.remove('open');
            });
        });

        // Dynamic Scroll Tracking: Converts floating capsule structure to sticky header strip
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainNavbar.classList.add('scrolled');
            } else {
                mainNavbar.classList.remove('scrolled');
            }
        });