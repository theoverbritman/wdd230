document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");

    // Fetch data from JSON file
    fetch("data/members.json")
        .then(response => response.json())
        .then(members => {
            displayMembers(members, "grid");

            // Toggle Views
            gridViewButton.addEventListener("click", () => displayMembers(members, "grid"));
            listViewButton.addEventListener("click", () => displayMembers(members, "list"));
        });

    function displayMembers(members, view) {
        membersContainer.innerHTML = "";
        membersContainer.className = view; 

        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member");

            if (view === "grid") {
                // Grid View: Show full details
                memberDiv.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membership}</p>
                    <p>${member.description}</p>
                `;
            } else {
                // List View: Hide details behind a "View Details" link
                const detailsId = `details-${member.name.replace(/\s+/g, "-").toLowerCase()}`;

                memberDiv.innerHTML = `
                    <h3>${member.name}</h3>
                    <a href="#" class="view-details" data-details="${detailsId}">View Details</a>
                    <div id="${detailsId}" class="member-details hidden">
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                        <p><strong>Membership Level:</strong> ${member.membership}</p>
                        <p>${member.description}</p>
                    </div>
                `;
            }

            membersContainer.appendChild(memberDiv);
        });

        // Add event listeners for "View Details" links in List View
        if (view === "list") {
            document.querySelectorAll(".view-details").forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    const detailsDiv = document.getElementById(this.dataset.details);
                    detailsDiv.classList.toggle("hidden");
                });
            });
        }
    }
});
