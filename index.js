require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const app = express()
const Person = require("./models/person")

app.use(express.json())
app.use(express.static("build"))

// Creating new token and then using morgan middleware
morgan.token("body", function (req, res) {
    return JSON.stringify(req.body)
})

app.use(
    morgan(
        ":method :url :status :res[content-length] - :response-time ms :body"
    )
)

app.get("/info", (request, response) => {
    Person.find({}).then((people) => {
        response.send(
            `Phonebook has info for ${people.length} people. <p>${new Date()}</p>`
        )
    })
})

app.get("/api/persons", (request, response) => {
    Person.find({}).then((people) => {
        response.json(people)
    })
})

app.get("/api/persons/:id", (request, response, next) => {
    const id = request.params.id

    Person.findById(id)
        .then((person) => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).send({ message: "Person not found" })
            }
        })
        .catch((error) => {
            next(error)
        })
})

app.delete("/api/persons/:id", (request, response, next) => {
    const id = request.params.id

    Person.findByIdAndRemove(id).then((person) => {
        return response.status(204).end()
    })
        .catch(error => {
            next(error)
        })
})



app.post("/api/persons", (request, response, next) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response
            .status(404)
            .json({ error: "Name and number should be given" })
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then((savedPerson) => {
        response.json(savedPerson)
    })
        .catch(error => {
            next(error)
        })
})

app.put("/api/persons/:id", (request, response, next) => {
    const id = request.params.id
    const body = request.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(id, person, {new: true, runValidators: true, context: "query"})
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => {
            next(error)
        })
})


const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === "CastError") {
        return response.status(400).send({ error: "malformmated id" })
    } else if (error.name === "ValidationError") {
        return response.status(400).send({error : error.message})
    }

    next(error)
}

app.use(errorHandler)



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
