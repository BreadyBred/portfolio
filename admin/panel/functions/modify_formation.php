<?php

include '../../../functions/functions.php';
session_start();

ob_start();
extract($_POST);

$response = [
	"success" => false,
	"message" => "&#9888; Une erreur est survenue. &#9888;"
];

$educations = decode('educations');

$major = (isset($major)) ? $major : null;
$specialty = (isset($specialty)) ? $specialty : null;

switch($_GET['action']) {
	case 'add':
		$new_formation = array(
			"name" 		=> $name,
			"date" 		=> $date,
			"specialty" => $specialty,
			"major" 	=> $major,
			"location" 	=> $location
		);
		array_unshift($educations, $new_formation);
		$action = 'ajoutée';
		break;
	case 'delete':
		$name = $educations[$education]['name'];
		unset($educations[$education]);
		$action = 'supprimée';
		break;
}

$json_data = json_encode($educations, JSON_PRETTY_PRINT);

$url_depth = get_URL_depth(get_current_URL());
$file_path = str_repeat('../', $url_depth) . "data/educations.json";

$resultat = file_put_contents($file_path, $json_data);

if ($resultat) {
	$response["success"] = true;
	$response["message"] = "La formation $name a bien été $action.";
}

$response_json = json_encode($response);

$_SESSION['server_response'] = $response_json;
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;
