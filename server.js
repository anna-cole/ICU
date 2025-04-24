require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

let locations = []; // In-memory store

app.use(express.json());
app.use(express.static('public'));

// Receive user location
app.post('/receive-location', (req, res) => {
  const { latitude, longitude, timestamp } = req.body;
  console.log('📍 Location received:', latitude, longitude);
  locations.push({ latitude, longitude, timestamp });
  res.status(200).json({ message: 'Location stored' });
});

// Serve the admin page
app.get('/admin-data', (req, res) => {
  res.json(locations);
});

app.listen(PORT, () => {
  console.log(`🌍 Server running on port ${PORT}`);
});



