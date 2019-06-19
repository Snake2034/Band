myApp = new Framework7();

var modal = document.getElementById("myModal");
window.onload = function(){

  modal.style.display = "block";

}




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  window.location.href = "index.html";

}
