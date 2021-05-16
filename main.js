// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphs = () => document.querySelectorAll(".like-glyph")


// document.addEventListener("DOMContentLoaded", () => {
//     glyph().addEventListener("click", handleClick)
// })

const handleLikes = (e) => {
  const heart = e.target
  mimicServerCall("url")
  .then(function(item){
    heart.innerText = FULL_HEART;
    heart.className = "activated-heart";
  })
  .catch(function(item){
    const modal = document.getElementById("modal");
    modal.className = "";
    setTimeout(() =>  modal.className = "hidden", 3000);
  })
}
//   if (e.target.innerHTML === FULL_HEART){
//     e.target.innerHTML = EMPTY_HEART
//   }
//   else {
//     e.target.innerHTML = FULL_HEART
//   }

for (const item of glyphs()) {
  item.addEventListener("click", handleLikes);
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
