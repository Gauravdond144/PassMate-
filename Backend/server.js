const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

// Set the directory for EJS templates (default is `views/`)
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render("home");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
