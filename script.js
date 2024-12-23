// Function to dynamically set the current date as the placeholder
function setCurrentDatePlaceholder() {
    const dateInput = document.getElementById('dateInput');
    const options = { month: 'long', day: 'numeric' }; // Format: August 13
    const currentDate = new Date().toLocaleDateString('en-US', options);
    dateInput.placeholder = `Date (e.g., ${currentDate})`;
}

// Call the function on page load
window.onload = setCurrentDatePlaceholder;

// Function to toggle theme button visibility
function toggleThemeButton() {
    const themeButton = document.getElementById('themeButton');
    themeButton.style.display = themeButton.style.display === 'none' ? 'inline-block' : 'none';
}

