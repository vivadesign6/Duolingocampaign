// Enhanced Magic Carpet Language Learning Customizer JavaScript

// Global variables for Magic Carpet system
let currentLanguage = 'french';
let animationsEnabled = true;
let currentTheme = 'default';

// Enhanced language data with more detailed information
const enhancedLanguageData = {
    french: {
        words: 847,
        lessons: 45,
        fluency: 67,
        level: 'intermediate',
        proficiency: 'Intermediate French',
        progress: '15 more lessons to unlock Advanced clarity',
        image: 'images/french-carpet.jpg',
        achievements: ['Week Streak', 'Grammar Master', 'Pronunciation Pro'],
        nextMilestone: 'Progress to Advanced Level',
        progressText: '67% Complete • 15 lessons remaining',
        streak: 12,
        lessonsToday: 3,
        culturalElements: ['Eiffel Tower', 'French Café', 'Croissant', 'Beret'],
        dominantColor: '#1cb0f6',
        accentColor: '#0ea5e9',
        difficulty: 'Medium',
        timeSpent: '2h 45m today'
    },
    spanish: {
        words: 542,
        lessons: 28,
        fluency: 35,
        level: 'elementary',
        proficiency: 'Elementary Spanish',
        progress: '22 more lessons to unlock Intermediate clarity',
        image: 'images/spanish-carpet.jpg',
        achievements: ['First Week', 'Vocabulary Builder', 'Daily Learner'],
        nextMilestone: 'Progress to Intermediate Level',
        progressText: '35% Complete • 22 lessons remaining',
        streak: 7,
        lessonsToday: 2,
        culturalElements: ['Sagrada Familia', 'Flamenco', 'Paella', 'Guitar'],
        dominantColor: '#ff9600',
        accentColor: '#e67e00',
        difficulty: 'Easy',
        timeSpent: '1h 30m today'
    },
    german: {
        words: 187,
        lessons: 12,
        fluency: 15,
        level: 'beginner',
        proficiency: 'Beginner German',
        progress: '38 more lessons to unlock Elementary clarity',
        image: 'images/german-carpet.jpg',
        achievements: ['Getting Started', 'First Lesson'],
        nextMilestone: 'Progress to Elementary Level',
        progressText: '15% Complete • 38 lessons remaining',
        streak: 3,
        lessonsToday: 1,
        culturalElements: ['Castle', 'Pretzel', 'Beer Garden', 'Cuckoo Clock'],
        dominantColor: '#58cc02',
        accentColor: '#4ade80',
        difficulty: 'Hard',
        timeSpent: '45m today'
    },
    italian: {
        words: 1240,
        lessons: 78,
        fluency: 85,
        level: 'advanced',
        proficiency: 'Advanced Italian',
        progress: '10 more lessons to unlock Fluent clarity',
        image: 'images/italian-carpet.jpg',
        achievements: ['Month Streak', 'Conversation Master', 'Culture Expert', 'Advanced Grammar'],
        nextMilestone: 'Progress to Fluent Level',
        progressText: '85% Complete • 10 lessons remaining',
        streak: 28,
        lessonsToday: 5,
        culturalElements: ['Colosseum', 'Pizza', 'Gondola', 'Vespa'],
        dominantColor: '#ce82ff',
        accentColor: '#b366ff',
        difficulty: 'Medium',
        timeSpent: '3h 15m today'
    }
};

// Advanced animation system
class MagicCarpetAnimations {
    constructor() {
        this.animationQueue = [];
        this.isAnimating = false;
    }

    // Queue animation to prevent conflicts
    queueAnimation(animationFunction, delay = 0) {
        this.animationQueue.push({ func: animationFunction, delay });
        if (!this.isAnimating) {
            this.processQueue();
        }
    }

    // Process animation queue
    async processQueue() {
        if (this.animationQueue.length === 0) {
            this.isAnimating = false;
            return;
        }

        this.isAnimating = true;
        const { func, delay } = this.animationQueue.shift();
        
        if (delay > 0) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        await func();
        this.processQueue();
    }

