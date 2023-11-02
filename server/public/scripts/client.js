function onReady() {
  console.log("JavaScript is loaded!")
}

// when submit is pressed
function submitGuesses(event) {

  // get input values
  let leoGuess = document.getElementById('leo').value;
  let essieGuess = document.getElementById('essie').value;
  let bradenGuess = document.getElementById('braden').value;
  let walkerGuess = document.getElementById('walker').value;
  let markGuess = document.getElementById('mark').value;
  let seanGuess = document.getElementById('sean').value;
  // make array of guesses
  let guessArray = [leoGuess, essieGuess, bradenGuess, walkerGuess, markGuess, seanGuess];

  // send post request to server
  axios({
    method: 'POST',
    url: '/guesses',
    data: guessArray
    })
    // .then((response) => {
    //     console.log('Confirmed server recieved form submission.')
    // });
}

onReady()