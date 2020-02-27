// Dependencies
const express = require("express");
const db = require("./config/connection");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Local Variables
const PORT = process.env.PORT || 3000
const app = express();
dotenv.config();

// Middlewear setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// Template Engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`You've connected to the server at ${PORT}`);
})