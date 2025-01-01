<?php

include '../../../functions/functions.php';
session_start();

ob_start();
extract($_POST);

$response = [
	"success" => false,
	"message" => "&#9888; Une erreur est survenue. &#9888;"
];

$contact_section = decode('contact');

$url_depth = get_URL_depth(get_current_URL());

switch($_GET['action']) {
	case 'add-icon':
		$name = get_formatted_name($name);
		move_image($_FILES['image'], 'contact-logos', $name);

		$name = (str_contains($name, '.png')) ? $name : "$name.png";

		$new_icon = [
			"link" 	=> $link,
			"image" => $name
		];
		$contact_section['contact-icon'][] = $new_icon;
		$action = 'ajoutée';
		break;

	case 'add-text':
		$new_text = [
			"link" => $link,
			"text" => $text
		];
		$contact_section['contact-text'][] = $new_text;
		$action = 'ajoutée';
		break;

	case 'delete-icon':	case 'delete':
		foreach ($contact_section['contact-icon'] as $key => $entry) {
			if($entry['link'] === $link) {
				$filename = $contact_section['contact-icon'][$key]['image'];
				$icon_path = str_repeat('../', $url_depth) . "medias/images/contact-logos/$filename";
				unlink($icon_path);

				unset($contact_section['contact-icon'][$key]);
				$contact_section['contact-icon'] = array_values($contact_section['contact-icon']);
				break;
			}
		}
		$action = "supprimé";
		break;
	case 'delete-text':
		foreach ($contact_section['contact-text'] as $key => $entry) {
			if($entry['link'] === $link) {
				unset($contact_section['contact-text'][$key]);
				$contact_section['contact-text'] = array_values($contact_section['contact-text']);
				break;
			}
		}
		$action = "supprimé";
		break;
}

$json_data = json_encode($contact_section, JSON_PRETTY_PRINT);
$file_path = str_repeat('../', $url_depth) . "data/contact.json";

$resultat = file_put_contents($file_path, $json_data);

if($resultat) {
	$response["success"] = true;
	$response["message"] = "Le lien a bien été $action.";
}

$response_json = json_encode($response);

$_SESSION['server_response'] = $response_json;
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;