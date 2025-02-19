document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const input = document.querySelector("#favchap");
    const addButton = document.querySelector("#add-chapter-btn");
    const list = document.querySelector("#list");

    // Get stored chapters or fallback to an empty array
    let chaptersArray = getChapterList() || [];

    // Populate the displayed list of chapters
    chaptersArray.forEach(chapter => displayList(chapter));

    // Button click event listener (Refactored)
    addButton.addEventListener("click", () => {
        if (input.value.trim() === "") {
            alert("Please enter a chapter name.");
            input.focus();
            return;
        }

        const chapter = input.value.trim();
        displayList(chapter); // Append to list
        chaptersArray.push(chapter); // Add to array
        setChapterList(chaptersArray); // Save to localStorage

        input.value = ""; // Clear input
        input.focus(); // Set focus back
    });

    // Function to display a list item
    function displayList(item) {
        const li = document.createElement("li");
        li.textContent = item;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");

        // Append delete button to list item
        li.appendChild(deleteButton);
        list.appendChild(li);

        // Delete button event listener
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            deleteChapter(item);
        });
    }

    // Function to set chapters in localStorage
    function setChapterList(chapters) {
        localStorage.setItem("chapters", JSON.stringify(chapters));
    }

    // Function to get chapters from localStorage
    function getChapterList() {
        return JSON.parse(localStorage.getItem("chapters"));
    }

    // Function to delete a chapter
    function deleteChapter(chapter) {
        const formattedChapter = chapter.slice(0, -1); // Remove ❌ from string
        chaptersArray = chaptersArray.filter(item => item !== formattedChapter);
        setChapterList(chaptersArray);
    }
});
