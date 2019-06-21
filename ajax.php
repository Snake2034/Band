<?php
	include ("action.php");

	$name = $_REQUEST['Name'];
		$email = $_REQUEST['Email'];
		$pass = $_REQUEST['Password'];

		echo "";
		echo "Name Entered was: " . $name;
		echo "<br>";
		echo " And the email you entered was: " . $email;
		echo "<br>";
		echo "The Password you entered was: " . $pass;
		echo "<br>";

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
		echo "Connected successfully <br>";
		echo mysqli_error($conn);
	$dupCheck = "SELECT COUNT(*) FROM accounts WHERE Name = '$name' AND Email = '$email'";
	$dupCheck2 = "SELECT COUNT(*) FROM accounts";

	$re2 = mysqli_query($conn,$dupCheck2);
	$r=mysqli_query($conn,$dupCheck);
	
	echo mysqli_error($conn);

	/* Custom made error debugging references
	$yeh = $re2->fetch_array();
	$re = $r->fetch_array();
	echo $re[0];
	echo "<br>";
	echo $yeh[0];
	*/

	//Now to check, we use an if() statement
	if($re[0] != 0)
	{
	 print "Record exists";
	}
	else if($re[0] == 0)
	{
	 print "Record doesn't exist";

	 //query for insert into db
		$sql = "INSERT INTO accounts (Name, Email, Password) VALUES ('$name', '$email', '$pass')";

	//Try and insert into db
	if ($conn->query($sql) === TRUE) {
    	echo "New record created successfully";
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