    // Animate carpet transformation
    async animateCarpetTransform(newLanguage) {
        const container = document.getElementById('carpetContainer');
        const image = document.getElementById('carpetImage');
        
        if (!container || !image) return;

        // Phase 1: Scale down and fade
        container.style.transition = 'transform 0.4s ease, filter 0.4s ease';
        container.style.transform = 'scale(0.95)';
        container.style.filter = 'blur(5px)';
        
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Phase 2: Change image and update clarity
        const data = enhancedLanguageData[newLanguage];
        image.style.opacity = '0.3';
        
        await new Promise(resolve => setTimeout(resolve, 200));
        
        image.src = data.image;
        container.className = `carpet-container ${data.level}`;
        
        // Phase 3: Scale up and clear
        container.style.transform = 'scale(1.05)';
        container.style.filter = 'blur(0px)';
        image.style.opacity = '1';
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Phase 4: Return to normal with gentle bob
        container.style.transform = 'scale(1)';
        
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Add gentle floating animation
        container.style.animation = 'gentle-float 3s ease-in-out infinite';
    }

    // Animate stats with staggered effect
    async animateStatsChange(newLanguage) {
        const data = enhancedLanguageData[newLanguage];
        const stats = [
            { element: document.getElementById('wordsLearned'), value: data.words, suffix: '' },
            { element: document.getElementById('lessonsCompleted'), value: data.lessons, suffix: '' },
            { element: document.getElementById('fluencyPercent'), value: data.fluency, suffix: '%' }
        ];

        // Animate each stat with delay
        stats.forEach((stat, index) => {
            setTimeout(() => {
                this.animateCounter(stat.element, stat.value, stat.suffix);
            }, index * 150);
        });
    }

    // Enhanced counter animation
    animateCounter(element, targetValue, suffix = '') {
        if (!element) return;

        const startValue = parseInt(element.textContent) || 0;
        const duration = 1200;
        const startTime = performance.now();
        
        // Add bouncy animation class
        element.parentElement.style.transform = 'scale(1.1)';
        element.parentElement.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            element.parentElement.style.transform = 'scale(1)';
        }, 300);

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Use easeOutBounce for more dynamic animation
            const easedProgress = easeOutBounce(progress);
            const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);
            
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }

    // Animate achievement badges
    async animateAchievements(achievements) {
        const container = document.getElementById('achievementList');
        if (!container) return;

        // Clear existing badges with fade out
        const existingBadges = container.querySelectorAll('.achievement-badge');
        existingBadges.forEach((badge, index) => {
            setTimeout(() => {
                badge.style.transform = 'scale(0)';
                badge.style.opacity = '0';
            }, index * 50);
        });

        await new Promise(resolve => setTimeout(resolve, 500));
        
        container.innerHTML = '';

        // Add new badges with staggered animation
        achievements.forEach((achievement, index) => {
            setTimeout(() => {
                const badge = document.createElement('span');
                badge.className = 'achievement-badge';
                badge.textContent = achievement;
                badge.style.transform = 'scale(0)';
                badge.style.opacity = '0';
                badge.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
                
                container.appendChild(badge);
                
                // Trigger animation
                requestAnimationFrame(() => {
                    badge.style.transform = 'scale(1)';
                    badge.style.opacity = '1';
                });
            }, index * 100);
        });
    }
}

