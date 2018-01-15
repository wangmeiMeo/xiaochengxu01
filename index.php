<?php 
	// 接收的product_id
	$product_id = 1;


	// 数据库查出来的数据
	$name  = '黑色凉拖';
	$price = 1080.08;

	$res_arr = array();

	$res_arr['name']  = $name;
	$res_arr['price'] = $price;

	echo json_encode($res_arr);

?>