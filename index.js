const express = require('express');
const fetch = require('isomorphic-fetch');
const cors = require('cors');

const port = 4000;
// App ID for NewsAPI
const APP_ID = process.env.APP_ID;

// Initialize app and enable cross-origin resource sharing
const app = express();
app.use(cors());

// GET /
app.get('/', (req, res) => {
    // Fetch News API sources list
    fetch(`https://newsapi.org/v2/sources?apiKey=${APP_ID}`)
        .then(response => response.json())
        .then(data => {
            // Call res.json with an object to return data
            return res.json({
                sources: data,
                path: req.path,
                query: req.query
            });
        });
});

// GET /:source
app.get('/:source', (req, res) => {
    // Fetch specific news source's article list
    const sourceID = req.params.source;
    console.log(sourceID);
    fetch(`https://newsapi.org/v2/top-headlines?pageSize=5&sources=${sourceID}&apiKey=${APP_ID}`)
        .then(response => response.json())
        .then(data => {
            // Call res.json with an object to return data
            return res.json({
                data: data,
                path: req.path,
                query: req.query,
                params: req.params
            });
        });
});

module.exports = app;

// Start the app on the provided port
app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});