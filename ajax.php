<?php
	$name = $_REQUEST['Name'];
	$email = $_REQUEST['Email'];
	$pass = $_REQUEST['Password'];

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "musicianshomedb";

	try {

	// Create connection
	$conn = new mysqli($servername, $username, $password,$dbName);
	// Check connection
	if ($conn->connect_error) 
	{
	    die("Connection failed: " . $conn->connect_error);
	} 
	$dupCheck = "SELECT COUNT(*) FROM accounts WHERE Name = '$name' AND Email = '$email'";
	$dupCheck2 = "SELECT COUNT(*) FROM accounts";

	$r=mysqli_query($conn,$dupCheck);
	$re = $r->fetch_array();
	
	//Now to check, we use an if() statement
	if($re[0] != 0)
	{
	 	echo "Account already exists";
	}
	else if($re[0] == 0)
	{
		echo "Account doesn't exist";

	 //query for insert into db
		$sql = "INSERT INTO accounts (Name, Email, Password) VALUES ('$name', '$email', '$pass')";

	//Try and insert into db
	if ($conn->query($sql) === TRUE) {
	} 
	else
	{
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
	}
	
	}
	catch(PDOException $e)
    {
    	echo $sql . "<br>" . $e->getMessage();
    }


?>