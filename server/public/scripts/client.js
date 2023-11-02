function onReady() {
  console.log("JavaScript is loaded!")
} onReady()


// when submit is pressed
function submitGuesses(event) {

  event.preventDefault();

    // get input values
  let leoGuess = document.getElementById('leo').value;
  let essieGuess = document.getElementById('essie').value;
  let bradenGuess = document.getElementById('braden').value;
  let walkerGuess = document.getElementById('walker').value;
  let markGuess = document.getElementById('mark').value;
  let seanGuess = document.getElementById('sean').value;
    // make array of guesses (equal to req.body on server)
  let guessArray = [leoGuess, essieGuess, bradenGuess, walkerGuess, markGuess, seanGuess];
    console.log('Guess inputs:', guessArray)

    // send post request to server
  axios({
    method: 'POST',
    url: '/guesses',
    data: guessArray
    })
    .then((response) => {
          console.log('Confirmed server recieved form submission.')
          // call info retrieval
        getGuesses()
    });
}


// retrieves info from server and updates dom
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
}