// Main JavaScript for Duolingo Magic Carpet site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            mainMenu.classList.toggle('active');
        });
    }
    
// Video functionality for Magic Carpet video
let videoLoaded = false;

function loadVideo() {
    if (!videoLoaded) {
        const videoId = '7EdbbgawACQ'; // Your specific video ID
        const iframe = document.getElementById('video-iframe');
        const placeholder = document.getElementById('video-placeholder');
        
        if (iframe && placeholder) {
            // Add fade-out effect
            placeholder.style.transition = 'opacity 0.3s ease';
            placeholder.style.opacity = '0';
            
            setTimeout(() => {
                // Set the YouTube embed URL with autoplay
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
                
                // Hide placeholder and show video
                placeholder.style.display = 'none';
                iframe.style.display = 'block';
                iframe.style.opacity = '0';
                iframe.style.transition = 'opacity 0.3s ease';
                
                // Fade in the video
                setTimeout(() => {
                    iframe.style.opacity = '1';
                }, 100);
                
            }, 300);
            
            videoLoaded = true;
        }
    }
}
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or if the link is meant for another purpose
            if (targetId === '#' || this.classList.contains('nav-link')) {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
