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

// Function to toggle input container visibility
function toggleInputContainer() {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.style.display = inputContainer.style.display === 'none' ? 'flex' : 'none';
}

// Function to toggle between dark and light themes
function toggleTheme() {
    document.body.classList.toggle('light');

    // Change button text based on theme
    const themeButton = document.getElementById('themeButton');
    if (document.body.classList.contains('light')) {
        themeButton.textContent = 'Dark'; // Change to "Dark" when in light theme
    } else {
        themeButton.textContent = 'Light'; // Change to "Light" when in dark theme
    }

    // Hide the theme button after selecting the theme
    themeButton.style.display = 'none'; // Hide the button again
}

function getRandomNames(count) {
    const shuffled = names.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateMessages() {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.innerHTML = ''; // Clear existing messages
    const messageCount = parseInt(document.getElementById("messageCount").value) || 10; // Default to 10
    const dateInput = document.getElementById("dateInput").value || "Default Date";

    const randomNames = getRandomNames(messageCount);
    const messagesHTML = randomNames.map((name, index) => {
        const isPromoter = (index < 7) && (Math.random() < (Math.random() < 0.5 ? 0.5 : 1));
        const promoterText = isPromoter ? "Promoter " : "";
        return `<div class="message">
            <span class="name editable-name" onclick="editName(this)">${name} ${promoterText}</span>
            <span class="joined editable-joined" onclick="editJoined(this)">joined the channel via Dillon</span>
        </div>`;
    }).join('');

    chatContainer.innerHTML = `<div class="date">${dateInput}</div><div class="message-group">${messagesHTML}</div>`;

    // Hide the input container after generating messages
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.style.display = 'none';
}

function editName(element) {
    const originalName = element.innerText;
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalName.replace("Promoter", "").trim();
    input.classList.add("name-input");

    element.innerHTML = "";
    element.appendChild(input);
    input.focus();

    input.addEventListener("blur", function() {
        saveName(input.value, element, originalName);
    });

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            saveName(input.value, element, originalName);
        }
    });
}