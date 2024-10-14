function generateTable() {
    const number = document.getElementById('numberInput').value;
    const tableContainer = document.getElementById('tableContainer');

    // Clear previous table
    tableContainer.innerHTML = '';

    // Validate input
    if (number < 1 || number > 1000000000) {
        alert('Silakan tuliskan angka terlebih dahulu dari 1 and 1000.000.000 sesuai kebutuhan kamu..!');
        return;
    }

    // Create the table
    const table = document.createElement('table');
    const headerRow = table.insertRow();

    const th1 = document.createElement('th');
    th1.textContent = 'Number';
    headerRow.appendChild(th1);

    const th2 = document.createElement('th');
    th2.textContent = 'Result';
    headerRow.appendChild(th2);

    // Generate table rows
    for (let i = 1; i <= 10; i++) {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();

        cell1.textContent = `${number} x ${i}`;
        cell2.textContent = number * i;
    }

    // Append the table to the container
    tableContainer.appendChild(table);
}

//navigasi //

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

