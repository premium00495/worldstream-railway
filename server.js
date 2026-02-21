const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Static folder serve kare
app.use(express.static(__dirname));

// 🔥 YAHAN ADD KARNA HAI
app.get("/api/streams", (req, res) => {
    res.sendFile(path.join(__dirname, "api", "streams.json"));
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
