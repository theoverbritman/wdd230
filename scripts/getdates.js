// Dynamically populate the current copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
