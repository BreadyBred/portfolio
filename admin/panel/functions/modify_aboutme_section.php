<?php

include '../../../functions/functions.php';
session_start();

ob_start();
extract($_POST);

$response = [
	"success" => false,
	"message" => "&#9888; Une erreur est survenue. &#9888;"
];

$aboutme_section = decode('aboutme');

$url_depth = get_URL_depth(get_current_URL());

switch($_GET['action']) {
	case 'add-simple':
		$aboutme_section['simple-content'][] = $text;
		$action = 'ajouté';
		break;
	case 'add-complex':
		$new_entry = array(
			'title' => $title,
			'lines' => array()
		);

		for($i = 1; $i <= 5; $i++) {

			if(empty(${"line_$i"}))
				break;

			$images_url = array();
			$links_url = array();

			// has images
			$has_images = !empty(${"has_images_$i"}) ? true : false;
			if($has_images) {
				$images = explode('#', ${"images_name_$i"});
				for($j = 0; $j < count($images); $j++) {
					$image_name = get_formatted_name($images[$j]);
					move_multiple_images($_FILES["images_$i"]['tmp_name'][$j], 'aboutme-images', $image_name);
					$image_name = $image_name . ".png";
					$images_url[] = $image_name;
				}
			}

			// has links
			$has_links = !empty(${"has_links_$i"}) ? true : false;
			if($has_links) {
				$links = explode('#', ${"links_$i"});
				for($k = 0; $k < count($links); $k++)
					$links_url[] = $links[$k];
			}

			$new_entry['lines'][] = array(
				'line' 			=> ${"line_$i"},
				'has_images' 	=> $has_images,
				'images_links' 	=> $images_url,
				'has_links' 	=> $has_links,
				'links' 		=> $links_url,
			);
		}

		$aboutme_section['complex-content'][] = $new_entry;
		$action = 'ajouté';
		break;
	case 'delete-simple':
		foreach ($aboutme_section['simple-content'] as $key => $entry) {
			if($key == $id) {
				unset($aboutme_section['simple-content'][$key]);
				$aboutme_section['simple-content'] = array_values($aboutme_section['simple-content']);
				break;
			}
		}
		$action = 'supprimé';
		break;
	case 'delete-complex':
		foreach ($aboutme_section['complex-content'] as $key => $entry) {
			if($key == $id) {
				foreach($aboutme_section['complex-content'][$key]['lines'] as $line) {
					foreach($line['images_links'] as $image_link) {
						$icon_path = str_repeat('../', $url_depth) . "medias/images/aboutme-images/$image_link";
						unlink($icon_path);
					}
				}
				unset($aboutme_section['complex-content'][$key]);
				$aboutme_section['complex-content'] = array_values($aboutme_section['complex-content']);
				break;
			}
		}
		$action = 'supprimé';
		break;
}

$json_data = json_encode($aboutme_section, JSON_PRETTY_PRINT);
$file_path = str_repeat('../', $url_depth) . "data/aboutme.json";

$resultat = file_put_contents($file_path, $json_data);

if($resultat) {
	$response["success"] = true;
	$response["message"] = "Le texte a bien été $action.";
}

$response_json = json_encode($response);

$_SESSION['server_response'] = $response_json;
// header("Location: {$_SERVER['HTTP_REFERER']}");
exit;