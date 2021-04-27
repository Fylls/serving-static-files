// Dependencies
const express = require("express")
const cors = require("cors")

// Initialize Application
const app = express()

// Initialize Middlewares
app.use(cors()) // Accepting Requests Outside Localhost
app.use(express.json()) // Parsing "application/json"
app.use(express.static("stuff")) // Serving file from "stuff" folder

// Display Home Page
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"))

// Starting the Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening at: ${PORT}`))
