function loadFunc(){

	navDisplayControl();
	load();
}


function resizeFunc(){

	navDisplayControl();
}


function navDisplayControl(){

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

		document.getElementById("heading1").style.fontSize = "70px";

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

		//HEADING FONT ON RESIZE
		document.getElementById("heading1").style.fontSize = "80px";
	}

	if(width < 650)
	{
		// FOR NAVIGTION BAR
		document.getElementById("navContent").style.display = "none";
		document.getElementById("navContentSmall").style.display = "block";

		//HEADING FONT ON RESIZE
		document.getElementById("heading1").style.fontSize = "60px";
		document.getElementById("heading1").style.paddingTop = "20%";
	}
	else
	{		
		// FOR NAVIGTION BAR
		document.getElementById("navContentSmall").style.display = "none";
		document.getElementById("navContent").style.display = "block";

		//HEADING FONT ON RESIZE
		document.getElementById("heading1").style.fontSize = "70px";
		document.getElementById("heading1").style.paddingTop = "10%";
	}
}




function load(){
	// Get the modal


// Get the button that opens the modal
var btn5 = document.getElementById("getStartedButton");
var btn6 = document.getElementById("memberButton");
var btn7 = document.getElementById("homeButton");
var btn8 = document.getElementById("logoImage");

// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal 
btn5.onclick = function(){
	window.location.href = "getstarted.html";
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}