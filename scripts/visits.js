// Select the visit count element
const visitCountElement = document.getElementById("visitCount");

// Retrieve the number of visits from localStorage
let visitCount = localStorage.getItem("visitCount");

// Check if it's the first visit
if (visitCount === null) {
    visitCount = 1; // First visit
} else {
    visitCount = parseInt(visitCount) + 1; // Increment visit count
}

// Update localStorage with the new visit count
localStorage.setItem("visitCount", visitCount);

// Display the visit count on the page
visitCountElement.textContent = visitCount;
