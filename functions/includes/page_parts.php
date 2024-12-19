<?php

function display_html_head(string $page_title, string $body_class = ''):string {
	$palette = get_palette_id();

	return "
	<!DOCTYPE html>
	<html lang='fr' class='bg-bg'>
	<head>
		<meta charset='UTF-8'>
		<meta name='viewport' content='width=device-width, initial-scale=1.0'>

		<meta name='robots' content='index'>
		<meta name='description' content='Portfolio de Romain Gérard, développeur web spécialisé en HTML, CSS, JavaScript, PHP, et MySQL. Diplômé après 3 ans en Université de Rouen, en Normandie, avec une expertise en développement de sites internet et applications web.'>
		<meta name='author' content='Romain GERARD'>

		<link rel='shortcut icon' href='" . get_images_folder() . "logo/$palette/favicon.ico' type='image/x-icon'>
		<link rel='stylesheet' href='" . get_site_root() . "style/style.css?v=" . time() . "'>
		<script src='" . get_script_folder() . "functions.js'></script>
		<script src='" . get_script_folder() . "script.js'></script>
		<title>$page_title - Romain GERARD</title>
	</head>
	<body class='$body_class'>
	";
}

function display_header():string {
	$palette = get_palette_id();

	return "
	<header class='bottom-border aux-bc'>
		<nav>
			<a href='" . get_site_root() . "'>
				<img src='" . get_images_folder() . "logo/$palette/logo_256.png' id='main-logo' alt=''>
			</a>
			<ul class='desktop-only'>
				<li>
					<a href='" . get_site_root() . "'>
						Accueil
						<span class='line a-bg'></span>
					</a>
				</li>
				<li>
					<a href='" . get_site_root() . "#competences-section'>
						Compétences
						<span class='line a-bg'></span>
					</a>
				</li>
				<li>
					<a href='" . get_site_root() . "#projects-section'>
						Projets
						<span class='line a-bg'></span>
					</a>
				</li>
				<li>
					<a href='" . get_site_root() . "#experiences-section'>
						Parcours
						<span class='line a-bg'></span>
					</a>
				</li>
				<li>
					<a href='" . get_site_root() . "#contact-section'>
						Contact
						<span class='line a-bg'></span>
					</a>
				</li>
			</ul>
		</nav>
	</header>
	";
}

function display_aboutme():string {

	$aboutme_json = decode('aboutme');

	$palette_id = get_palette_id();

	$basic_lines = $aboutme_json['simple-content'];
	$total_basic_lines = count($basic_lines); 
	$basic_content = "";

	$complex_lines = $aboutme_json['complex-content'];
	$complex_content = "";

	$current_index = 0;

	foreach($basic_lines as $basic_line) {
		$basic_content .= $basic_line;
		$current_index++;
		if($current_index < $total_basic_lines)
			$basic_content .= str_repeat("<br>", 2);
	}

	foreach($complex_lines as $complex_line) {
		extract($complex_line);

		$complex_content .= "<span class='double'>";
			$complex_content .= "<span class='subtitle underlined'>$title</span>";
			$complex_content .= "<span>";

			foreach($lines as $line_array) {
				extract($line_array);
				$span_class = ($has_images) ? "content-with-image" : "";
				if($has_images) {
					foreach($images_links as $images_link) {
						$image_path = (str_contains($images_link, 'http')) ? "<img src='$images_link' alt=''>" : "<img src='" . get_images_folder() . "aboutme-images/$images_link' alt=''>";
						$line = preg_replace('/#/', $image_path, $line, 1);
					}
				}

				if($has_links) {
					foreach($links as $link) {
						$pattern = '/\*(.*?)\*/';
						$is_local = true;
						if(str_contains($link, 'http'))
							$is_local = false;
						
						if(preg_match($pattern, $line, $words))
							$placeholder = $words[1];

						$direct_link = ($is_local) ? get_files_folder() . $link : $link;

						$line = preg_replace($pattern, "<a href='$direct_link' target='_blank' class='underlined'>$placeholder</a>", $line, 1);
					}
				}

				$complex_content .= "<span class='$span_class'>$line </span>";
			}
			$complex_content .= "</span>";
		$complex_content .= "</span>";
	}

	return "
	<section class='aboutme-section bottom-border aux-bc' id='aboutme-section'>
		<span>
			<span class='side'>
				<span class='rotated-m90'>JUNIOR WEB DEVELOPER</span>
				<span class='line a-bg'>&nbsp</span>
			</span>
			<span class='main-content'>
				<h1 class='title'>Romain GERARD</h1>
				<span class='written-content'>
					<span>
						$basic_content
					</span>
					$complex_content
				</span>
				<span class='small italic desktop-only'>
					Romain GERARD
				</span>
			</span>
			<span class='side desktop-only'>
				<span class='line a-bg'>&nbsp</span>
				<span class='rotated-p90'>JUNIOR WEB DEVELOPER</span>
			</span>
		</span>
	</section>
	";
	/* <span class='aboutme-footer'>
	<a href='" . get_files_folder() . "$palette_id/CV_FR_Romain-GERARD.pdf' id='cv-file'target='_blank' class='button button-xl'>Mon CV</a>
	</span> */
}

function display_competences():string {
	$categories = decode('competences');

	$competence_text = "";
	foreach($categories as $category_name => $category) {
		$competence_text .= "
		<span class='category'>
			<span class='category-title'>$category_name</span>
			<span class='categorised-competences'>
		";

		foreach($category as $formatted_competence => $competence) {
			$competence_link = get_competence_link($formatted_competence, $competence);

			$competence_text .= "
				<img class='competence' src='$competence_link' alt='$competence'>
			";
		}

		$competence_text .= "
			</span>
		</span>
		";
	}

	return "
	<section class='competences-section' id='competences-section'>
		<span class='section-title'>
			<h2 class='title'>Mes compétences</h2>
			<span class='v-line a-bg'>&nbsp</span>
		</span>
		<span class='competences'>
			$competence_text
		</span>
	</section>
	";
}

