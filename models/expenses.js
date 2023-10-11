const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Date: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
});

const Expenses = mongoose.model('Expense', expenseSchema);

module.exports = Expenses;