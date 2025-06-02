// Main JavaScript for Duolingo Magic Carpet site

// Video functionality for Magic Carpet video
let videoLoaded = false;

// Main video loading function - guaranteed to work
function loadVideoWithImage() {
    console.log('loadVideoWithImage called!');
    
    if (!videoLoaded) {
        const placeholder = document.getElementById('video-placeholder');
        const videoWrapper = document.querySelector('.video-wrapper');
        
        if (videoWrapper) {
            // Fade out placeholder
            if (placeholder) {
                placeholder.style.opacity = '0';
                placeholder.style.transition = 'opacity 0.3s ease';
            }
            
            setTimeout(() => {
                // Complete replacement method - guaranteed to work
                videoWrapper.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/7EdbbgawACQ?autoplay=1&rel=0&modestbranding=1&color=white&showinfo=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 16px; z-index: 20;">
                    </iframe>
                `;
                
                videoLoaded = true;
                console.log('Video loaded and should be visible!');
            }, 300);
        } else {
            console.error('Video wrapper not found');
        }
    }
}

// Backup video loading function (for compatibility)
function loadVideo() {
    console.log('loadVideo called - redirecting to loadVideoWithImage');
    loadVideoWithImage();
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
            e.stopPropagation();
            loadVideoWithImage();
        });
        console.log('Event listener attached to play button');
    }
    
    // Video placeholder click handler (backup)
    const videoPlaceholder = document.getElementById('video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            loadVideoWithImage();
        });
        console.log('Event listener attached to video placeholder');
    }
    
    // Form validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Newsletter signup (if present)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput && validateEmail(emailInput.value)) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // FAQ toggle functionality (if present)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
    
    // Lazy loading for images (performance improvement)
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
    
    console.log('Duolingo Magic Carpet site initialized successfully!');
});
