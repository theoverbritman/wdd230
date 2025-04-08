// Fetch and display rental pricing data
fetch('data/rental-pricing.json')
    .then(response => response.json())
    .then(data => {
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Rental Type</th>
                    <th>Max Persons</th>
                    <th>Reservation Half Day</th>
                    <th>Reservation Full Day</th>
                    <th>Walk-In Half Day</th>
                    <th>Walk-In Full Day</th>
                </tr>
            </thead>
            <tbody>
                ${data.rentals.map(r => `
                    <tr>
                        <td>${r.type}</td>
                        <td>${r.maxPersons}</td>
                        <td>$${r.reservation.halfDay}</td>
                        <td>$${r.reservation.fullDay}</td>
                        <td>$${r.walkIn.halfDay}</td>
                        <td>$${r.walkIn.fullDay}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        document.getElementById('rentalTable').appendChild(table);
    })
    .catch(error => console.error('Error fetching rental data:', error));