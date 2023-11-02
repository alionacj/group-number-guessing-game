function onReady() {
  console.log("JavaScript is loaded!")
} onReady()

// when submit is pressed...
function submitGuesses(event) {

// prevents page from refreshing when you hit submit (which is the default)
  event.preventDefault();

    // gets input values and stores them in variables
  let leoGuess = document.getElementById('leo').value;
  let essieGuess = document.getElementById('essie').value;
  let bradenGuess = document.getElementById('braden').value;
  let walkerGuess = document.getElementById('walker').value;
  let markGuess = document.getElementById('mark').value;
  let seanGuess = document.getElementById('sean').value;

    // make array of guesses (equal to req.body on server)
  let guessArray = [leoGuess, essieGuess, bradenGuess, walkerGuess, markGuess, seanGuess];
    console.log('Guess inputs:', guessArray)

    // clears/resets input fields
   document.getElementById('leo').value = '';
   document.getElementById('essie').value = '';
   document.getElementById('braden').value = '';
   document.getElementById('walker').value = '';
   document.getElementById('mark').value = '';
  document.getElementById('sean').value = '';

    // send post request to server
    // "HEY SERVER, TAKE THIS DATA"
  axios({
    method: 'POST',
    url: '/guesses',
    data: guessArray
    })
    // triggers
    .then((response) => {
          console.log('Confirmed server recieved form submission.')
          // call info retrieval
        getGuesses()
    });
}


// retrieves info from server and updates dom
// "can I have??"
function getGuesses() {
  axios({
    method: 'GET',
    url: '/guesses'
  })
    // retrieves inventory from response
  .then(function(response) {
      console.log('GET response recieved from server! Response:', response);
    let guessesArray = response.data;
      console.log('Parsing data from response package. Items:', guessesArray);
      // formats and edits html with inventory
    renderDisplay(guessesArray);
      // for errors
    }).catch(function(error) {
        console.log(error);
        alert('Something bad happened! Check the console for more details.');
    })
}

function renderDisplay(guessArray) {
  console.log('render function!!', guessArray)
  // adds one to roundCounter
  let roundCounter = 0;
  // clears table of repeated values before rendering
  document.getElementById('tableBody').innerHTML = '';
  // selects destination of data
  for (let guessRound of guessArray){
    // increments the roundCounter for each round of guesses
    roundCounter ++
    // populates the table with the round number and its respective guesses (state)
    let table =  `
    <tr>
    <td>${roundCounter}</td>`
    for (let guess of guessRound){
      table += 
        `<td>${guess.guess}</td>
        <td>${guess.result}</td>`
    }
  table += `</tr>`
  // renders updated table to DOM!
  document.getElementById('tableBody').innerHTML += table
  }
}


function resetGame(event){

}