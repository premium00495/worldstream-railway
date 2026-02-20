const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/api/streams', (req, res) => {
    const streams = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'streams.json'))
    );

    res.json({
        success: true,
        urls: streams
    });
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
