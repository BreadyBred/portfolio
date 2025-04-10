<?php

include '../../../functions/functions.php';
session_start();

ob_start();
extract($_POST); //? $name

$response = [
	"success" => false,
	"message" => "&#9888; Une erreur est survenue. &#9888;"
];

$techs = decode('techs');

switch($_GET['action']) {
	case 'add':
		$techs["techs"][] = $name;
		$action = 'ajoutée';
		break;
	case 'delete':
		unset($techs["techs"][$name]);
		$action = 'supprimée';
		break;
}

$json_data = json_encode($techs, JSON_PRETTY_PRINT);

$url_depth = get_URL_depth(get_current_URL());
$file_path = str_repeat('../', $url_depth) . "data/techs.json";

$resultat = file_put_contents($file_path, $json_data);

if ($resultat) {
	$response["success"] = true;
	$response["message"] = "La technologie $name a bien été $action.";
}

$response_json = json_encode($response);

$_SESSION['server_response'] = $response_json;
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;
