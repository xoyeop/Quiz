<?php
	header('Access-Control-Allow-Origin: *');    
	header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
 	header('Content-Type: application/json; charset=UTF-8');
	
	ini_set('display_errors', 1);

	/*
	// 컨텐츠 타입이 JSON 인지 확인한다
	if(!in_array('application/json',explode(';',$_SERVER['CONTENT_TYPE']))){
		echo json_encode(array('result_code' => '400'));
		exit;
	}
	*/

	//$__rawBody = file_get_contents("php://input"); // 본문을 불러옴
	//$__getData = array(json_decode($__rawBody)); // 데이터를 변수에 넣고

	/*
	처리부
	*/
	$fpos = "./answer/";
	$dh = opendir($fpos);

	while (false !== ($filename = readdir($dh))) {
		$files[] = $filename;

		if ($filename == "." || $filename == "..")
			continue;

		echo $filename;

		$contents = file_get_contents($fpos . $filename);
		$answers = json_decode($contents, TRUE);		

		echo json_encode($answers, JSON_PRETTY_PRINT);
		echo "\n";
	}

	/*	
	while (file_exists($fname)) {
		$_rn = mt_rand(0,999999);
		$fname = $fpos . "user" . $rn . ".json";
	}
	
	file_put_contents($fname, json_encode($__getData));

	echo json_encode(array('result_code' => '200', 'result'=>$__getData));
	*/
?>
