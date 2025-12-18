const express = require('express');
const app = express();
const path = require('path');

// Serve all static files in "public" (CSS, JS, images)
app.use(express.static('public'));

// Serve home.html at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

// Optional: add other pages if needed
// app.get('/hotel', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/hotel.html'));
// });

app.listen(3000, () => {
    console.log('Server is running 👍 on http://localhost:3000');
});
