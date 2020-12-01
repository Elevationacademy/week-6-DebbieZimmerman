// Server setup
const express = require('express')
const app = express()

// Mongoose setup
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

// Schema/model setup
const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})
const Person = mongoose.model("person", personSchema)

//Routes
app.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

//spot check 1
app.post('/person', function (req, res) {
    let person = req.body
    let p1 = new Person ({
        firstName: person.firstName,
        lastName: person.lastName,
        age: person.age
    })
    p1.save()
    res.end()
})

//spot check 2
app.put('person/:id', function (req, res) {
    let id = req.params.id
    Person.findByIdAndUpdate(id, {age: 80}, function (err, person){
        res.end()
    })
})

//spot check 3
app.delete('/apocalypse', function (req, res){
    Person.find({}, function (err, persons) {
        persons.forEach(p => p.remove())
    })
    res.end()
})

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})