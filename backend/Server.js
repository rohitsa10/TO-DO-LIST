const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/ToDoRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; // Make sure to use uppercase 'PORT'

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from your frontend
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log(`connected to MongoDB`))
  .catch(err => console.log(err));

// Routes
app.use(routes);

// Start server
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
