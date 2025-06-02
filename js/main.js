// Main JavaScript for Duolingo Magic Carpet site

// Video functionality for Magic Carpet video - MUST BE GLOBAL
let videoLoaded = false;

function loadVideo() {
    console.log('loadVideo called!'); // Debug message
    
    if (!videoLoaded) {
        const videoId = '7EdbbgawACQ'; // Your specific video ID
        const iframe = document.getElementById('video-iframe');
        const placeholder = document.getElementById('video-placeholder');
        
        console.log('iframe:', iframe, 'placeholder:', placeholder); // Debug message
        
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
            console.log('Video loaded successfully!'); // Debug message
        } else {
            console.error('iframe or placeholder not found');
        }
    }
}

// DOM Content Loaded Event Listener
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
    
    // Additional backup event listener for video play button
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function(e) {
            e.preventDefault();
            loadVideo();
        });
        console.log('Backup event listener attached to play button');
    }
});
