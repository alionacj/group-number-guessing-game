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
// function generateNumber() {
  let randomNumber = Math.floor(Math.random()*26)
// }


// store guesses
let guesses = [];


// compare inputs to random number
function compareNumbers(newArray) {
    // turn inputs into result objects
    console.log('random number:', randomNumber)
  let results = [];
  for (let number of newArray) {
    if (number > randomNumber){
      let newguess = {
        guess: number,
        result: 'too high'
      }
      results.push(newguess);
    } else if (number < randomNumber) {
      let newguess = {
        guess: number,
        result: 'too low'
      }
      results.push(newguess);
    } else {
      let newguess = {
        guess: number,
        result: 'equal!'
      }
      results.push(newguess);
    }
  }
    // updating guesses array with result arrays
  guesses.push(results)
    console.log('Results:', results)
  // send results to client
}


// GET & POST Routes

app.post('/guesses', (req, res) => {
    console.log('POST request recieved!');
    // storing inputs into variable
  let newGuesses = req.body;
    console.log('New item parsed from request.')
    console.log('New Item:', newGuesses);
    console.log('Current guesses:', guesses);
    // call guess evaluation
  compareNumbers(newGuesses)
    // ok :)
  res.sendStatus(201);
})

app.get('/guesses', (req, res) => {
    console.log('GET request recieved by client. Sending response...');
    console.log('Sending guess array to client. Array:', guesses);
  res.send(guesses);
});