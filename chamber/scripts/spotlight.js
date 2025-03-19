document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded. Fetching data...');
    fetch('data/members.json') // Adjust path if necessary
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(directoryData => {
            console.log('Directory Data:', directoryData);

            // Filter for Silver or Gold members
            const eligibleMembers = directoryData.filter(member =>
                member.membership === 'Gold' || member.membership === 'Silver'
            );

            if (eligibleMembers.length < 2) {
                console.error('Not enough Gold or Silver members available');
                return;
            }

            // Shuffle and select 2-3 members randomly
            const shuffledMembers = eligibleMembers.sort(() => Math.random() - 0.5);
            const selectedMembers = shuffledMembers.slice(0, Math.min(3, shuffledMembers.length));

            // Display selected members
            selectedMembers.forEach((member, index) => {
                const spotlightElement = document.getElementById(`spotlight${index + 1}`);
                if (spotlightElement) {
                    spotlightElement.innerHTML = `
                        <h3>${member.name}</h3>
                        <p>${member.description || "No description available."}</p>
                        <small>Membership Level: ${member.membership}</small>
                    `;
                }
            });

            // Hide unused spotlights if fewer than 3
            for (let i = selectedMembers.length; i < 3; i++) {
                const extraSpotlight = document.getElementById(`spotlight${i + 1}`);
                if (extraSpotlight) {
                    extraSpotlight.style.display = 'none';
                }
            }
        })
        .catch(error => {
            console.error('Error fetching or displaying data:', error);
        });
});
