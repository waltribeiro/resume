
// $(function() {
//     $('#killYoutube').click(function() {      
//         $('iframe').attr('src', $('iframe').attr('src'));
//     });
//   });
  
// function killYoutubeFunction() {  
//     document.getElementById('youtubeVideo').contentWindow.location.reload();
//   }


lazyload();


$('#killYoutubeButton').click(function(e) {
  e.preventDefault();
  $('.col-lg-8').children('iframe').attr('src', $('.col-lg-8').children('iframe').attr('src'));
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





  // d3.selectAll("p").html("<h1>This is new inner html.</h1>");

//   const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

//   const w = 500;
//   const h = 500;

//   const svg = d3.select("#walt")
//                 .append("svg")
//                 .attr("width", w)
//                 .attr("height", h)
// .append("rect")
// .attr("x", 0)
//         .attr("y", 0)
//         .attr("width", 445)
//         .attr("height", 400);