// Easing function for smooth animations
function easeOutBounce(t) {
    if (t < 1 / 2.75) {
        return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
        return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
        return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
        return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
}

// Initialize animation system
const animations = new MagicCarpetAnimations();

// Enhanced language selection function
function selectLanguage(language) {
    if (language === currentLanguage) return; // Don't animate if same language
    
    // Remove active class from all options
    document.querySelectorAll('.language-option').forEach(opt => {
        opt.classList.remove('active');
        opt.style.transform = 'scale(1)';
    });
    
    // Add active class to selected option with animation
    const selectedOption = document.querySelector(`[data-language="${language}"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
        selectedOption.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            selectedOption.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Update current language
    const previousLanguage = currentLanguage;
    currentLanguage = language;
    
    // Get language data
    const data = enhancedLanguageData[language];
    
    // Queue animations for smooth experience
    animations.queueAnimation(() => animations.animateCarpetTransform(language), 0);
    animations.queueAnimation(() => animations.animateStatsChange(language), 200);
    animations.queueAnimation(() => updateTextualInfo(data), 400);
    animations.queueAnimation(() => updateProgressInfo(data), 600);
    animations.queueAnimation(() => animations.animateAchievements(data.achievements), 800);
    animations.queueAnimation(() => updateClarityLevels(data.level), 1000);
    animations.queueAnimation(() => updateMasteryCircles(data), 1200);
    
    // Log language switch for analytics
    console.log(`Language switched from ${previousLanguage} to ${language}`);
}

// Update textual information
function updateTextualInfo(data) {
    const proficiencyLevel = document.getElementById('proficiencyLevel');
    const proficiencyProgress = document.getElementById('proficiencyProgress');
    const nextMilestone = document.getElementById('nextMilestone');
    const progressText = document.getElementById('progressText');
    
    if (proficiencyLevel) proficiencyLevel.textContent = data.proficiency;
    if (proficiencyProgress) proficiencyProgress.textContent = data.progress;
    if (nextMilestone) nextMilestone.textContent = data.nextMilestone;
    if (progressText) progressText.textContent = data.progressText;
}

// Update progress information with animation
function updateProgressInfo(data) {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.transition = 'width 1s ease';
        progressFill.style.width = data.fluency + '%';
    }
}

// Update clarity levels with enhanced animation
function updateClarityLevels(currentLevel) {
    const levels = ['beginner', 'elementary', 'intermediate', 'advanced', 'fluent'];
    const currentIndex = levels.indexOf(currentLevel);
    const clarityLevelElements = document.querySelectorAll('.clarity-level');
    
    clarityLevelElements.forEach((element, index) => {
        // Add transition
        element.style.transition = 'all 0.3s ease';
        
        // Remove all classes
        element.classList.remove('active', 'unlocked', 'locked');
        
        // Set new class with delay for wave effect
        setTimeout(() => {
            if (index < currentIndex) {
                element.classList.add('unlocked');
            } else if (index === currentIndex) {
                element.classList.add('active');
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            } else {
                element.classList.add('locked');
            }
        }, index * 100);
    });
}

// Update mastery circles with animation
function updateMasteryCircles(data) {
    const streakCircle = document.getElementById('streakCircle');
    const lessonsCircle = document.getElementById('lessonsCircle');
    
    if (streakCircle) {
        streakCircle.style.transform = 'scale(1.2)';
        streakCircle.textContent = data.streak;
        setTimeout(() => {
            streakCircle.style.transform = 'scale(1)';
        }, 300);
    }
    
    if (lessonsCircle) {
        setTimeout(() => {
            lessonsCircle.style.transform = 'scale(1.2)';
            lessonsCircle.textContent = data.lessonsToday;
            setTimeout(() => {
                lessonsCircle.style.transform = 'scale(1)';
            }, 300);
        }, 150);
    }
}

// Enhanced button functions
function continueLearning() {
    const data = enhancedLanguageData[currentLanguage];
    const languageName = data.proficiency.split(' ')[1];
    
    // Add button animation
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    // Show enhanced message
    const message = `🚀 Ready to continue your ${languageName} journey?\n\n` +
                   `Current Progress: ${data.fluency}% fluent\n` +
                   `Streak: ${data.streak} days\n` +
                   `Time today: ${data.timeSpent}\n\n` +
                   `Your Magic Carpet awaits! 🧞‍♂️`;
    
    alert(message);
    
    // In a real app, this would navigate to the lesson
    console.log(`Continuing ${languageName} learning...`);
}

function shareProgress() {
    const data = enhancedLanguageData[currentLanguage];
    const languageName = data.proficiency.split(' ')[1];
    
    // Add button animation
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    const shareData = {
        title: 'My Duolingo Magic Carpet Progress',
        text: `🧞‍♂️ I'm ${data.fluency}% fluent in ${languageName} with my Magic Carpet! 
        
Streak: ${data.streak} days 🔥
Words learned: ${data.words} 📚
Lessons completed: ${data.lessons} ✅

Join me on this magical language learning journey!`,
        url: window.location.href
    };
    
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(err => {
            console.log('Error sharing:', err);
            fallbackShare(shareData);
        });
    } else {
        fallbackShare(shareData);
    }
}

function fallbackShare(shareData) {
    const shareText = shareData.text + '\n\n' + shareData.url;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Progress copied to clipboard! 📋');
        }).catch(() => {
            showSimpleAlert(shareText);
        });
    } else {
        showSimpleAlert(shareText);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #58cc02;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: bold;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Slide in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Slide out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function showSimpleAlert(text) {
    alert('Share your progress:\n\n' + text);
}

// Accessibility and keyboard navigation
function initializeAccessibility() {
    // Add keyboard navigation for language options
    document.querySelectorAll('.language-option').forEach(option => {
        option.setAttribute('tabindex', '0');
        option.setAttribute('role', 'button');
        
        option.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const language = this.getAttribute('data-language');
                selectLanguage(language);
            }
        });
    });
    
    // Add aria-labels for better screen reader support
    document.querySelectorAll('.circle').forEach((circle, index) => {
        const labels = ['Streak count', 'Lessons today', 'Achievement star'];
        circle.setAttribute('aria-label', labels[index] || 'Progress indicator');
    });
}

// Performance monitoring
function initializePerformanceMonitoring() {
    // Monitor animation performance
    let animationStartTime = 0;
    
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.name.includes('animation') && entry.duration > 16) {
                console.warn('Slow animation detected:', entry.name, entry.duration + 'ms');
            }
        }
    });
    
    if ('PerformanceObserver' in window) {
        observer.observe({ entryTypes: ['measure'] });
    }
}

// Theme system for future enhancement
function setTheme(themeName) {
    currentTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('magic-carpet-theme', themeName);
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('magic-carpet-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
}

// Progressive enhancement
function enhanceExperience() {
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add hover effects for better interactivity
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-3px) scale(1.02)';
                this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }
        });
        
        option.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            }
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🧞‍♂️ Magic Carpet Language Learning system initializing...');
    
    // Initialize core systems
    initializeAccessibility();
    initializePerformanceMonitoring();
    loadSavedTheme();
    enhanceExperience();
    
    // Set initial language (French is default)
    selectLanguage('french');
    
    // Add periodic sparkle effects to achievements
    setInterval(() => {
        const badges = document.querySelectorAll('.achievement-badge');
        badges.forEach((badge, index) => {
            setTimeout(() => {
                badge.style.transform = 'scale(1.05)';
                badge.style.filter = 'brightness(1.2)';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                    badge.style.filter = 'brightness(1)';
                }, 200);
            }, index * 100);
        });
    }, 8000);
    
    // Add gentle animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gentle-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }
        
        .achievement-badge {
            transition: transform 0.2s ease, filter 0.2s ease;
        }
        
        .language-option {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .stat-item {
            transition: transform 0.3s ease;
        }
        
        .circle {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    console.log('✨ Magic Carpet system ready! Choose your language adventure!');
});

// Export functions for global access (if needed)
window.MagicCarpet = {
    selectLanguage,
    continueLearning,
    shareProgress,
    setTheme,
    languageData: enhancedLanguageData
};
