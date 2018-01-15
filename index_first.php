<?php

	$product_array = array();

	$product_array[0]['name']  = '黑色凉拖';
	$product_array[0]['price'] = 1080.08;

	$product_array[1]['name']  = '黑色凉拖1';
	$product_array[1]['price'] = 1080;

	echo json_encode($product_array);
?>