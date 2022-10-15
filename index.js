// const express = require('express');
// const mongoose = require('mongoose');
// const routes = require('./src/routes');
// require('dotenv').config();
// const cors = require('cors');

// const mongoString = process.env.DATABASE_URL;
// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on('error', (error) => {
//     console.log(error);
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })

// const app = express();

// // enabling CORS for all requests
// app.use(cors());
// app.use(express.json());
// app.use('/', routes)

// app.listen(process.env.PORT || 3000)

// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
    