// ESTABLISH SERVER
  const express = require('express');
  const bodyParser = require('body-parser')
  const app = express();
  const PORT = 5000;
  // Serve up static files (HTML, CSS, Client JS)
  app.use(express.static('server/public'));
  // This must be added before GET & POST routes.
  app.use(bodyParser.urlencoded({extended:true}))
  // server running
  app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })
  // read json
  app.use(express.json());


// RANDOM NUMBER GENERATOR

// store guesses
let guesses = [];

// GET & POST Routes
app.post('/guesses', (req, res) => {
  console.log('POST request recieved!');
  let newGuesses = req.body;
  console.log('New item parsed from request.')
  console.log('New Item:', newGuesses);
  guesses.push(newGuesses);
  console.log('Added new guesses to guess list. Updated guesses:', guesses);
  res.sendStatus(201);
})