const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/computerDB', {useNewUrlParser: true, useUnifiedTopology: true})

const Schema = mongoose.Schema

const computerSchema = new Schema({
  maker: String,
  price: Number
})

const Computer = mongoose.model('computer', computerSchema)

// let c1 = new Computer({ maker: "Dell", price: 600 })
// let c2 = new Computer({ maker: "Apple", price: 1200 }) 
// let c3 = new Computer({ maker: "HP", price: 800 })
// let c4 = new Computer({ maker: "Asus", price: 400 }) 

// const allComputers = [c1, c2, c3, c4]

// allComputers.forEach(c => c.save())
