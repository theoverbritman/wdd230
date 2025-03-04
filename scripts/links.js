// links.js

// Replace with your actual GitHub Pages URL
const baseURL = "https://theoverbritman.github.io/wdd230/";
const linksURL = "https://theoverbritman.github.io/wdd230/data/links.json";

// Asynchronous function to fetch links data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.lessons);
        } else {
            throw new Error("Unable to fetch links data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to display the links
function displayLinks(weeks) {
    const linksContainer = document.querySelector("#links-container");
    
    // Clear any existing content (just in case)
    linksContainer.innerHTML = "";
    
    // Create an unordered list to match typical activity/assignment link structure
    const mainList = document.createElement("ul");
    
    weeks.forEach(week => {
        // Create list item for each week
        const weekItem = document.createElement("li");
        weekItem.textContent = `Week ${week.lesson}: `;
        
        // Create spans for links with separators
        week.links.forEach((link, index) => {
            const linkSpan = document.createElement("span");
            const anchor = document.createElement("a");
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            
            linkSpan.appendChild(anchor);
            
            // Add separator if not the last link
            if (index < week.links.length - 1) {
                const separator = document.createTextNode(" | ");
                linkSpan.appendChild(separator);
            }
            
            weekItem.appendChild(linkSpan);
        });
        
        mainList.appendChild(weekItem);
    });
    
    // Add the complete list to the container
    linksContainer.appendChild(mainList);
}

// Call the function to initiate the process
getLinks();