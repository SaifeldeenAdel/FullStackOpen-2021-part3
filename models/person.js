const mongoose = require("mongoose")
var uniqueValidator = require("mongoose-unique-validator")

const url = process.env.MONGODB_URI

console.log("connecting to", url)

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then((result) => {
        console.log("Connected to MongoDB")
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB: " + error.message)
    })


const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true,
        unique: true
    },
    number: {
        type: String,
        minLength: 8,
        required: true,
        unique: true
    },
})

personSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

personSchema.plugin(uniqueValidator)

module.exports = mongoose.model("Person", personSchema)
