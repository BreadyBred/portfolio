<?php

include "../../../functions/functions.php";
session_start();

ob_start();
extract($_POST); //? $name, $date, $company_name, $status, $description

$response = get_error_response();

$work_experiences = decode("work_experiences");

$lines = explode("-", $description);
$description_lines = array();
foreach ($lines as $line) {
	$description_lines[] = array(
		"line" 			=> $line,
		"tabulations"	=> 1
	);
}

switch($_GET["action"]) {
	case "add":
		$new_work_exp = array(
			"name" 			=> $name,
			"date" 			=> $date,
			"company_name" 	=> $company_name,
			"status" 		=> $status,
			"descriptions" 	=> $description_lines
		);
		array_unshift($work_experiences, $new_work_exp);
		$action = "ajoutée";
		break;
}


$json_data = json_encode($work_experiences, JSON_PRETTY_PRINT);

$url_depth = get_URL_depth(get_current_URL());
$file_path = str_repeat("../", $url_depth) . "data/work_experiences.json";

$resultat = file_put_contents($file_path, $json_data);

if ($resultat) {
	$response["success"] = true;
	$response["message"] = "L'expérience professionnelle $name a bien été $action.";
}

$response_json = json_encode($response);

$_SESSION["server_response"] = $response_json;
header("Location: {$_SERVER["HTTP_REFERER"]}");
exit;
