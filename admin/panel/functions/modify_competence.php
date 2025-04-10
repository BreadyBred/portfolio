<?php

include "../../../functions/functions.php";
session_start();

ob_start();
extract($_POST); //? $category, $name, $formatted_name - $competence

$response = get_error_response();

$competences = decode("competences");

switch($_GET["action"]) {
	case "add":
		$competences[$category][$formatted_name] = $name;
		$action = "ajoutée";
		break;
	case "delete":
		unset($competences[$category][$competence]);
		$action = "supprimée";
		break;
}

$json_data = json_encode($competences, JSON_PRETTY_PRINT);

$url_depth = get_URL_depth(get_current_URL());
$file_path = str_repeat("../", $url_depth) . "data/competences.json";

$resultat = file_put_contents($file_path, $json_data);

if ($resultat) {
	$response["success"] = true;
	$response["message"] = "La compétence $name a bien été $action.";
}

$response_json = json_encode($response);

$_SESSION["server_response"] = $response_json;
header("Location: {$_SERVER["HTTP_REFERER"]}");
exit;
