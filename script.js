"use strict";

document.getElementById('answer').addEventListener('click', generateRandomNumber)

function generateRandomNumber () {
  // a variable to randomize numbers from specified digits
  let integer = Math.floor(Math.random() * 5 + 1);
  // a variable for user input
  let guess = document.getElementById('dice').value;
  if (guess == integer) {
    alert("Congratulations, you got it right!")
  } else if (guess >= 7) {
      alert("That's too far!")
  } else if (guess <= 0) {
      alert("That's way too low!")    
  } else {
      alert("Maybe next time.")
  }
    return integer;
} 