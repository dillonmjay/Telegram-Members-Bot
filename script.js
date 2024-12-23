// Function to dynamically set the current date as the placeholder
function setCurrentDatePlaceholder() {
    const dateInput = document.getElementById('dateInput');
    const options = { month: 'long', day: 'numeric' }; // Format: August 13
    const currentDate = new Date().toLocaleDateString('en-US', options);
    dateInput.placeholder = `Date (e.g., ${currentDate})`;
}

// Call the function on page load
window.onload = setCurrentDatePlaceholder;

// const names = [
        //     "Ayanda Gould", "Lucas Silva", "Fatima Zohra", "Yuki Tanaka", "John Doe", "Maria Garcia", "Emeka Okafor",
        //     "Sofia Rossi", "Liam O'Connor", "Amina Khan", "Maximilian Müller", "Chloe Johnson", "Nia Mwangi", "Sven Eriksen",
        //     "Zara Ali", "Dmitry Ivanov", "Xiao Chen", "Elena Petrova", "Isabella Martinez", "Nolan Smith", "Jia Li",
        //     "Mateo Hernandez", "Aisha Qureshi", "Pablo Ruiz", "Carmen Lopez", "Jakob Schmidt", "Anya Sokolov", "Ava Brown",
        //     "Kiran Patel", "Sofia Kim", "Giovanni Verdi", "Maya Singh", "Samuel Jackson", "Layla Nguyen", "Rafael Santos",
        //     "Zoe Taylor", "Nadia Ali", "Thabo Mokoena", "Sophie Dubois", "Ravi Sharma", "Bianca DiMarco", "Khaled Said",
        //     "Freya Anderson", "Tariq Khan", "Ana Beatriz", "Victor Hugo", "Natalia Romanova", "Elias Bergström"
        // ];

// Function to toggle theme button visibility
function toggleThemeButton() {
    const themeButton = document.getElementById('themeButton');
    themeButton.style.display = themeButton.style.display === 'none' ? 'inline-block' : 'none';
}


