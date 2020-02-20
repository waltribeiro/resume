
// $(function() {
//     $('#killYoutube').click(function() {      
//         $('iframe').attr('src', $('iframe').attr('src'));
//     });
//   });
  
function killYoutubeFunction() {  
    document.getElementById('youtubeVideo').contentWindow.location.reload();
  }
  
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