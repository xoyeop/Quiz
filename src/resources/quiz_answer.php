<style type="text/css">
	table { border-collapse: collapse; }
	td {
		border: 1px solid #aaa;
	}
	.array {border-right: 0px; }
</style>

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

	$file = $_GET['file'];

	$contents = file_get_contents($fpos . $file);
	$tmp = json_decode($contents, TRUE);

	function JSON_to_HTML($json) {
		echo "<table>";

		foreach($json as $key=>$value) {
			if($value):
				if(is_array($value)):
					echo "<tr><td class='array'>{$key}:</td><td>";
					JSON_to_HTML($value);
					echo "</td></tr>";
				else:
					echo "<tr><td>{$key}:</td><td>{$value}</td></tr>";
				endif;
			else:
				echo "<tr><td class='field-grey'>{$key}:</td><td class='field-empty'><span class='null'>null</span></td></tr>";
			endif;
		}
		echo "</table>";
	}

	echo "<table class='outer'>";
	foreach($tmp as $key=>$value) {
		if($value && is_array($value)):
				JSON_to_HTML($value);
		else: echo "<tr><th>{$key}:</th><td class='field-empty'><span class='null'>null</span></td></tr>";
		endif;
	}
	echo "</table>";

/**
	$html = "";
	$html .= "<table class='express'>";
	$html .= "<tr>";
	$html .= "	<th scope='row'>vinaProduct</th>";
	$html .= "	<td>구매 경험이 있는 VinaJ 상품</td>";
	$html .= "	<td>name : </td>";
	$html .= "</tr>";
	$html .= "</table>";

	echo $html;
*/
?>
