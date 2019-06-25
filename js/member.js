function loadFunc(){

	load();
	
}

function resizeFunc(){

	resize();
}

function load(){

	for(var i = 0; i < 100; i++)
	{
		var div = document.createElement("div");
		div.style.width= "100%";
		div.style.height = "200px";
		div.style.opacity = "1"
		div.style.borderRadius = "25px";
		div.style.background = "white";
		div.style.color = "white";
		div.style.marginBottom = "10px";

		document.getElementById("mainLeftContent").appendChild(div);

		div.onclick = function(){

			document.getElementById("headerProf").style.display = "none";
			document.getElementById(profile).style.display = "block";
		}
	}
}


function resize(){

	var width = window.innerWidth;

	if(width < 650)
	{
		//FOR MAIN CONTENT
		document.getElementById("mainRightContent").style.display = "none";
		document.getElementById("mainLeftContent").style.width = "100%";
	}
	else
	{		
		
		//FOR MAIN CONTENT
		document.getElementById("mainRightContent").style.display = "block";
		document.getElementById("mainLeftContent").style.width = "40%";
	}

}