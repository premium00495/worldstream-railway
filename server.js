const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// IMPORTANT: API route static se pehle
app.get('/api/streams', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, 'streams'), 'utf8');

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        success: true,
        urls: JSON.parse(data)
    }));
});

// Static files baad me
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
