function loadFunc(){

	displayControl();
	load();
}


function resizeFunc(){

	displayControl();
}


function displayControl(){

	var width = window.innerWidth;

	if(width < 800)
	{
		// FOR NAVIGTION BAR
		document.getElementById("leftSpace").style.display = "none";
		document.getElementById("rightSpace").style.display = "none";
		document.getElementById("navContent").style.width = "100%";

		//FOR MAIN CONTENT
		document.getElementById("mainContentLeft").style.display = "none";
		document.getElementById("mainContentRight").style.display = "none";
		document.getElementById("mainContentMiddle").style.width = "100%";

	 	divSizing(width);

	}
	else
	{
		// FOR NAVIGTION BAR
		document.getElementById("leftSpace").style.display = "block";
		document.getElementById("rightSpace").style.display = "block";
		document.getElementById("navContent").style.width = "80%";

		//FOR MAIN CONTENT
		document.getElementById("mainContentLeft").style.display = "block";
		document.getElementById("mainContentRight").style.display = "block";
		document.getElementById("mainContentMiddle").style.width = "80%";

	}

	if(width < 650)
	{
		// FOR NAVIGTION BAR
		document.getElementById("navContent").style.display = "none";
		document.getElementById("navContentSmall").style.display = "block";

	}
	else
	{		
		// FOR NAVIGTION BAR
		document.getElementById("navContentSmall").style.display = "none";
		document.getElementById("navContent").style.display = "block";

	}
}

function divSizing(width){

	var left = 40;
	var right = 60;
	var currentWidth = width;

	if(currentWidth < width)
	{
		left + 5;
		right - 5;
	}
	else
	{
		right + 5;
		left - 5;
	}

	document.getElementById("leftSide").style.width = left + "%";
	document.getElementById("rightSide").style.width = right + "%";

}


function load(){
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
var btn6 = document.getElementById("memberButton");
var btn7 = document.getElementById("homeButton");
var btn8 = document.getElementById("logoImage");



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

btn6.onclick = function(){
	window.location.href = "member.html";
}

btn7.onclick = function(){
	window.location.href = "home.html";
}

btn8.onclick = function(){
	window.location.href = "index.html";
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
}