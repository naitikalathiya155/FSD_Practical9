// app.js
const express = require('express');
const homeRouter = require('./routes/home');

const app = express();

// Middlewares (JSON parsing, request logging stub — add real logger if needed)
app.use(express.json());

// Mount routes
app.use('/', homeRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Generic error handler (keeps response shape consistent)
app.use((err, req, res, next) => {
  console.error(err); // log the error (replace with a logger in production)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

module.exports = app;