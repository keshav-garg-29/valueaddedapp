const express = require('express');
const path = require('path');

const app = express();

// Set view engine to EJS (or any template engine you prefer)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render index.js with a title
app.get('/', (req, res) => {
    res.render('index', { title: 'My Express App' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});