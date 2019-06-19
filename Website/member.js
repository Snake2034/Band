myApp = new Framework7();

var l = document.getElementById("leftDiv");
var r = document.getElementById("rightDiv");
var m = document.getElementById("mainDiv");

function resizeFunction(){
	var width = window.innerWidth;

	if(width < 800)
	{
		l.style.display = "none";
		r.style.display = "none";
		document.getElementById("mainDiv").style.width = "100%";
	}
	else
	{
		l.style.display = "block";
		r.style.display = "Block";
		document.getElementById("mainDiv").style.width = "80%";
	}

	if(width < 600)
	{
		document.getElementById("loginButton").style.fontSize = "15px"; 
		document.getElementById("loginButton").style.width = "100px"; 
		document.getElementById("rightMain").style.display = "none";
		document.getElementById("leftMain").style.width = "100%"

	}
	else
	{
		document.getElementById("loginButton").style.fontSize = "20px"; 
		document.getElementById("loginButton").style.width = "150px";
		document.getElementById("rightMain").style.display = "block";
		document.getElementById("leftMain").style.width = "40%"
	}			
}

function loadFunc()
{
	for(var i = 0; i < 10; i++)
	{
		var div = document.createElement("div");
		div.style.width= "100%";
		div.style.height = "200px";
		div.style.opacity = "1"
		div.style.background = "white";
		div.style.color = "white";
		div.style.marginBottom = "10px";

		document.getElementById("leftMain").appendChild(div);
	}
}


// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("registerModal");
var modal2 = document.getElementById("confirmEmailModal");


// Get the button that opens the modal
var btn = document.getElementById("loginButton");
var btn1 = document.getElementById("registerButton");
var btn2 = document.getElementById("registerLoginButton");
var btn3 = document.getElementById("loginRegisterButton");
var btn4 = document.getElementById("registerModalButton");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("Close")[0];
var span1 = document.getElementsByClassName("registerClose")[0];
var span2 = document.getElementsByClassName("emailConfirmation")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function(){
	modal1.style.display = "block";
}

btn2.onclick = function(){
	modal.style.display = "none";
	modal1.style.display = "block";
}

btn3.onclick = function(){
	modal1.style.display = "none";
	modal.style.display = "block";
}

btn4.onclick = function(){
	modal1.style.display = "none";
	modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function Member(){
	window.location.href = "Member.html";
}

function getStarted(){
	window.location.href = "getstarted.html";
}

function Home(){
	window.location.href = "home.html";
}