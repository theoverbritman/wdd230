document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date().getTime();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const difference = now - lastVisit;
        const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (daysPassed < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysPassed === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysPassed} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
});
