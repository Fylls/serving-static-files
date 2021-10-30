// Dependencies
const express = require("express")
const cors = require("cors")
const fs = require("fs")

// Environment Variables
const PORT = process.env.PORT || 3000

// Initialize Application
const app = express()

// Initialize Middlewares
app.use(express.static("stuff"))
app.use(express.json())
app.use(cors())

// Display Homepage
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"))

// Get Names of Stored Items
app.get("/ls", (req, res) => res.send(fs.readdirSync("./stuff")))

// Start Listening
app.listen(PORT, () => console.log(`Listening at: ${PORT}`))