function display_projects():string {
	$projects = get_shown_projects_list();
	$project_list = array_values($projects);

	usort($project_list, function ($a, $b) {
		$date_a = DateTime::createFromFormat('d/m/Y', $a['date']);
		$date_b = DateTime::createFromFormat('d/m/Y', $b['date']);
		
		return $date_b <=> $date_a;
	});

	$structure = "
	<section class='projects-section' id='projects-section'>
		<span class='section-title'>
			<h2 class='title'>Mes réalisations</h2>
			<span class='v-line a-bg'>&nbsp</span>
		</span>
		<span class='projects'>";
		
		for ($i = 0; $i < count($project_list); $i += 2) {
			$structure .= "<span class='project-line'>";
		
			for ($j = 0; $j < 2 && ($i + $j) < count($project_list); $j++) {
				extract($project_list[$i + $j]);

				$link = get_formatted_name($name);
				$position = ($j == 0) ? "first" : "last";
				$project_tech = "";

				foreach($important_techs as $tech)
					$project_tech .= "<span class='tech a-bc'>$tech</span>";

				$structure .= "
				<span class='project $position $name'>
					<img src='" . get_projects_thumbnails_folder() . "$thumbnail_url.png' alt='Projet: $name'>
					<span class='project-infos'>
						<span class='tech-used'>
							$project_tech
						</span>
						<span class='project-text'>
							<h3 class='project-title'>$name</h3>
							<span class='project-description small'>$synopsis</span>
						</span>
						<a href='" . get_site_root() . "projects?name=$link' class='button'>Découvrir</a>
					</span>
				</span>
				";
			}
		
			$structure .= "</span>";
		}			

	$structure .= "
		</span>
	</section>
	";

	return $structure;
}

function display_work_exp():string {
	$work_experiences = decode('work_experiences');

	$structure = "
	<span class='work-exp'>
		<span class='section-title'>
			<h2 class='title'>Mes expériences professionnelles</h2>
			<span class='v-line a-bg'>&nbsp</span>
		</span>
		<span class='work-experiences'>";

	foreach($work_experiences as $work_experience) {
		extract($work_experience);

		$structure .= "
		<span class='work-experience'>
			<span class='work-experience-details bold'>
				<span class='work-experience-date'>$date</span>
				<span class='work-experience-hashtag'>#</span>
				<span class='work-experience-name'>$name</span>
			</span>
			<span class='work-experience-job italic'>$company_name</span>
			<span class='work-experience-state italic a-fc'>($status)</span>
			<span class='work-experience-description small italic'>";
		
		foreach($descriptions as $description) {
			extract($description);

			$tabs = str_repeat("&emsp;", $tabulations);
			$optional_class = ($tabulations > 1) ? "a-fc" : "";

			$structure .= "
			<span class='work-experience-line $optional_class'>
				$tabs> $line
			</span>
			";
		}
		
		$structure .= "</span>
		</span>";
	}

	$structure .= "</span>
	</span>";

	return $structure;
}

function display_education():string {
	$educations = decode('educations');

	$structure = "
	<span class='scholar'>
		<span class='section-title'>
			<h2 class='title'>Mes formations</h2>
			<span class='v-line a-bg'>&nbsp</span>
		</span>
		<span class='scholarships'>";

	foreach($educations as $education) {
		extract($education);

		$structure .= "
		<span class='scholarship'>
			<span class='scholar-details bold'>
				<span class='scholar-name'>$name</span>
				<span class='scholar-hashtag'>#</span>
				<span class='scholar-date'>$date</span>
			</span>";
		if ($specialty)
			$structure .= "<span class='scholar-speciality italic'>$specialty</span>";
		if ($major)
			$structure .= "<span class='scholar-major italic a-fc'>$major</span>";
		
			$structure .= "<span class='scholar-location'>$location</span>
		</span>
		";
	}

	$structure .= "
		</span>
	</span>";

	return $structure;
}

function display_experiences():string {

	$structure = "<section class='experiences-section' id='experiences-section'>";
	$structure .= display_work_exp();
	$structure .= display_education();
	$structure .= "</section>";

	return $structure;
}

function display_contact():string {
	
	$contact_json = decode('contact');

	$contact_icons = $contact_json['contact-icon'];
	$social_icons = "";

	$contact_texts = $contact_json['contact-text'];
	$social_texts = "";

	$palette = get_palette_id();

	$icon_counter = 1;

	foreach($contact_icons as $contact_icon) {
		extract($contact_icon);

		switch($icon_counter) {
			case 1:
				$social_icons .= "
					<span class='w3'>
				";
				break;
			case 4:
				$social_icons .= "
					</span>
					<span class='w2'>
				";
				break;
			case 6:
				$social_icons .= "
					</span>
					<span class='w1'>
				";
				break;
		}

		$social_icons .= "<a class='img' target='_blank' href='$link'><img src='" . get_images_folder() . "contact-logos/$palette/$image' class='contact-logo' alt=''></a>";
	
		$icon_counter++;
	}
	$social_icons .= "</span>";

	foreach($contact_texts as $contact_text) {
		extract($contact_text);
		$social_texts .= "<a href='$link' class='italic underlined text'>$text</a>";
	}

	return "
	<section class='contact-section' id='contact-section'>
		<span class='section-title'>
			<h2 class='title'>Une idée ? Venez en discuter !</h2>
			<span class='v-line a-bg'>&nbsp</span>
		</span>
		<span class='socials'>
			<span class='socials-icons'>
				$social_icons
			</span>
			$social_texts
		</span>
	</section>
	";
}

