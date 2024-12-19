<?php

include '../../../functions/functions.php';
session_start();

ob_start();

$response = [
	"success" => false,
	"message" => "&#9888; Une erreur est survenue. &#9888;"
];

switch($_GET['lang']) {
	case 'fr':
		$prefix = 'FR';
		break;
	case 'en':
		$prefix = 'EN';
		break;
	default:
		$prefix = '';
		break;
}

$tmp_name = $_FILES['cv_input']['tmp_name'];

$url_depth = get_URL_depth(get_current_URL());
$file_path = str_repeat('../', $url_depth) . "medias/files/CV_${prefix}_Romain-GERARD.pdf";

$resultat = move_uploaded_file($tmp_name, $file_path);

if($resultat) {
	$response["success"] = true;
	$response["message"] = "Le CV a bien été remplacé.";
}

$response_json = json_encode($response);

$_SESSION['server_response'] = $response_json;
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;