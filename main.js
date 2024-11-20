// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Selecting the heart element and the error modal
const heart = document.querySelector('.heart');
const errorModal = document.querySelector('.error-modal');

// Event listener for clicking the heart
heart.addEventListener('click', () => {
  // Check if heart is empty or full
  if (heart.classList.contains('activated-heart')) {
    // If full heart, revert to empty heart
    heart.classList.remove('activated-heart');
  } else {
    // If empty heart, simulate a server request
    mimicServerCall()
      .then(() => {
        // On success, turn the heart to a full heart
        heart.classList.add('activated-heart');
      })
      .catch(() => {
        // On failure, show the error modal
        errorModal.classList.remove('hidden');
        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  }
});


// Provided mimicServerCall function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly simulate success or failure
      const isRandomSuccess = Math.random() < 0.7;
      if (isRandomSuccess) {
        resolve("Pretend remote server notified of action!");
      } else {
        reject("Random server error. Try again.");
      }
    }, 300);
  });
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
