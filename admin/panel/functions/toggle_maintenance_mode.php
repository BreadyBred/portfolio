<?php

include '../../../functions/functions.php';
session_start();

ob_start();

$response = [
	"success" => false,
	"message" => "&#9888; Une erreur est survenue. &#9888;"
];

$json_data = decode('utilities');

$json_data['maintenance_mode'] = !$json_data['maintenance_mode'];
$action = ($json_data['maintenance_mode']) ? "activé" : "désactivé";

$json_data = json_encode($json_data, JSON_PRETTY_PRINT);

$url_depth = get_URL_depth(get_current_URL());
$file_path = str_repeat('../', $url_depth) . "data/utilities.json";

$resultat = file_put_contents($file_path, $json_data);

if ($resultat) {
	$response["success"] = true;
	$response["message"] = "Le mode maintenance a bien été $action.";
}

$response_json = json_encode($response);

$_SESSION['server_response'] = $response_json;
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;
