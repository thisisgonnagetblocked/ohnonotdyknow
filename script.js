// Log a welcome message to the console
console.log("Welcome to GameZone!");

// Sample list of games (if you want to generate them dynamically)
const games = [
    { 
        title: "The Legend of Zelda", 
        description: "An epic adventure in the kingdom of Hyrule.",
        imageUrl: "https://via.placeholder.com/250x150"
    },
    { 
        title: "God of War", 
        description: "Battle gods and monsters in this action-packed saga.",
        imageUrl: "https://via.placeholder.com/250x150"
    },
    { 
        title: "Minecraft", 
        description: "Explore, build, and survive in an endless blocky world.",
        imageUrl: "https://via.placeholder.com/250x150"
    },
    { 
        title: "Fortnite", 
        description: "Build, shoot, and be the last one standing.",
        imageUrl: "https://via.placeholder.com/250x150"
    },
    { 
        title: "Cyberpunk 2077", 
        description: "Explore a futuristic open-world RPG.",
        imageUrl: "https://github.com/439iurbkjeq/32e7wy8uiqbjkrwf-hopy9t473g/blob/main/images/circuit.jpg?raw=true"
    },
    { 
        title: "Mario Kart", 
        description: "Race with your favorite Nintendo characters.",
        imageUrl: "https://via.placeholder.com/250x150"
    }
];

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