function display_single_project(string $project_name):string {
	$projects = decode('projects');
	extract($projects[$project_name]);

	$project_tech = "";
	foreach($tech_used as $tech)
		$project_tech .= "<span class='tech a-bc'>$tech</span>";

	$description_lines = explode('. ', $description);
	$description = "";
	foreach($description_lines as $description_line)
		$description .= "<span>$description_line.</span>";

	$structure = "
	<section class='project-showcase'>
		<span class='side desktop-only'>
			<span class='rotated-m90'>$name</span>
			<span class='line a-bg'>&nbsp</span>
		</span>
		<span class='side mobile-only'>
			<span class='rotated-m90 small'>Romain GERARD</span>
			<span class='line a-bg'>&nbsp</span>
		</span>
		<span class='main-content'>
			<span class='project-presentation'>
				<span class='project-infos'>
					<span class='bold'>
						$name
					</span>
					<span class='small italic'>
						$synopsis
					</span>
				</span>
				<span class='project-details'>
					<img src='" . get_projects_illustrations_folder() . "$image_url.png'>
					<span class='project-overall'>
						<span class='tech-used'>
							$project_tech
						</span>
						<span class='project-description'>
							$description
						</span>
						<span class='project-details-footer'>
							<a href='$link' target='_blank' class='button button-l'>Découvrir</a>
							<span class='small'>$date</span>
						</span>
					</span>
				</span>
			</span>
			<span class='project-footer'>
				<span class='small italic desktop-only'>Romain GERARD</span>
				<a href='" . get_site_root() . "' class='underlined'>Retour à l'index</a>
			</span>
		</span>
		<span class='side desktop-only'>
			<span class='line a-bg'>&nbsp</span>
			<span class='rotated-p90'>$name</span>
		</span>
	</section>
	";

	return $structure;
}

function display_login_form():string {
	$error_message = (isset($_GET['error'])) ? "La combinaison Username/Password est erronée" : "";

	return "
	<form action='" . get_site_root() . "functions/login.php' method='POST' class='admin-login'>
		<span class='column'>
			<label for='username'>Username</label>
			<input type='text' id='username' name='username' placeholder='Username' required>
		</span>
		<span class='column'>
			<label for='password'>Password</label>
			<input type='password' id='password' name='password' placeholder='********' required>
		</span>
		<span class='row form-footer'>
			<span class='back-arrow small underlined'><a href='" . get_site_root() . "'>⇐ Go back</a></span>
			<input type='submit' class='button button-md' value='Login'>
		</span>
	</form>
	<span class='error-message small a-fc italic'>$error_message</span>
	";
}

function display_admin_structure():string {

	$structure = "<section class='admin-panel'>";
		$structure .= "<span class='left-side'>";
			$structure .= display_panel_title();
			$structure .= display_primary_functions();
			$structure .= display_secondary_functions();
		$structure .= "</span>";
		$structure .= "<span class='right-side'>";
			$structure .= display_functions_panels();
		$structure .= "</span>";
	$structure .= "</section>";
	if(isset($_SESSION['server_response'])) {
		$server_response = json_decode($_SESSION['server_response'], JSON_PRETTY_PRINT);
		$structure .= display_popup($server_response['success'], $server_response['message']);
		unset($_SESSION['server_response']);
	}

	return $structure;
}

function display_panel_title():string {
	$structure = "<h1 class='admin-title aux-bg'><a href='" . get_site_root() . "'>Panel Admin</a></h1>";

	return $structure;
}

function display_primary_functions():string {
	$structure = "<span class='admin-primary-functions'>";

		$structure .= "<span class='project-category'>";
			$structure .= "<h2 class='underlined cat-title'>About me</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-simple-content'		>Ajouter un contenu écrit</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-complex-content'		>Ajouter un sous-titre</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-simple-content'	>Supprimer un contenu écrit</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-complex-content'	>Supprimer un sous-titre</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='project-category'>";
			$structure .= "<h2 class='underlined cat-title'>Compétences</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-competence'		>Ajouter une compétence</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-competence'	>Supprimer une compétence</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='project-category'>";
			$structure .= "<h2 class='underlined cat-title'>Projets</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='create-project'	>Ajouter un projet</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='update-project'	>Update un projet</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='show-project'	>Montrer un projet</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='hide-project'	>Cacher un projet</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-project'	>Supprimer un projet</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='project-category'>";
			$structure .= "<h2 class='underlined cat-title'>Expériences pro</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-work-exp'	>Ajouter une expérience pro</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-work-exp'	>Supprimer une expérience pro</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='project-category'>";
			$structure .= "<h2 class='underlined cat-title'>Formations</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-formation'	>Ajouter une formation</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-formation'>Supprimer une formation</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='project-category'>";
			$structure .= "<h2 class='underlined cat-title'>Contact</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-contact-icon'	>Ajouter une icône de contact</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-contact-text'	>Ajouter un texte de contact</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-contact-icon'	>Supprimer une icône de contact</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-contact-text'	>Supprimer un texte de contact</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		// $structure .= "<span class='project-category'>";
			// $structure .= "<h2 class='underlined cat-title'>Autres</h2>";
			// $structure .= "<span class='functions'>";
				// $structure .= "<h3 class='function-title a-tdc-hv' data-id='update-cv-fr'		>Update CV (FR)</h3>";
				// $structure .= "<h3 class='function-title a-tdc-hv' data-id='update-cv-en'		>Update CV (EN)</h3>";
				// $structure .= "<h3 class='function-title a-tdc-hv' data-id='update-todolist'	>Update la ToDoList</h3>";
			// $structure .= "</span>";
		// $structure .= "</span>";
	$structure .= "</span>";

	return $structure;
}

function display_secondary_functions():string {

	$maintenance_mode = decode('utilities')['maintenance_mode'];
	$maintenance_text = ($maintenance_mode) ? "Désactiver" : "Activer";
	
	$structure = "<span class='admin-secondary-functions'>";
		$structure .= "<a href='https://trello.com/b/MMGrSbhQ/to-do-list' target='_blank'class='function-title'>Accéder à la todo</a>";
		$structure .= "<a href='" . get_admin_panel_folder() . "functions/toggle_maintenance_mode.php' class='function-title'>$maintenance_text le mode maintenance</a>";
	$structure .= "</span>";

	return $structure;
}

function display_functions_panels():string {
	// About me
	$structure = display_add_simple_content_panel();
	$structure .= display_add_complex_content_panel();
	$structure .= display_delete_simple_content_panel();
	$structure .= display_delete_complex_content_panel();

	// Compétences
	$structure .= display_add_competence_panel();
	$structure .= display_delete_competence_panel();

	// Projets
	$structure .= display_create_project_panel();
	$structure .= display_update_project_panel();
	$structure .= display_show_project_panel();
	$structure .= display_hide_project_panel();
	$structure .= display_delete_project_panel();

	// Expériences professionnelles
	$structure .= display_add_work_exp_panel();
	$structure .= display_delete_work_exp_panel();

	// Formations
	$structure .= display_add_formation_panel();
	$structure .= display_delete_formation_panel();

	// Contact
	$structure .= display_add_contact_icon_panel();
	$structure .= display_add_contact_text_panel();
	$structure .= display_delete_contact_icon_panel();
	$structure .= display_delete_contact_text_panel();

	// $structure .= display_update_cv_fr_panel();
	// $structure .= display_update_cv_en_panel();
	// $structure .= display_update_todo_panel();

	return $structure;
}

