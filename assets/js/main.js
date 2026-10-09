document.addEventListener("DOMContentLoaded", function() {
    // 1. Highlight active navigation link reliably
    let currentPathname = window.location.pathname;
    if (currentPathname.endsWith('/')) {
        currentPathname += 'index.html';
    }
    
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        let href = link.getAttribute('href');
        if (href) {
            try {
                let linkUrl = new URL(href, window.location.href).pathname;
                if (linkUrl === currentPathname) {
                    link.classList.add('active');
                    let dropdown = link.closest('.dropdown');
                    if (dropdown) {
                        let toggle = dropdown.querySelector('.dropdown-toggle');
                        if (toggle) toggle.classList.add('active');
                    }
                }
            } catch(e) {}
        }
    });
});
