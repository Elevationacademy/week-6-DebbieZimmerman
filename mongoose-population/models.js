//Exercise
const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/planetsDB', {useNewUrlParser: true, useUnifiedTopology: true})

const solarSystemSchema = new Schema({ 
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
    starName: String,
     })
  
  const planetSchema = new Schema({ 
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'SolarSystem'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
  })

  const visitorSchema =new Schema({
      name: String,
      homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
      visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
  })
  
  const Planet = mongoose.model("Planet", planetSchema)
//   module.exports = Planet

  const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema)
//   module.exports = SolarSystem

  const Visitor = mongoose.model("Visitor", visitorSchema)
//   module.exports = Visitor

let s1 = new SolarSystem({
    planets: [],
    starName: "Sun"
})

let p1 = new Planet({
    name: "Mercury",
    system: s1,
    visitors: []
})

let p2 = new Planet({
    name: "Venus",
    system: s1,
    visitors: []
})

let p3 = new Planet({
    name: "Earth",
    system: s1,
    visitors: []
})

let p4 = new Planet({
    name: "Mars",
    system: s1,
    visitors: []
})

let v1 = new Visitor({
    name: "Matt Damon",
    homePlanet: p3,
    visitedPlanets: [p4]
})

// planets = [p1, p2, p3, p4]
// // s1.planets = planets
// planets.forEach(p => s1.planets.push(p))
// planets.forEach(p => p.save())

// v1.save()
// s1.save()

let v2 = new Visitor({
   name: "Marvin the Martian",
   homePlanet: p4, 
   visitedPlanets: [p3]
})

// v2.save()

//Find planets visited
// Visitor.findOne({}).populate("visitedPlanets")
// .exec(function (err, visitor) {
//     visitor.visitedPlanets.forEach(p => console.log(p.name))
// })

//Find all the visitors on a planet
// Planet.findOne({}).populate('visitors')
// .exec(function (err, planet) {
//     console.log("The following people visited " + planet.name)
//     planet.visitors.forEach(v => console.log(v.name))
// })

// Planet.findByIdAndUpdate("5fc535f9e4b14a315c7e8f10", {visitors = [v1]}, function (err, planet) {
//     console.log(planet)
// }
// )
// Planet.findByIdAndUpdate("5fc535f9e4b14a315c7e8f0f", {visitors = [v2]}, function (err, planet) {
//     console.log(planet)
// }
// )
//forgot to push visitors and no time to remember how to update
//Find all the visitors in a system
SolarSystem.findOne({}).populate({
    path: "planets",
    populate: {
        path: "visitors"
    }
})
.exec(function (err, system) {
    console.log("The following people visited the planets revolving around " + system.starName)
    for (planet of system.planets){
        console.log("The planet " + planet.name + " was visited by")
        planet.visitors.forEach(v => console.log(v.name))
    }
})



//Spot Checks
// let b1 = new Book({
//     title: "Name of the Wind",
//     author: "Patrick Rothfuss",
//     reviews: []
// })

// let c1 = new Critic({
//     name: "William Jeffery",
//     reviews: []
// })

// let r1 = new Review({
//     book: b1,
//     critic: c1,
//     reviewText: "Excellent Book"
// })

// b1.reviews.push(r1)
// c1.reviews.push(r1)

// b1.save()
// c1.save()
// r1.save()

// Review.find({})
//     .populate('book critic')
//     .exec(function (err, reviews) {
//     console.log(reviews)
// })