function loadFunc(){

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