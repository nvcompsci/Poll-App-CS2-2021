const express = require('express')
const app = express()

const answers = []

app.use(express.static("public"))
app.use(express.json())

app.get("/movies", (request, response) => {
    console.log(request.ip + " visited /movies")
    const movies = ["Star Wars", "Star Trek", "Interstellar"]
    response.send(movies)    
})

app.post("/poll", (request, response) => {
    const answer = request.body.answer
    answers.push(answer)
    console.log("someone voted "+answer)
    response.send(answers)
})

//starts a web server listening on port 3000
app.listen(3000)