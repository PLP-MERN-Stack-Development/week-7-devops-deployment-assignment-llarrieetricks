// Connect to MongoDB
const connectDB = require('./config/db');
connectDB(); // call the connection function

// Dependencies
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(express.json()); // ✅ parse JSON request bodies
app.use(helmet());       // ✅ set secure HTTP headers

// Logger (based on environment)
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev'));
}

// Routes
const bugRoutes = require('./routes/bugRoutes'); // ✅ import bug routes
app.use('/api/bugs', bugRoutes);                // ✅ mount route

// Default test route
app.get('/', (req, res) => {
  res.send('Bug Tracker API is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
