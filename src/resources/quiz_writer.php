<?php
	header('Access-Control-Allow-Origin: *');    
	header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
 	header('Content-Type: application/json; charset=UTF-8');
	
	ini_set('display_errors', 1);

	echo "hello";

	// 컨텐츠 타입이 JSON 인지 확인한다
	if(!in_array('application/json',explode(';',$_SERVER['CONTENT_TYPE']))){
		echo json_encode(array('result_code' => '400'));
		exit;
	}

	$__rawBody = file_get_contents("php://input"); // 본문을 불러옴
	$__getData = array(json_decode($__rawBody)); // 데이터를 변수에 넣고

	/*
	처리부
	*/
	$rn = mt_rand(0,999999);
	$fname = "user" . $rn . ".json";
	
	while (file_exists($fname)) {
		$_rn = mt_rand(0,999999);
		$fname = "user" . $rn . ".json";
	}
	
	file_put_contents($fname, json_encode($__getData));

	echo json_encode(array('result_code' => '200', 'result'=>$__getData));

?>
