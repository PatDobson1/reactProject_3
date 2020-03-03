<?php

header("Access-Control-Allow-Origin: *");


if( $_POST['requested'] == 'featured' ){
    $sql = "SELECT * FROM products WHERE featured = 1";
}else if( $_POST['requested'] == 'product' ){
    $sql = "SELECT * FROM products WHERE id = ?";
}else{
    $sql = "SELECT * FROM products";
}


$conn = new MySQLi('##HOSTNAME##', '##DBUSERNAME##', '##DBPASSWORD##', '##DBNAME##');
    $products = $sql;
    $products = $conn -> prepare($products);
    if( $_POST['requested'] == 'product' ){
        $products -> bind_param('i', $_POST['id']);
    }
    $products -> execute();
    $fpb = $products -> get_result();
$conn -> close();

$outputProducts = array();

while($row = $fpb -> fetch_assoc()){
    $outputProducts[] = $row;
}

print json_encode($outputProducts);

?>
