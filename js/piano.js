const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key') // array of divs with class query
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => {
    playNote(key);
    displayNoteLetter(key);
  })
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

function displayNoteLetter (keyDiv) {
  


}



// this is the dog piano function
function myFunction() {
  var x = document.getElementById("myP").innerHTML;
  document.getElementById("demo").innerHTML = x;
}

// build an array of all possible values
// match the dfata attributes from the HTML
// when clicked
//    check to see if the value is correct
//    go from 0 => correct array array.length
//    within the forLoop {if getElementById.getAttribute("data-note") == the current i value in the array
// then it's the correct note}

//domains and range in pus and oouts
