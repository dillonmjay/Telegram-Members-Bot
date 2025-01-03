//  ██████╗░██╗██╗░░░░██╗░░░░░█████╗░███╗░░██╗
//  ██╔══██╗██║██║░░░░██║░░░░██╔══██╗████╗░██║
//  ██║░░██║██║██║░░░░██║░░░░██║░░██║██╔██╗██║
//  ██║░░██║██║██║░░░░██║░░░░██║░░██║██║╚████║
//  ██████╔╝██║██████╗██████╗░█████╔╝██║░╚███║
//  ╚═════╝░╚═╝╚═════╝╚═════╝░╚════╝░╚═╝░░╚══╝
//  ░░░░░██╗░█████╗░██╗░░░██╗░█████╗░████████╗██╗██╗░░░░██╗░░░░░█████╗░██╗░░██╗██████╗
//  ░░░░░██║██╔══██╗░██╗░██╔╝██╔══██╗░░░██╔══╝██║██║░░░░██║░░░░██╔══██╗██║░██╔╝██╔═══╝
//  ░░░░░██║███████║░░████╔╝░███████║░░░██║░░░██║██║░░░░██║░░░░███████║████╔═╝░██████╗
//  ██╗░░██║██╔══██║░░░██╔╝░░██╔══██║░░░██║░░░██║██║░░░░██║░░░░██╔══██║██║░██╗░██╔═══╝
//  ╚█████╔╝██║░░██║░░░██║░░░██║░░██║░░░██║░░░██║██████╗██████╗██║░░██║██║░░██╗██████╗
//  ░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░░╚═╝░░░╚═╝╚═════╝╚═════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝

function setCurrentDatePlaceholder() {
    const dateInput = document.getElementById('dateInput');
    const options = { month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    dateInput.placeholder = `Date (e.g., ${currentDate})`;
}

window.onload = setCurrentDatePlaceholder;

function toggleThemeButton() {
    const themeButton = document.getElementById('themeButton');
    themeButton.style.display = themeButton.style.display === 'none' ? 'inline-block' : 'none';
}

function toggleInputContainer() {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.style.display = inputContainer.style.display === 'none' ? 'flex' : 'none';
}

function toggleTheme() {
    document.body.classList.toggle('light');

    const themeButton = document.getElementById('themeButton');
    if (document.body.classList.contains('light')) {
        themeButton.textContent = 'Dark';
    } else {
        themeButton.textContent = 'Light';
    }

    themeButton.style.display = 'none';
}

function getRandomNames(count) {
    const shuffled = names.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateMessages() {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.innerHTML = '';
    const messageCount = parseInt(document.getElementById("messageCount").value) || 10;
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

function saveName(newName, element, originalName) {
    if (newName.trim() === "") {
        newName = originalName;
    }
    element.innerHTML = `${newName} ${originalName.includes("Promoter") ? "Promoter " : ""}`;
}

function editJoined(element) {
    const originalText = element.innerText;
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalText;
    input.classList.add("joined-input");

    element.innerHTML = "";
    element.appendChild(input);
    input.focus();

    input.addEventListener("blur", function() {
        saveJoined(input.value, element, originalText);
    });

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            saveJoined(input.value, element, originalText);
        }
    });
}

function saveJoined(newText, element, originalText) {
    if (newText.trim() === "") {
        newText = originalText;
    }
    element.innerHTML = newText;
}
