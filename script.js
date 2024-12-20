// Log a welcome message to the console
console.log("Welcome to GameZone!");

// Function to dynamically display games on the 'games.html' page
function displayGames() {
    const gameContainer = document.querySelector('.card-container');

    // Check if the game container exists (to avoid errors on other pages)
    if (gameContainer) {
        games.forEach(game => {
            // Create a div for each game card
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            `;
            gameContainer.appendChild(gameCard);
        });
    }
}

// Run the displayGames function when the page content is fully loaded
document.addEventListener('DOMContentLoaded', displayGames);
