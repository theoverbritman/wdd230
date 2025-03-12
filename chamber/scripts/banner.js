document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const closeBtn = document.getElementById("close-banner");

    const today = new Date().getDay(); // 1 = Monday, 2 = Tuesday, 3 = Wednesday

    if (today >= 1 && today <= 3) {
        banner.classList.remove("hidden");
    }

    closeBtn.addEventListener("click", () => {
        banner.style.display = "none";
    });
});
