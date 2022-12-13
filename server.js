const express = require('express')
const fs = required('fs')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon.js')

app.listen(port, function () {
    console.log("listening")
});

app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

app.get("/pokemon/", (req, res) => {
    res.render("Index.jsx", {
        pokemon: pokemon
    })
})
