console.log("Welcome to GameZone!");

// Updated list of games with only Minecraft and Fortnite
const games = [
    { 
        title: "Eaglercraft", 
        description: "Basically a rip-off of Minecraft.",
        imageUrl: "images/eaglercraft logo.jpg"
    },
    { 
        title: "Fortnite", 
        description: "Build, shoot, and be the last one standing.",
        imageUrl: "images/fortnite logo.jpg"
    }
];

// Function to dynamically display game cards on the 'games.html' page
function displayGames() {
    const gameContainer = document.querySelector(".card-container");

    // Check if the game container exists to avoid errors on other pages
    if (gameContainer) {
        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.className = "game-card";
            gameCard.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            `;
            gameContainer.appendChild(gameCard);
        });
    }
}

// Function to add smooth scrolling to anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

// Run the functions when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    displayGames();
    addSmoothScrolling();
});
