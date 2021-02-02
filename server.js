const express = require('express')
const app = express()

app.get("/", (request, response) => {
    console.log("visitor on main route")
    response.status(404)
    response.send("Hello! My name is John.")
})

app.get("/movies", (request, response) => {
    console.log(request.ip + " visited /movies")
    const movies = ["Star Wars", "Star Trek", "Interstellar"]
    response.send(movies)    
})

app.post("/poll", (request, response) => {
    console.log("poll submitted")
})

//starts a web server listening on port 3000
app.listen(3000)