
	<?php
	session_start();
	// If the user is not logged in redirect to the main index page...
	if (!isset($_SESSION['loggedin'])) {
		header('Location: index.html');
		exit();
	}
	?>

<html>

<head>
	 <link rel="stylesheet" href="css/index.css">

	 <!-- This js file doesnt work correctly with this php file
	 <script type="text/javascript" src="js/index.js"></script>
	-->

</head>
	
<body onresize="resizeFunc()" onload="loadFunc()">

<div class="main">

	<div class="navBar">
  
		<!-- CONTENT ABOVE 700 WIDTH -->
		<div id="leftSpace" class="leftSpace"></div>

		<div id="navContent" class="navContent">

			<img src="images/logo.png" id="logoImage">		
			
			<!-- home button -->
			<button id="homeButton" type="button-round" onclick="Home()">Home</button>

			<!-- member button -->
        	<button id="memberButton" type="button-round" onclick="Member()">Members</button>  


			<p>Welcome back, <?=$_SESSION['Name']?>!</p>

			<a href="logout.php">LOGOUT</a>

        </div>

        <div id="rightSpace" class="rightSpace"></div>


        <!-- CONTENT BELOW 700 WIDTH -->
		<div id="navContentSmall" class="navContentSmall">
			
			<img src="images/logo.png" id="logoImage" onclick="goToindex()">

			<div class="dropdown">

    			<button class="dropbtn">Menu 
      				<i class="fa fa-caret-down"></i>
    			</button>

    			<div class="dropdown-content">

      				<a href="#">Link 1</a>
      				<a href="#">Link 2</a>
      				<a href="#">Link 3</a>

    			</div>

  			</div> 

		</div>

	</div>




	<!-- mainContent  -->

	<div id="mainContent" class="mainConent">
		
		<div id="mainContentLeft" class="mainContentLeft"></div>

		<div id="mainContentMiddle" class="mainContentMiddle">
			
			<h1 id="heading1">Giving musicians the connection they deserve.</h1>

			<!-- Get started button -->
          <button id="getStartedButton" type="button-round">Get Started</button>
		</div>

		<div id="mainContentRight" class="mainContentRight"></div>

	</div>

      </div>
     
    </div>

</div>
</body>
</html>