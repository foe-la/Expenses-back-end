require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expensesController = require('./controllers/expenses');
const db = mongoose.connection;

const app = express();
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3030;

// Connecting to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true });
db.on('error', (err) => console.log(err.message + ' Is MongoDB running?'));
db.on('disconnected', () => console.log('MongoDB disconnected'));
db.once('open', () => console.log('MongoDB connection established')); // Corrected the message

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors({ origin: '*' }));

// Routes
app.use('/expenses', expensesController);

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});

        