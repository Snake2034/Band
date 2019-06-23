<?php
	session_start();
	$name = $_REQUEST['userNameInput'];
	$pass = $_REQUEST['passwordInput'];

	echo $name . " " . $pass;
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "musicianshomedb";
	echo ("Display1 <br>");
	try {

	// Create connection
		echo ("Display2 <br>");
	$conn = new mysqli($servername, $username, $password,$dbName);
	// Check connection
	if ($conn->connect_error) 
	{
	    die("Connection failed: " . $conn->connect_error);
	} 
	//SELECT `Name`, `Password` FROM `accounts` WHERE Name = 'BC' && Password = 'RC' LIMIT 1
	echo ("Display3 <br>");
	$query = "SELECT `ID`, `Name`, `Password` FROM `accounts` WHERE Name = '$name' && Password = '$pass' LIMIT 1";
	$result = $conn->query($query);
	if (mysqli_num_rows($result) > 0) 
	{
		echo ("Display4 <br>");
		$row = mysqli_fetch_array($result);
		// Account exists, now we verify the password.
		// Note: remember to use password_hash in your registration file to store the hashed passwords.
		echo ("Display5 <br>");
		if ($row['Password'] === $pass) {
			
			// Verification success! User has loggedin!
			// Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
			session_regenerate_id();
			$_SESSION['loggedin'] = TRUE;
			$_SESSION['Name'] = $row['Name'];
			$_SESSION['ID'] = $row['ID'];
			header('Location: index.php');
	} else {
		echo 'Incorrect password!';
	}
	} 
	else
	{
		echo "Login Unsuccessful <br>";
	}
	$conn->close();
	}
	
	catch(PDOException $e)
    {
    	echo $sql . "<br>" . $e->getMessage();
    }


	?>