function display_add_simple_content_panel():string {
	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_aboutme_section.php?action=add-simple' class='hide functions-panel aux-bc' id='add-simple-content'>
			<h4>Ajouter un contenu écrit</h4>
			<span class='double'>
				<label for='simple-text'>Contenu</label>
				<textarea id='simple-text' name='text' placeholder='Bla bla bla...' required></textarea>
			</span>
			<input type='submit' class='button button-md' value='Ajouter'>
		</form>
	";
}

function display_add_complex_content_panel():string {
	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_aboutme_section.php?action=add-complex' enctype='multipart/form-data' class='hide functions-panel aux-bc' id='add-complex-content'>
			<h4>Ajouter un sous-titre</h4>
			<span class='double'>
				<label for='complex-title'>Titre</label>
				<input type='text' id='complex-title' name='title' placeholder='Bla bla bla...' required>
			</span>
			<span class='lines' id='lines'>
				<span class='double'>
					<h5>Ligne 1</h5>
					<span class='double'>
						<label for='complex-line-1'>Ligne</label>
						<input type='text' id='complex-line-1' name='line_1' placeholder='Ligne 1' required>
					</span>
					<span class='single'>
						<label for='complex-has-images-1'>Images ?</label>
						<input type='checkbox' id='complex-has-images-1' name='has_images_1' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-images-name-1'>Noms des images (Séparés par #)</label>
						<textarea id='complex-images-name-1' name='images_name_1' placeholder='image1#image2#image3'></textarea>
					</span>
					<span class='double'>
						<label for='complex-images-1'>Images</label>
						<input type='file' name='images_1[]' id='complex-images-1' class='input_file' accept='image/png' multiple>
						<span class='fake-file-inputs italic underlined a-tdc' data-id='complex-images-1'>Aucun fichier sélectionné</span>
					</span>
					<span class='single'>
						<label for='complex-has-links-1'>Liens ?</label>
						<input type='checkbox' id='complex-has-links-1' name='has_links_1' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-links-1'>Liens (Séparés par #)</label>
						<textarea id='complex-links-1' name='links_1' placeholder='fichier.pdf#https://romain-gerard.com'></textarea>
					</span>
				</span>

				<span class='double'>
					<h5>Ligne 2</h5>
					<span class='double'>
						<label for='complex-line-2'>Ligne</label>
						<input type='text' id='complex-line-2' name='line_2' placeholder='Ligne 2'>
					</span>
					<span class='single'>
						<label for='complex-has-images-2'>Images ?</label>
						<input type='checkbox' id='complex-has-images-2' name='has_images_2' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-images-name-2'>Noms des images (Séparés par #)</label>
						<textarea id='complex-images-name-2' name='images_name_2' placeholder='image2#image2#image3'></textarea>
					</span>
					<span class='double'>
						<label for='complex-images-2'>Images</label>
						<input type='file' name='images_2[]' id='complex-images-2' class='input_file' accept='image/png' multiple>
						<span class='fake-file-inputs italic underlined a-tdc' data-id='complex-images-2'>Aucun fichier sélectionné</span>
					</span>
					<span class='single'>
						<label for='complex-has-links-2'>Liens ?</label>
						<input type='checkbox' id='complex-has-links-2' name='has_links_2' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-links-2'>Liens (Séparés par #)</label>
						<textarea id='complex-links-2' name='links_2' placeholder='fichier.pdf#https://romain-gerard.com'></textarea>
					</span>
				</span>

				<span class='double'>
					<h5>Ligne 3</h5>
					<span class='double'>
						<label for='complex-line-3'>Ligne</label>
						<input type='text' id='complex-line-3' name='line_3' placeholder='Ligne 3'>
					</span>
					<span class='single'>
						<label for='complex-has-images-3'>Images ?</label>
						<input type='checkbox' id='complex-has-images-3' name='has_images_3' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-images-name-3'>Noms des images (Séparés par #)</label>
						<textarea id='complex-images-name-3' name='images_name_3' placeholder='image3#image2#image3'></textarea>
					</span>
					<span class='double'>
						<label for='complex-images-3'>Images</label>
						<input type='file' name='images_3[]' id='complex-images-3' class='input_file' accept='image/png' multiple>
						<span class='fake-file-inputs italic underlined a-tdc' data-id='complex-images-3'>Aucun fichier sélectionné</span>
					</span>
					<span class='single'>
						<label for='complex-has-links-3'>Liens ?</label>
						<input type='checkbox' id='complex-has-links-3' name='has_links_3' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-links-3'>Liens (Séparés par #)</label>
						<textarea id='complex-links-3' name='links_3' placeholder='fichier.pdf#https://romain-gerard.com'></textarea>
					</span>
				</span>

				<span class='double'>
					<h5>Ligne 4</h5>
					<span class='double'>
						<label for='complex-line-4'>Ligne</label>
						<input type='text' id='complex-line-4' name='line_4' placeholder='Ligne 4'>
					</span>
					<span class='single'>
						<label for='complex-has-images-4'>Images ?</label>
						<input type='checkbox' id='complex-has-images-4' name='has_images_4' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-images-name-4'>Noms des images (Séparés par #)</label>
						<textarea id='complex-images-name-4' name='images_name_4' placeholder='image4#image2#image3'></textarea>
					</span>
					<span class='double'>
						<label for='complex-images-4'>Images</label>
						<input type='file' name='images_4[]' id='complex-images-4' class='input_file' accept='image/png' multiple>
						<span class='fake-file-inputs italic underlined a-tdc' data-id='complex-images-4'>Aucun fichier sélectionné</span>
					</span>
					<span class='single'>
						<label for='complex-has-links-4'>Liens ?</label>
						<input type='checkbox' id='complex-has-links-4' name='has_links_4' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-links-4'>Liens (Séparés par #)</label>
						<textarea id='complex-links-4' name='links_4' placeholder='fichier.pdf#https://romain-gerard.com'></textarea>
					</span>
				</span>

				<span class='double'>
					<h5>Ligne 5</h5>
					<span class='double'>
						<label for='complex-line-5'>Ligne</label>
						<input type='text' id='complex-line-5' name='line_5' placeholder='Ligne 5'>
					</span>
					<span class='single'>
						<label for='complex-has-images-5'>Images ?</label>
						<input type='checkbox' id='complex-has-images-5' name='has_images_5' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-images-name-5'>Noms des images (Séparés par #)</label>
						<textarea id='complex-images-name-5' name='images_name_5' placeholder='image5#image2#image3'></textarea>
					</span>
					<span class='double'>
						<label for='complex-images-5'>Images</label>
						<input type='file' name='images_5[]' id='complex-images-5' class='input_file' accept='image/png' multiple>
						<span class='fake-file-inputs italic underlined a-tdc' data-id='complex-images-5'>Aucun fichier sélectionné</span>
					</span>
					<span class='single'>
						<label for='complex-has-links-5'>Liens ?</label>
						<input type='checkbox' id='complex-has-links-5' name='has_links_5' class='input_checkbox a-bc a-ac'>
					</span>
					<span class='double'>
						<label for='complex-links-5'>Liens (Séparés par #)</label>
						<textarea id='complex-links-5' name='links_5' placeholder='fichier.pdf#https://romain-gerard.com'></textarea>
					</span>
				</span>
			</span>
			<input type='submit' class='button button-md' value='Ajouter'>
		</form>
	";
}

function display_delete_simple_content_panel():string {
	$simple_contents = decode('aboutme')['simple-content'];
	$simple_contents_count = count($simple_contents);
	$simple_contents_list = "";

	foreach($simple_contents as $id => $simple_content) {
		$simple_contents_list .= "<option class='aux-bg-hv' value='$id'>" . substr($simple_content, 0, 50) . "...</option>";
	}

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_aboutme_section.php?action=delete-simple' class='hide functions-panel aux-bc' id='delete-simple-content'>
			<h4>Supprimer un contenu écrit</h4>
			<select class='aux-bc simple_contents_list' name='id' size=$simple_contents_count style='width:100%' required>
				$simple_contents_list
			</select>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_delete_complex_content_panel():string {
	$complex_contents = decode('aboutme')['complex-content'];
	$complex_contents_count = count($complex_contents);
	$complex_contents_list = "";

	foreach($complex_contents as $id => $complex_content) {
		$complex_contents_list .= "<option class='aux-bg-hv' value='$id'>" . $complex_content['title'] . "...</option>";
	}

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_aboutme_section.php?action=delete-complex' class='hide functions-panel aux-bc' id='delete-complex-content'>
			<h4>Supprimer un sous-titre</h4>
			<select class='aux-bc complex_contents_list' name='id' size=$complex_contents_count style='width:100%' required>
				$complex_contents_list
			</select>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_create_project_panel():string {
	$projects = decode('projects');

	$techs = decode('techs')['techs'];
	$tech_count = count($techs);
	$tech_choice = "";

	foreach($techs as $tech)
		$tech_choice .= "<option class='aux-bg-hv' value='$tech'>$tech</option>";

	return "
	<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_project.php?action=add' enctype='multipart/form-data' class='hide functions-panel aux-bc' id='create-project'>
		<h4>Ajouter un projet</h4>	
		<span class='separate'>
			<span class='side'>
				<span class='double'>
					<label for='create-name'>Nom du projet</label>
					<input type='text' id='create-name' name='name' required>
				</span>
				<span class='double'>
					<label for='create-synopsis'>Synopsis</label>
					<textarea id='create-synopsis' name='synopsis' required></textarea>
				</span>
				<span class='double'>
					<label for='create-description'>Description</label>
					<textarea id='create-description' rows='10' name='description' required></textarea>
				</span>
				<span class='double'>
					<label for='create-date'>Date de conception</label>
					<input type='date' id='create-date' name='date' required>
				</span>
				<span class='double'>
					<label for='create-link'>Lien</label>
					<input type='text' id='create-link' name='link' required>
				</span>
				<span class='double'>
					<label for='create-illustration'>Illustration</label>
					<input type='file' name='illustration' id='create-illustration' class='input_file' accept='image/png' required>
					<span class='fake-file-inputs italic underlined a-tdc' data-id='create-illustration'>Aucun fichier sélectionné</span>
				</span>
				<span class='double'>
					<label for='create-thumbnail'>Thumbnail</label>
					<input type='file' name='thumbnail' id='create-thumbnail' class='input_file' accept='image/png' required>
					<span class='fake-file-inputs italic underlined a-tdc' data-id='create-thumbnail'>Aucun fichier sélectionné</span>
				</span>
			</span>
			<span class='side'>
				<span class='double'>
					<label for='create-important-tech'>Techs importantes (2 max)</label>
					<select class='aux-bc checkbox-container' name='important_tech[]' id='create-important-tech' size=$tech_count multiple required>
						$tech_choice
					</select>
				</span>
				<span class='double'>
					<label for='create-tech'>Techs utilisées</label>
					<select class='aux-bc checkbox-container' name='tech[]' id='create-tech' size=$tech_count multiple required>
						$tech_choice
					</select>
				</span>
			</span>
		</span>
		<span>
			<label for='create-local-project'>Le projet est-il local ?</label>
			<input type='checkbox' name='local_project' id='create-local-project' class='input_checkbox a-bc a-ac optional-checkbox'>
		</span>
		<span class='double optional hide'>
			<label for='create-zip-file'>Déposer le zip du projet</label>
			<input type='file' name='zip_file' id='create-zip-file' class='input_file' accept='zip, application/octet-stream, application/zip, application/x-zip, application/x-zip-compressed'>
			<span class='fake-file-inputs italic underlined a-tdc' data-id='create-zip-file'>Aucun fichier sélectionné</span>
		</span>
		<input type='submit' class='button button-md' value='Créer'>
	</form>
	";
}

function display_update_project_panel():string {

	$projects = decode('projects');
	$project_list = get_project_list();
	$project_list = sort_in_radio($project_list, 'update');

	$projects_info = "";
	foreach($projects as $project_id => $project) {
		$projects_info .= display_project_info_panel($project_id, $project);
	}

	if(empty($project_list))
		$project_list = "Aucun projet ne peut être affiché";

	return "
		<form class='hide functions-panel aux-bc' id='update-project'>
			<h4>Update un projet</h4>
			<span class='project_list open-update-panel'>
				$project_list
			</span>
		</form>
		$projects_info
	";
}

function display_project_info_panel(string $project_id, array $project):string {
	extract($project);

	$date = DateTime::createFromFormat('d/m/Y', $date);
    $date = $date->format('Y-m-d');

	$techs = decode('techs')['techs'];
	$tech_count = count($techs);
	$important_tech_choice = $tech_choice = "";

	foreach($techs as $tech) {
		$is_used = (in_array($tech, $tech_used)) ? "selected" : "";
		$is_important = (in_array($tech, $important_techs)) ? "selected" : "";

		$tech_choice .= "<option class='aux-bg-hv' value='$tech' $is_used>$tech</option>";

		$important_tech_choice .= "<option class='aux-bg-hv' value='$tech' $is_important>$tech</option>";
	}

	return "
	<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_project.php?action=update' data-id='update-$project_id' class='hide functions-panel aux-bc secondary-functions-panel aux-bc project-infos'>
		<span class='double'>
			<label for='update-name'>Nom du projet</label>
			<input type='text' id='update-name' name='name' value='$name' required>
		</span>
		<span class='double'>
			<label for='update-synopsis'>Synopsis</label>
			<textarea id='update-synopsis' name='synopsis' required>$synopsis</textarea>
		</span>
		<span class='double'>
			<label for='update-description'>Description</label>
			<textarea id='update-description' rows='10' name='description' required>$description</textarea>
		</span>
		<span class='double'>
			<label for='update-date'>Date de conception</label>
			<input type='date' id='update-date' name='date' value='$date' required>
		</span>
		<span class='double'>
			<label for='update-link'>Lien</label>
			<input type='text' id='update-link' name='link' value='$link' required>
		</span>
		<span class='double'>
			<label for='update-important-tech'>Techs importantes (2 max)</label>
			<select class='aux-bc checkbox-container' name='important_tech[]' id='update-important-tech' size=$tech_count multiple required>
				$important_tech_choice
			</select>
		</span>
		<span class='double'>
			<label for='update-tech'>Techs utilisées</label>
			<select class='aux-bc checkbox-container' name='tech[]' id='update-tech' size=$tech_count multiple required>
				$tech_choice
			</select>
		</span>
		<input type='hidden' name='project_id' value='$project_id'>
		<input type='submit' class='button button-md' value='Update'>
	</form>
	";
}

function display_show_project_panel():string {

	$project_list = get_hidden_projects_list();
	$project_list = sort_in_radio($project_list, 'show');

	if(empty($project_list))
		$project_list = "Aucun projet ne peut être affiché";

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_project.php?action=show' class='hide functions-panel aux-bc' id='show-project'>
			<h4>Montrer un projet</h4>
			<span class='project_list'>
				$project_list
			</span>
			<input type='submit' class='button button-md' value='Montrer'>
		</form>
	";
}

function display_hide_project_panel():string {

	$project_list = get_shown_projects_list();
	$project_list = sort_in_radio($project_list, 'hide');

	if(empty($project_list))
		$project_list = "Aucun projet ne peut être affiché";

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_project.php?action=hide' class='hide functions-panel aux-bc' id='hide-project'>
			<h4>Cacher un projet</h4>
			<span class='project_list'>
				$project_list
			</span>
			<input type='submit' class='button button-md' value='Cacher'>
		</form>
	";
}

function display_delete_project_panel():string {

	$project_list = get_project_list();
	$project_count = count($project_list);
	$project_list = sort_in_option($project_list);

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_project.php?action=delete' class='hide functions-panel aux-bc' id='delete-project'>
			<h4>Supprimer un projet</h4>
			<select class='aux-bc project_list' name='project' size=$project_count required>
				$project_list
			</select>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_add_competence_panel():string {
	$competences = decode('competences');

	$category_count = count($competences);
	$category_text = "";
	foreach($competences as $category => $competence) {
		$category_text .= "
			<option class='aux-bg-hv' value='$category'>$category</option>
		";
	}
	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_competence.php?action=add' class='hide functions-panel aux-bc' id='add-competence'>
			<h4>Ajouter une compétence</h4>
			<span class='double'>
				<label for='competence-category'>Catégorie</label>
				<select class='aux-bc' id='competence-category' name='category' size=$category_count required>
					$category_text
				</select>
			</span>
			<span class='double'>
				<label for='competence-name'>Compétence</label>
				<input type='text' id='competence-name' name='name' placeholder='C#' required>
			</span>
			<span class='double'>
				<label for='competence-formatted-name'>Nom ShieldIO</label>
				<input type='text' id='competence-formatted-name' name='formatted_name' placeholder='C%23' required>
			</span>
			<a href='https://shields.io/' target='_blank' class='small underlined'>Références ShieldIO</a>
			<input type='submit' class='button button-md' value='Ajouter'>
		</form>
	";
}

function display_delete_competence_panel():string {

	$competences = decode('competences');
	$competences_list = sort_competences_in_option($competences);

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_competence.php?action=delete' class='hide functions-panel aux-bc' id='delete-competence'>
			<h4>Supprimer une compétences</h4>
			<select class='aux-bc competence_list' name='competence' size=10 style='width:100%' required>
				$competences_list
			</select>
			<input type='hidden' name='category' id='category'>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_add_work_exp_panel():string {
	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_work_exp.php?action=add' class='hide functions-panel aux-bc' id='add-work-exp'>
			<h4>Ajouter une expérience professionnelle</h4>
			<span class='double'>
				<label for='work-exp-name'>Nom du poste</label>
				<input type='text' id='work-exp-name' name='name' placeholder='Dév. jeux-vidéos' required>
			</span>
			<span class='double'>
				<label for='work-exp-date'>Dates</label>
				<input type='text' id='work-exp-date' name='date' placeholder='Nov. 2023 - Feb. 2024' required>
			</span>
			<span class='double'>
				<label for='work-exp-company-name'>Entreprise (ou Groupe)</label>
				<input type='text' id='work-exp-company-name' name='company_name' placeholder='Monarchy Mayhem' required>
			</span>
			<span class='double'>
				<label for='work-exp-status'>Type de contrat</label>
				<input type='text' id='work-exp-status' name='status' placeholder='Stage, Projet Professionnel' required>
			</span>
			<span class='double'>
				<label for='work-exp-description'>Description</label>
				<textarea id='work-exp-description' name='description' placeholder='Blabla1-Blabla2' required></textarea>
			</span>
			<input type='submit' class='button button-md' value='Ajouter'>
		</form>
	";
}

function display_delete_work_exp_panel():string {

	$work_experiences = decode('work_experiences');
	$work_experiences_count = count($work_experiences);
	$work_experiences_list = sort_in_option($work_experiences);

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_work_exp.php?action=delete' class='hide functions-panel aux-bc' id='delete-work-exp'>
			<h4>Supprimer une expérience professionnelle</h4>
			<select class='aux-bc work_experiences_list' name='work_experience' size=$work_experiences_count style='width:100%' required>
				$work_experiences_list
			</select>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_add_formation_panel():string {
	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_formation.php?action=add' class='hide functions-panel aux-bc' id='add-formation'>
			<h4>Ajouter une formation</h4>
			<span class='double'>
				<label for='formation-name'>Nom de la formation</label>
				<input type='text' id='formation-name' name='name' placeholder='BUT, DUT' required>
			</span>
			<span class='double'>
				<label for='formation-date'>Dates</label>
				<input type='text' id='formation-date' name='date' placeholder='2023 - 2024' required>
			</span>
			<span class='double'>
				<label for='formation-specialty'>Filière</label>
				<input type='text' id='formation-specialty' name='specialty' placeholder='Métiers du Multimédia et de l'Internet'>
			</span>
			<span class='double'>
				<label for='formation-major'>Spécialité</label>
				<input type='text' id='formation-major' name='major' placeholder='Spécialité Développement Web'>
			</span>
			<span class='double'>
				<label for='formation-location'>Établissement</label>
				<input type='text' id='formation-location' name='location' placeholder='Université de Rouen Normandie' required>
			</span>
			<input type='submit' class='button button-md' value='Ajouter'>
		</form>
	";
}

function display_delete_formation_panel():string {

	$educations = decode('educations');
	$educations_count = count($educations);
	$educations_list = sort_in_option($educations);

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_formation.php?action=delete' class='hide functions-panel aux-bc' id='delete-formation'>
			<h4>Supprimer une formation</h4>
			<select class='aux-bc scholarships_list' name='scholarship' size=$educations_count style='width:100%' required>
				$educations_list
			</select>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_add_contact_icon_panel():string {
	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_contact_section.php?action=add-icon' enctype='multipart/form-data' class='hide functions-panel aux-bc' id='add-contact-icon'>
			<h4>Ajouter une icône de contact</h4>
			<span class='double'>
				<label for='contact-icon-link'>Lien de redirection</label>
				<input type='text' id='contact-icon-link' name='link' placeholder='https://google.com ou fichier.pdf' required>
			</span>
			<span class='double'>
				<label for='contact-icon-name'>Nom de l'Icône</label>
				<input type='text' id='contact-icon-name' name='name' placeholder='icone' required>
			</span>
			<span class='double'>
				<label for='contact-icon-image'>Icône</label>
				<input type='file' name='image' id='contact-icon-image' class='input_file' accept='image/png' required>
				<span class='fake-file-inputs italic underlined a-tdc' data-id='contact-icon-image'>Aucun fichier sélectionné</span>
			</span>
			<input type='submit' class='button button-md' value='Ajouter'>
		</form>
	";
}

function display_add_contact_text_panel():string {
	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_contact_section.php?action=add-text' class='hide functions-panel aux-bc' id='add-contact-text'>
			<h4>Ajouter un texte de contact</h4>
			<span class='double'>
				<label for='contact-text-link'>Lien de redirection</label>
				<input type='text' id='contact-text-link' name='link' placeholder='https://google.com ou fichier.pdf' required>
			</span>
			<span class='double'>
				<label for='contact-text-text'>Lien de redirection</label>
				<input type='text' id='contact-text-text' name='text' placeholder='+33 7 77 70 26 99' required>
			</span>
			<input type='submit' class='button button-md' value='Ajouter'>
		</form>
	";
}

function display_delete_contact_icon_panel():string {
	$contact_icons = decode('contact')['contact-icon'];
	$contact_icons_count = count($contact_icons);
	$contact_icons_list = "";

	foreach($contact_icons as $id => $contact_icons) {
		extract($contact_icons);
		$contact_icons_list .= "<option class='aux-bg-hv' value='$link'>$link</option>";
	}

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_contact_section.php?action=delete-icon'class='hide functions-panel aux-bc' id='delete-contact-icon'>
			<h4>Supprimer une icône de contact</h4>
			<select class='aux-bc contact_icons_list' name='link' size=$contact_icons_count style='width:100%' required>
				$contact_icons_list
			</select>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_delete_contact_text_panel():string {
	$contact_texts = decode('contact')['contact-text'];
	$contact_texts_count = count($contact_texts);
	$contact_texts_list = "";

	foreach($contact_texts as $id => $contact_text) {
		extract($contact_text);
		$contact_texts_list .= "<option class='aux-bg-hv' value='$link'>$link</option>";
	}

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_contact_section.php?action=delete-text'class='hide functions-panel aux-bc' id='delete-contact-text'>
			<h4>Supprimer un texte de contact</h4>
			<select class='aux-bc contact_texts_list' name='link' size=$contact_texts_count style='width:100%' required>
				$contact_texts_list
			</select>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_update_cv_fr_panel():string {
	return "
	<form method='POST' action='" . get_admin_panel_folder() . "functions/update_cv.php?lang=fr' enctype='multipart/form-data' class='hide functions-panel aux-bc' id='update-cv-fr'>
		<h4 class='panel-title'>Update CV (FR)</h4>
		<span>
			<label for='cv-input-fr'>Insérez le nouveau CV <b class='a-fc'>*</b></label>
			<input type='file' name='cv_input' id='cv-input-fr' class='input_file' accept='application/pdf' required>
			<span class='fake-file-inputs italic underlined a-tdc' data-id='cv-input-fr'>Aucun fichier sélectionné</span>
		</span>
		<iframe title='CV Actuel' width='100%' src='" . get_files_folder() . "CV_FR_Romain-GERARD.pdf'></iframe>
		<input type='submit' class='button button-md' value='Update'>
	</form>
	";
}

function display_update_cv_en_panel():string {
	return "
	<form method='POST' action='" . get_admin_panel_folder() . "functions/update_cv.php?lang=en' enctype='multipart/form-data' class='hide functions-panel aux-bc' id='update-cv-en'>
		<h4 class='panel-title'>Update CV (EN)</h4>
		<span>
			<label for='cv-input-en'>Insérez le nouveau CV <b class='a-fc'>*</b></label>
			<input type='file' name='cv_input' id='cv-input-en' class='input_file' accept='application/pdf' required>
			<span class='fake-file-inputs italic underlined a-tdc' data-id='cv-input-en'>Aucun fichier sélectionné</span>
		</span>
		<iframe title='CV Actuel' width='100%' src='" . get_files_folder() . "CV_EN_Romain-GERARD.pdf'></iframe>
		<input type='submit' class='button button-md' value='Update'>
	</form>
	";
}

function display_update_todo_panel():string {
	$todolist_path = get_site_root() . "medias/files/todo.txt";
	$todolist_file = file_get_contents($todolist_path);

	return "
	<form method='POST' action='" . get_admin_panel_folder() . "functions/update_todolist.php' class='hide functions-panel aux-bc' id='update-todolist'>
		<h4 class='panel-title'>Update la ToDoList</h4>
		<textarea name='todolist_text' id='todolist-text' rows='10' cols='50' required>$todolist_file</textarea>
		<input type='submit' class='button button-md' value='Update'>
	</form>
	";
}

function display_popup(bool $success, string $message):string {
	$success_class = ($success) ? "success" : "error";

	return "
	<span class='popup aux-bc out-of-frame $success_class'>
		$message
	</span>
	";
}

function display_error_structure(string $error_type):string {
	$error_codes = array(
		"fr" => array(
			"403" => array(
				"page_title" 	=> "403",
				"main_message" 	=> "L’accès n’est pas autorisé.",
				"sub_message" 	=> "On dirait que tu t’es perdu...",
				"image_link"     => "https://i.ibb.co/4FZVV2g/cat.gif",
				"home_link_text"     => "Retrouve la voie...",
				"show_link"     => true
			),
			"404" => array(
				"page_title" 	=> "404",
				"main_message" 	=> "La page n'existe pas.",
				"sub_message" 	=> "On dirait que tu t’es perdu...",
				"image_link"     => "https://i.ibb.co/4FZVV2g/cat.gif",
				"home_link_text"     => "Retrouve la voie...",
				"show_link"     => true
			),
			"503" => array(
				"page_title" 	=> "503",
				"main_message" 	=> "Ce site est en cours de maintenance.",
				"sub_message" 	=> "Veuillez revenir plus tard !",
				"image_link"     => "https://media.discordapp.net/attachments/1157392152100343849/1299429559598583838/image1.png?ex=671d2b95&is=671bda15&hm=17755c69988bdf1aa45f77684a2757c7bbb60330e6bda042bc2388836849fc8d&=&format=webp&quality=lossless&width=445&height=445",
				"home_link_text"     => null,
				"show_link"     => false
			)
		),
		"en" => array(
			"403" => array(
				"page_title"    => "403",
				"main_message"  => "Access is not allowed.",
				"sub_message"   => "It looks like you got lost...",
				"image_link"     => "https://i.ibb.co/4FZVV2g/cat.gif",
				"home_link_text"     => "Find your way back...",
				"show_link"     => true
			),
			"404" => array(
				"page_title"    => "404",
				"main_message"  => "The page does not exist.",
				"sub_message"   => "It looks like you got lost...",
				"image_link"     => "https://i.ibb.co/4FZVV2g/cat.gif",
				"home_link_text"     => "Find your way back...",
				"show_link"     => true
			),
			"503" => array(
				"page_title"    => "503",
				"main_message"  => "This site is under maintenance.",
				"sub_message"   => "Please come back later!",
				"image_link"     => "https://media.discordapp.net/attachments/1157392152100343849/1299429559598583838/image1.png?ex=671d2b95&is=671bda15&hm=17755c69988bdf1aa45f77684a2757c7bbb60330e6bda042bc2388836849fc8d&=&format=webp&quality=lossless&width=445&height=445",
				"home_link_text"     => null,
				"show_link"     => false
			)
		)
	);

	$browser_language = get_browser_language();
	$error_infos = $error_codes[$browser_language][$error_type];
	
	extract($error_infos);

	$home_link = ($show_link) ? "<a href='" . get_site_root() . "' class='underlined'>$home_link_text</a>" : "";

	return "
		<span class='extra-page'>
			<span class='title'>
				<h1>$page_title</h1>
				<span class='line a-bg'>&nbsp</span>
			</span>
			<span class='info-content'>
				<span class='bold'>$main_message</span>
				<span>$sub_message</span>
			</span>
			<img src='$image_link' alt=''>
			$home_link
		</span>
	";
}

function display_footer():string {
	$palette_choice = display_palette_choice();
	return "
		$palette_choice
		<footer class='top-border aux-bc'><span>Romain GERARD <a href='" . get_admin_folder() . "'>©</a> 2024</span></footer>
	";
}

function display_html_footer():string {
	return "</body>
	</html>";
}

function display_palette_choice():string {
	$structure = "<span class='palette-item'>";
	$structure .= "<img class='palette-option palette-trigger' src='" . get_images_folder() . "palette-icons/palette_plus.png'>";
	
	for($i = 0; $i < count(get_active_palettes()); $i++)
		$structure .= "<img class='palette-option palette' src='" . get_images_folder() . "palette-icons/$i.png' data-id='$i'>";
	
	$structure .= "</span>";
	
	return $structure;
}