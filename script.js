console.log("Welcome to GameZone!");

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
