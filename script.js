const games = [
    { title: "The Legend of Zelda", genre: "Adventure" },
    { title: "God of War", genre: "Action" },
    { title: "Minecraft", genre: "Sandbox" },
    { title: "Fortnite", genre: "Battle Royale" },
];

function displayGames() {
    const gameList = document.getElementById("game-list");

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `<h3>${game.title}</h3><p>Genre: ${game.genre}</p>`;
        gameList.appendChild(gameCard);
    });
}

document.addEventListener("DOMContentLoaded", displayGames);
