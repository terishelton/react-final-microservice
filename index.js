const express = require('express');
const fetch = require('isomorphic-fetch');
const cors = require('cors');

const port = 4000;
// App id for openweathermap
const APP_ID = process.env.APP_ID;

// Initialize app and enable cross-origin resource sharing
const app = express();
app.use(cors());

// GET /
app.get('/', (req, res) => {
    // Fetch Seattle weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${APP_ID}`)
        .then(response => response.json())
        .then(data => {
            // Call res.json with an object to return data
            return res.json({
                weather: data,
                path: req.path,
                query: req.query
            });
        });
});

// Start the app on the provided port
app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});