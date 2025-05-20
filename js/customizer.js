// JavaScript for Magic Carpet Customizer

// Global variables to store current pattern and color selection
let currentPattern = 'geometric';
let currentColor = '#1cb0f6'; // Default Duolingo blue

// Function to select a pattern
function selectPattern(pattern) {
    // Remove 'selected' class from all pattern options
    document.querySelectorAll('.pattern-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add 'selected' class to the clicked pattern option
    const selectedOption = document.querySelector(`.pattern-option[data-pattern="${pattern}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    // Update current pattern
    currentPattern = pattern;
    
    // Log selection (for debugging)
    console.log(`Pattern selected: ${pattern}`);
}

// Function to select a color
function selectColor(color) {
    // Remove 'selected' class from all color options
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add 'selected' class to the clicked color option
    const selectedOption = document.querySelector(`.color-option[data-color="${color}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    // Update current color
    currentColor = color;
    
    // Log selection (for debugging)
    console.log(`Color selected: ${color}`);
}

// Function to update the carpet preview based on selected pattern and color
function updateCarpetPreview() {
    const carpetPreview = document.getElementById('carpet-preview');
    const carpetBase = carpetPreview.querySelector('.carpet-base');
    const carpetOverlay = carpetPreview.querySelector('.carpet-overlay');
    
    // Apply selected pattern
    carpetPreview.setAttribute('data-pattern', currentPattern);
    
    // Apply selected color as a CSS variable
    carpetPreview.style.setProperty('--carpet-color', currentColor);
    
    // Update carpet base with pattern
    if (carpetBase) {
        carpetBase.className = `carpet-base pattern-${currentPattern}`;
    }
    
    // Apply color to overlay
    if (carpetOverlay) {
        carpetOverlay.style.backgroundColor = currentColor;
        carpetOverlay.style.opacity = '0.4'; // Semi-transparent overlay
    }
    
    // Log update (for debugging)
    console.log(`Carpet updated with pattern: ${currentPattern} and color: ${currentColor}`);
}

// Initialize carpet preview on page load
document.addEventListener('DOMContentLoaded', function() {
    // Select default pattern and color
    selectPattern('geometric');
    selectColor('#1cb0f6');
    
    // Update preview
    updateCarpetPreview();
    
    // Add event handlers for download and share buttons
    const downloadButton = document.getElementById('download-carpet');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            alert('Your carpet design would be downloaded as an image. This is a placeholder for the demo.');
        });
    }
    
    const shareButton = document.getElementById('share-carpet');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            alert('Social sharing options would appear here. This is a placeholder for the demo.');
        });
    }
});
