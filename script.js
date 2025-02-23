console.log("you shouldn't be seeing this");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");

    const gameContainer = document.getElementById("game-container");
    const gameFrame = document.getElementById("game-frame");
    const backArrow = document.getElementById("back-arrow");

    // Hide back arrow initially
    backArrow.style.display = "none";

    // Load Game Function
    window.loadGame = function(gameUrl) {
        gameFrame.src = gameUrl;
        gameContainer.style.display = "block";
        backArrow.style.display = "block"; // Show back arrow
        window.scrollTo({ top: gameContainer.offsetTop, behavior: "smooth" });
    };

    // Back Button Functionality
    backArrow.addEventListener("click", (event) => {
        event.preventDefault();
        gameContainer.style.display = "none";
        backArrow.style.display = "none"; // Hide back arrow when exiting
        gameFrame.src = ""; // Clear iframe
    });

    // Loading Screen Logic
    let loadingTimeout = setTimeout(() => {
        console.log("Loading screen shown (page taking longer than 2s to load)");
        createLoadingScreen();
    }, 2000);

    window.onload = () => {
        clearTimeout(loadingTimeout);
        removeLoadingScreen();
    };
});

// Function to Create Loading Screen
function createLoadingScreen() {
    if (document.getElementById("loading-screen")) return;

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
    document.body.style.overflow = "hidden";

    let progress = 0;
    const progressBar = document.querySelector(".progress-bar");
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        progressBar.style.width = `${Math.min(progress, 100)}%`;

        if (progress >= 100) {
            clearInterval(interval);
            removeLoadingScreen();
        }
    }, 500);
}

// Function to Remove Loading Screen
function removeLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Block all alerts, confirms, and prompts
window.alert = function() {};
window.confirm = function() { return false; };
window.prompt = function() { return null; };

// Console log to confirm the script is running
console.log("Alert, confirm, and prompt functions have been disabled.");

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
