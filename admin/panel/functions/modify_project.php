<?php

include '../../../functions/functions.php';
session_start();

ob_start();
extract($_POST);

$response = [
	"success" => false,
	"message" => "&#9888; Une erreur est survenue. &#9888;"
];

$projects = decode('projects');
$url_depth = get_URL_depth(get_current_URL());

switch($_GET['action']) {
	case 'add' :
		$project_id = get_formatted_name($name);

		$date = new DateTime($date);
		$date = $date->format('d/m/Y');
		
		move_image($_FILES['illustration'], 'projects/illustrations', $project_id);
		move_image($_FILES['thumbnail'], 'projects/thumbnails', $project_id);
		
		$new_project = array(
			'name' 			  => $name,
			'synopsis'		  => $synopsis,
			'description'	  => $description,
			'date'			  => $date,
			'link'			  => $link,
			'image_url'		  => $project_id,
			'thumbnail_url'	  => $project_id,
			'important_techs' => $important_tech,
			'tech_used' 	  => $tech,
			'to_show'		  => true
		);
		
		$project = $project_id;
		$projects = array($project_id => $new_project) + $projects;
		
		if(isset($_FILES['zip_file'])) {
			if ($_FILES['zip_file']['type'] == 'application/x-zip-compressed'){
				$zip_tmp = $_FILES['zip_file']['tmp_name'];
				$zip_path = str_repeat('../', $url_depth) . "projects/$project_id.zip";
				$file_path = str_repeat('../', $url_depth) . "projects/$project_id/";
		
				move_uploaded_file($zip_tmp, $zip_path);
				$zip = new ZipArchive;
				if ($zip->open($zip_path) === TRUE) {
					$zip->extractTo($file_path);
					$zip->close();
				}
				unlink($zip_path);
			}
			else {
				$response["message"] = "Le fichier de projet n'est pas un fichier ZIP";
				$_SESSION['server_response'] = $response_json;
				header("Location: {$_SERVER['HTTP_REFERER']}");
			}
			$action = 'créé';
		}
		break;

	case 'delete':
		$filename = $projects[$project]['image_url'];
		$thumbnail_path = str_repeat('../', $url_depth) . "medias/images/projects/thumbnails/$filename.png";
		$illustration_path = str_repeat('../', $url_depth) . "medias/images/projects/illustrations/$filename.png";
		
		unlink($thumbnail_path);
		unlink($illustration_path);
		unset($projects[$project]);
		$action = "supprimé";
		break;

	case 'show':
		$projects[$project]['to_show'] = true;
		$action = "activé";
		break;

	case 'hide':
		$projects[$project]['to_show'] = false;
		$action = "désactivé";
		break;

	case 'update':
		$project = $project_id;
		$date = new DateTime($date);
		$date = $date->format('d/m/Y');

		$updated_project = array(
			'name' 			  => $name,
			'synopsis'		  => $synopsis,
			'description'	  => $description,
			'date'			  => $date,
			'link'			  => $link,
			'image_url'		  => $project_id,
			'thumbnail_url'	  => $project_id,
			'important_techs' => $important_tech,
			'tech_used' 	  => $tech,
			'to_show'		  => true
		);
		$projects[$project_id] = $updated_project;
		$action = 'modifié';
		break;
}

$json_data = json_encode($projects, JSON_PRETTY_PRINT);
$file_path = str_repeat('../', $url_depth) . "data/projects.json";
$resultat = file_put_contents($file_path, $json_data);

if($resultat) {
	$response["success"] = true;
	$response["message"] = "Le projet $project a bien été $action.";
}

$response_json = json_encode($response);

$_SESSION['server_response'] = $response_json;
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;