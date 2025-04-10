<?php

function get_project_full_name(string $formatted_name): string {
	$projects = decode('projects');

	return $projects[$formatted_name]['name'];
}

function get_shown_projects_list(): array {
	$projects = decode('projects');
	$project_list = array();
	foreach ($projects as $project_id => $project) {
		extract($project);
		
		if ($to_show) {
			$project_list[$project_id] = $project;
		}
	}

	return $project_list;
}

function get_hidden_projects_list(): array {
	$projects = decode('projects');
	$project_list = array();
	foreach ($projects as $project_id => $project) {
		extract($project);

		if (!$to_show) {
			$project_list[$project_id] = $project;
		}
	}
	return $project_list;
}

function get_project_list(): array {
	$projects = decode('projects');
	return $projects;
}

function does_project_exist(string $project_name): bool {
	$projects = decode('projects');

	if (array_key_exists($project_name, $projects)) {
		return true;
	}

	return false;
}

function sort_in_radio(array $elements, string $prefix): string {
	$structure = "";

	foreach ($elements as $id => $element) {
		extract($element);

		$html_id = $prefix . "-" .$id;

		$structure .= "
		<span>
			<label for='$html_id'>$name</label>
			<input type='radio' id='$html_id' value='$id' name='project' class='input_radio a-bc a-ac' required>
		</span>
		";
	}

	return $structure;
}

function sort_in_option(array $items, bool $has_title = true): string {
	$structure = "";
	if($has_title) {
		foreach ($items as $category => $elements) {
			$structure .= "<optgroup label='$category'>";

			foreach ($elements as $formatted_competence => $competence) {
				$structure .= "<option class='aux-bg-hv' value='$formatted_competence'>$competence</option> ";
			}

			$structure .= "</optgroup>";
		}
	} else {
		foreach ($items as $id => $element) {
			extract($element); //? $id, $name

			$structure .= "<option class='aux-bg-hv' value='$id'>$name</option>";
		}
	}
	
	return $structure;
}

function move_image(array $image, string $repository, string $image_name): void {
	$extension = '.png';
	$image_tmp = $image['tmp_name'];

	$url_depth = get_URL_depth(get_current_URL());
	$image_path = str_repeat('../', $url_depth) . "medias/images/" . $repository . "/" . $image_name . $extension;
	
	move_uploaded_file($image_tmp, $image_path);
}

function move_multiple_images(string $image_tmp, string $repository, string $image_name): void {
	$extension = '.png';

	$url_depth = get_URL_depth(get_current_URL());
	$image_path = str_repeat('../', $url_depth) . "medias/images/" . $repository . "/" . $image_name . $extension;
	
	move_uploaded_file($image_tmp, $image_path);
}

function get_competence_link(string $formatted_competence, string $competence): string {
	$color = get_palette_colors();
	return "https://img.shields.io/badge/$competence-%23$color[0]?style=for-the-badge&logo=$formatted_competence&logoColor=$color[1]";
}
