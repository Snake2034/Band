function loadFunc2(){

	
}

function resizeFunc(){

	resize();
}


function resize(){

	var width = window.innerWidth;

	if(width < 700)
	{
		document.getElementById("heading1").style.fontSize  = "60px";
	}
	else
	{		
		document.getElementById("heading1").style.fontSize  = "80px";
	}

}

