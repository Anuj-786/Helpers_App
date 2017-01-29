<?php 
$servername = "50.97.178.6";
$username = "helpersp_halim";
$password = "Halim007@#";

try {
 $dbh = new PDO("mysql:host=$servername;dbname=helpersp_badi;charset=utf8", $username, $password);
 $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);
 // set the PDO error mode to exception
 $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 //echo "Connected successfully"; 
}
catch(PDOException $e) {
 echo "Connection failed: " . $e->getMessage();
}


//$dbh = new PDO("mysql:host=$servername;dbname=helpersp_badi", $username, $password);

$sql = "SELECT `nombre`, `telefono`, `dni`, `estado`, `compania` FROM tm_badi";

$result = $dbh->query($sql)->fetchAll(PDO::FETCH_ASSOC);
//To output as-is json data result
//header('Content-type: application/json');
//echo json_encode($result);


//Or if you need to edit/manipulate the result before output
$return = array();
// foreach ($result as $row) {
// 	//print_r($result);
//     $return[] = [ 
//        //'name' => $row["nombre"],
//        'start' => $row['telefono'],
//        'dni' => $row['dni'],
//        'estado' => $row['estado'],
//       //'company' => $row['compania']
//     ];
// }

$length = count($result);
for ($i=0; $i < $length; $i++) { 
	$return[] = array(
		'name' => $result[$i]['nombre'],
		'start' => $result[$i]['telefono'],
       'dni' => $result[$i]['dni'],
       'estado' => $result[$i]['estado'],      
       'company' => $result[$i]['compania']
	);
}


$dbh = null;

header('Content-type: application/json');
$json = json_encode($return);
print_r($json);
die(123);
// error_log(print_r(debug_backtrace(), true ));
?>