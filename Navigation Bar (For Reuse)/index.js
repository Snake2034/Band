function loadFunc(){

	navDisplayControl();
}


function resizeFunc(){

	navDisplayControl();
}


function navDisplayControl(){


	var width = window.innerWidth;

	if(width < 800)
	{
		document.getElementById("leftSpace").style.display = "none";
		document.getElementById("rightSpace").style.display = "none";
		document.getElementById("navContent").style.width = "100%";
	}
	else
	{
		document.getElementById("leftSpace").style.display = "block";
		document.getElementById("rightSpace").style.display = "block";
		document.getElementById("navContent").style.width = "80%";
	}

	if(width < 650)
	{
		document.getElementById("navContent").style.display = "none";
		document.getElementById("navContentSmall").style.display = "block";
	}
	else
	{		
		document.getElementById("navContentSmall").style.display = "none";
		document.getElementById("navContent").style.display = "block";
	}
}