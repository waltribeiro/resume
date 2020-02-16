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
  document.getElementById("musicLetter").innerHTML = "data-note";
}



// build an array of all possible values
// match the dfata attributes from the HTML
// when clicked
//    check to see if the value is correct
//    go from 0 => correct array array.length
//    within the forLoop {if getElementById.getAttribute("data-note") == the current i value in the array
// then it's the correct note}

//domains and range in pus and oouts






$(document).ready(function() {

  // VARIABLES
  // ====================================================================
  // Here we create variables for tracking the number of sandwiches eaten
  // ...

  // FUNCTIONS
  // ====================================================================
  // Here we create various on "click" functions which capture the clicks
  // Inside each click event is the code to create an alert, update the counter, then show the updated count.
  // ...
  $("#note-c").click(function() {
    $("#demo").text("C");
  });

  // ...
  $("#note-d-flat").click(function() {
    $("#demo").text("Db");
  });

  $("#note-d").click(function() {
    $("#demo").text("D");
  });

  $("#note-e-flat").click(function() {
    $("#demo").text("Eb");
  });
  
  $("#note-e").click(function() {
    $("#demo").text("E");
  });

  $("#note-f").click(function() {
    $("#demo").text("F");
  });

  $("#note-g-flat").click(function() {
    $("#demo").text("Gb");
  });

  $("#note-g").click(function() {
    $("#demo").text("G");
  });

  $("#note-a-flat").click(function() {
    $("#demo").text("Ab");
  });


  $("#note-a").click(function() {
    $("#demo").text("A");
  });

  $("#note-b-flat").click(function() {
    $("#demo").text("Bb");
  });

  $("#note-b").click(function() {
    $("#demo").text("B");
  });

});