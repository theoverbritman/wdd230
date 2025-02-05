document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const input = document.querySelector("#favchap");
    const addButton = document.querySelector("#add-chapter-btn");
    const list = document.querySelector("#list");

    // Load saved chapters from localStorage
    loadChapters();

    // Add click event listener to the button
    addButton.addEventListener("click", () => {
        // Check if input is not empty
        if (input.value.trim() === "") {
            alert("Please enter a chapter name."); // Provide feedback
            input.focus();
            return;
        }

        // Create new list item with input value
        const chapter = input.value.trim();
        createListItem(chapter);

        // Save to localStorage
        saveChapter(chapter);

        // Clear input field
        input.value = "";
        input.focus();
    });

    // Function to create a list item
    function createListItem(chapter) {
        const li = document.createElement("li");
        li.textContent = chapter;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");

        // Append button to li
        li.appendChild(deleteButton);

        // Append li to the unordered list
        list.appendChild(li);

        // Add event listener to delete button
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            deleteChapter(chapter);
        });
    }

    // Function to save a chapter to localStorage
    function saveChapter(chapter) {
        let chapters = JSON.parse(localStorage.getItem("chapters")) || [];
        chapters.push(chapter);
        localStorage.setItem("chapters", JSON.stringify(chapters));
    }

    // Function to load chapters from localStorage
    function loadChapters() {
        let chapters = JSON.parse(localStorage.getItem("chapters")) || [];
        chapters.forEach(chapter => createListItem(chapter));
    }

    // Function to delete a chapter from localStorage
    function deleteChapter(chapter) {
        let chapters = JSON.parse(localStorage.getItem("chapters")) || [];
        chapters = chapters.filter(item => item !== chapter);
        localStorage.setItem("chapters", JSON.stringify(chapters));
    }
});
