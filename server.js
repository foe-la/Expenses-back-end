require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const expensesController = require('./controllers/expenses');
// const expense = require('./models/expenses');
// const connectDB = require('./config/database');

const expenses = require('./routes/expenses');

const app = express();
// const mongoURI = process.env.MONGO_URI;
const PORT = 3001;

// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors({ 
  origin: ["http://localhost:3005", "https://localhost:3031"]

}));

// Routes
app.use('/expenses', expenses);

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});

        