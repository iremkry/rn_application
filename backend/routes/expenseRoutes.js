// routes/expenseRoutes.js

const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Add expense endpoint
router.post('/add-expense', (req, res) => {
    const { date, amount, description } = req.body;
    const query = 'INSERT INTO expenses (date, amount, description) VALUES (?, ?, ?)';
    db.query(query, [date, amount, description], (err, result) => {
        if (err) {
            console.error('Error adding expense:', err);
            res.status(500).send('Server error');
        } else {
            res.status(201).send('Expense added successfully');
        }
    });
});

// Get expenses endpoint
router.get('/expenses', (req, res) => {
    const query = 'SELECT * FROM expenses';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching expenses:', err);
            res.status(500).send('Server error');
        } else {
            res.status(200).json(results);
        }
    });
});

module.exports = router;
