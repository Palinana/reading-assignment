const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const mongoose = require("mongoose");



async function main() {
    await mongoose.connect(
      "mongodb+srv://palinapch:2BVqsgrmiLC&R4d@cluster0.4fwah1b.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  

  app.set("views", "./src/views");
  app.set("view engine", "ejs");
  // Make sure you place body-parser before your CRUD handlers!
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());

  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })

  app.listen(4000, function () {
    console.log("listening on 4000");
  });




// app.listen(3000, function () {
//     console.log('listening on 3000')
//   })
  

//   app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
//     // Note: __dirname is the current directory you're in. Try logging it and see what you get!
//     // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
//   })





// MongoClient.connect("mongodb+srv://palinapch:2BVqsgrmiLC&R4d@cluster0.4fwah1b.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('star-wars-quotes')
//     const quotesCollection = db.collection('quotes')

//     app.set('view engine', 'ejs')

    

//     app.use(bodyParser.urlencoded({ extended: true }))
//     app.use(bodyParser.json())

//     app.listen(3000, function() {
//         console.log('listening on 3000')
//     })

//     app.get('/', (req, res) => {
//         res.sendFile(__dirname + '/index.html')
//         // Note: __dirname is the current directory you're in. Try logging it and see what you get!
//         // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
//       })
  
//     app.get('/', (req, res) => {
//       db.collection('quotes')
//         .find()
//         .toArray()
//         .then(results => {
//           res.render('index.ejs', { quotes: results })
//           console.log(results)
//         })
//         .catch(error => console.error(error))
//     })

//     app.post('/quotes', (req, res) => {
//       quotesCollection
//         .insertOne(req.body)
//         .then(result => {
//           res.redirect('/')
//         })
//         .catch(error => console.error(error))
//     })

//     app.put('/quotes', (req, res) => {
//       quotesCollection
//       .findOneAndUpdate(
//         { name: 'Yoda'},
//         {
//           $set: {
//             name: req.body.name,
//             quote: req.body.quote,
//           },
//         },
//         {
//           upsert: true,
//         }
//       )
//       .then(result => {
//         res.json('Success')
//       })
//       .catch(error => console.error(error))
//     })

//     app.delete('/quotes', (req, res) => {
//       quotesCollection
//         .deleteOne({ name: req.body.name })
//         .then(result => {
//           if (result.deletedCount === 0) {
//             return res.json('no quote to delete')
//           }
//           res.json('Deleted Darth Vader quote')
//         })
//         .catch(error => console.error(error))
//     })
//   })
  