const express = require('express');
const router = express.Router();
const Expenses = require('../models/expenses');
// Remember INDUCES

// Index
router.get('/', async (req, res) => {
    try{
        const foundExpenses = await  Expenses.find({});
        res.json(foundExpenses);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'error'});
    }
});
// New - Will be handled by React application

// Delete
router.delete('/:id', (req, res)=>{
    Expenses.findByIdAndRemove(req.params.id, (err, deletedExpense)=>{
        res.json(deletedExpense)
    })
});
// Update
router.put('/:id', (req, res)=>{
    Expenses.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedExpense)=>{
        res.json(updatedExpense)
    })
});
// Create
router.post('/', (req, res)=>{
    Expenses.create(req.body, (err, createdExpense)=>{
        res.json(createdExpense) //.json() will send proper headers in response so client knows it's json coming back
    })
})
// Edit - Will be handled by React application

// Show
router.get('/:id', (req, res)=>{
    Expenses.findById(req.params.id, (err, foundExpense)=>{
        res.json(foundExpense)
    })
})


module.exports = router