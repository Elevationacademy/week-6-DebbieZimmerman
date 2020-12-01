const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/peopleDB', {useNewUrlParser: true, useUnifiedTopology: true})

const Schema = mongoose.Schema

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number
})

const Person = mongoose.model('person', personSchema)

// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) 

// p1.save()

// Person.find({}, function (err, people) {
//     console.log(people)
// })

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

let allTheShooberts = [p2, p3, p4, p5]
allTheShooberts.forEach(s => s.save())

// let peoplePromise = Person.find({})

// peoplePromise.then(function (people) {
//     console.log(people)
// })

