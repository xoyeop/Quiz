<?php
	header('Access-Control-Allow-Origin: *');    
	header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
 	header('Content-Type: text/html; charset=UTF-8');
	
	ini_set('display_errors', 'On');
	
	/*
	처리부
	*/
	$fpos = "./answer/";
	$dh = opendir($fpos);

	echo "<ul>";
	while (false !== ($filename = readdir($dh))) {
		$files[] = $filename;

		if ($filename == "." || $filename == "..")
			continue;

		echo "<li>";
		echo "<a href='quiz_answer.php?file=" . $filename . "'>";
		echo $filename;
		echo "</a>";
		echo "</li>";
	}
	echo "</ul>";
?>
