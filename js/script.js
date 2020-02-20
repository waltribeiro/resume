
// $(function() {
//     $('#killYoutube').click(function() {      
//         $('iframe').attr('src', $('iframe').attr('src'));
//     });
//   });
  
// function killYoutubeFunction() {  
//     document.getElementById('youtubeVideo').contentWindow.location.reload();
//   }
  
$('#killYoutubeButton').click(function(e) {
  e.preventDefault();
  $('.col-lg-8').children('iframe').attr('src', '');
});


  // Password checker for private work
  var chosenWord = "art";
  
  
  
  function checkPass() {
    var promptInput = prompt("Please enter the password to see more work");
    if (promptInput === chosenWord) {
        window.location.replace("http://linkedin.waltrib.com");
    } else if (promptInput != chosenWord) {
        alert("Incorrect password")
    } else {
  
    }
  };