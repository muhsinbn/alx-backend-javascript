// Step 1: Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Step 2: Create two student objects and an array named studentsList
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Step 3: Render a table using Vanilla JavaScript
function renderTable(): void {
    // Create the table and table body elements
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // Append table body to the table
    table.appendChild(tableBody);

    // Iterate over studentsList and create a row for each student
    studentsList.forEach((student) => {
        const row = document.createElement('tr');

        // Create a cell for the first name
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        // Create a cell for the location
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Append the table to the document body (or another container element)
    document.body.appendChild(table);
}

// Call the renderTable function to display the table
renderTable();
