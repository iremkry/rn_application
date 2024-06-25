// db/queries.js

const db = require('./db');

// Create users table
const createUserTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
`;

// Create expenses table
const createExpensesTable = `
    CREATE TABLE IF NOT EXISTS expenses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        date DATE NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        description VARCHAR(255)
    );
`;

// Initialize tables
db.query(createUserTable, (err) => {
    if (err) {
        console.error('Error creating users table:', err);
    } else {
        console.log('Users table created or already exists.');
    }
});

db.query(createExpensesTable, (err) => {
    if (err) {
        console.error('Error creating expenses table:', err);
    } else {
        console.log('Expenses table created or already exists.');
    }
});
