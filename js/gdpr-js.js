// GDPR/Cookie Consent JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Cookie consent banner
    const cookieBanner = document.getElementById('cookie-consent-banner');
    const acceptAllButton = document.getElementById('cookie-accept-all');
    const essentialOnlyButton = document.getElementById('cookie-essential-only');
    const settingsButton = document.getElementById('cookie-settings');
    
    // Check if cookie consent is already given
    const consentGiven = localStorage.getItem('cookie-consent');
    if (consentGiven && cookieBanner) {
        cookieBanner.style.display = 'none';
    }
    
    // Cookie consent buttons functionality
    if (acceptAllButton) {
        acceptAllButton.addEventListener('click', function() {
            localStorage.setItem('cookie-consent', 'all');
            cookieBanner.style.display = 'none';
        });
    }
    
    if (essentialOnlyButton) {
        essentialOnlyButton.addEventListener('click', function() {
            localStorage.setItem('cookie-consent', 'essential');
            cookieBanner.style.display = 'none';
        });
    }
    
    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            // This would open cookie settings modal in a full implementation
            alert('Cookie settings would open here. For this demo, this is just a placeholder.');
        });
    }
    
    // Privacy policy click handler for signup page
    const privacyLink = document.getElementById('privacy-link');
    if (privacyLink) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Our Children's Privacy Policy explains how we protect your child's data and comply with regulations like COPPA and GDPR-K.");
        });
    }
    
    // Parse and apply consent settings
    function applyConsentSettings() {
        const consentType = localStorage.getItem('cookie-consent');
        
        if (consentType === 'all') {
            // Enable all cookies including analytics and marketing
            console.log('All cookies enabled');
            // In a real implementation, this would initialize tracking scripts
        } else if (consentType === 'essential') {
            // Only enable essential cookies
            console.log('Only essential cookies enabled');
            // In a real implementation, this would limit cookie usage
        }
    }
    
    // Apply settings on page load
    if (consentGiven) {
        applyConsentSettings();
    }
});
