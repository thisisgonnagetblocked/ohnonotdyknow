console.log("you shouldn't be seeing this");

function loadGame(gameUrl) {
    const gameContainer = document.getElementById("game-container");
    const gameFrame = document.getElementById("game-frame");

    gameFrame.src = gameUrl;
    gameContainer.style.display = "block";

    window.scrollTo({
        top: gameContainer.offsetTop,
        behavior: "smooth"
    });
}

let loadingTimeout; // Store timeout to cancel if page loads fast

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");

    // Set a timeout: If loading takes longer than 3 seconds, show loading screen
    loadingTimeout = setTimeout(() => {
        console.log("Loading screen shown (page taking longer than 3s)");
        createLoadingScreen();
    }, 3000); // 3-second delay before showing loading screen

    window.onload = () => {
        clearTimeout(loadingTimeout); // Cancel loading screen if page loads fast
        removeLoadingScreen(); // Hide loading screen if already shown
    };
});

// 🛠 **Function to Create Loading Screen (Only if Needed)**
function createLoadingScreen() {
    if (document.getElementById("loading-screen")) return; // Prevent multiple screens

    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loading-screen";
    loadingScreen.innerHTML = `
        <div class="loader"></div>
        <p>Loading GameZone...</p>
        <div class="progress-bar-container">
            <div class="progress-bar"></div>
        </div>
    `;
    document.body.prepend(loadingScreen);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Start Progress Bar Animation
    let progress = 0;
    const progressBar = document.querySelector(".progress-bar");

    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            removeLoadingScreen();
        } else {
            progress += Math.random() * 15;
            progressBar.style.width = `${Math.min(progress, 100)}%`;
        }
    }, 500);
}

// 🛠 **Function to Remove Loading Screen**
function removeLoadingScreen() {
    console.log("Removing loading screen...");
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
            document.body.style.overflow = "auto";
            document.body.classList.add("loaded");
        }, 500);
    }
}

// 🔍 Function to Search Games
function searchGames() {
    const input = document.getElementById("gameSearch").value.toLowerCase();
    const gameCards = document.querySelectorAll(".game-card");
    const sectionLabels = document.querySelectorAll(".section-label");
    const noResultsMessage = document.getElementById("no-results");
    let hasResults = false;

    if (input) {
        sectionLabels.forEach(label => (label.style.display = "none"));
        gameCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(input)) {
                card.style.display = "block";
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });

        if (!hasResults) {
            if (!noResultsMessage) {
                const message = document.createElement("div");
                message.id = "no-results";
                message.textContent = "Sorry, but we don't seem to have that :(";
                document.getElementById("games").appendChild(message);
            } else {
                noResultsMessage.style.display = "block";
            }
        } else if (noResultsMessage) {
            noResultsMessage.style.display = "none";
        }
    } else {
        sectionLabels.forEach(label => (label.style.display = "block"));
        gameCards.forEach(card => (card.style.display = "block"));
        if (noResultsMessage) noResultsMessage.style.display = "none";
    }
}

// 🎨 Optional: Add Hover Effects for the Back Arrow
document.addEventListener("DOMContentLoaded", () => {
    const backArrow = document.querySelector(".back-arrow");
    if (backArrow) {
        backArrow.addEventListener("mouseover", () => {
            backArrow.style.backgroundColor = "#555";
        });
        backArrow.addEventListener("mouseout", () => {
            backArrow.style.backgroundColor = "#333";
        });
    }
});


// Disable Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable DevTools Shortcuts
document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) || 
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});

// Auto-Detect DevTools & Close Tab or Redirect
let devtoolsOpen = false;

const checkDevTools = () => {
    const threshold = 160; // DevTools detection size
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
        devtoolsOpen = true;

        // Try to Close the Tab Automatically
        window.open('', '_self').close(); // Attempt to close tab

        // If close fails, redirect instantly
        window.location.replace("https://www.google.com"); // Redirect to another page
    } else {
        devtoolsOpen = false;
    }
};

// Continuously check for DevTools every 1 second
setInterval(checkDevTools, 1000);

// Disable Console (Prevents Inspecting Code)
setInterval(() => {
    console.clear();
    console.log = function () {};
    console.warn = function () {};
    console.error = function () {};
}, 100);
