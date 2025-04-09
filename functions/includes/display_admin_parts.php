<?php

function display_login_form(): string {
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

function display_admin_structure(): string {
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

	if (isset($_SESSION['server_response'])) {
		$server_response = json_decode($_SESSION['server_response'], JSON_PRETTY_PRINT);
		$structure .= display_popup($server_response['success'], $server_response['message']);
		unset($_SESSION['server_response']);
	}

	return $structure;
}

function display_panel_title(): string {
	$structure = "<h1 class='admin-title aux-bg'><a href='" . get_site_root() . "'>Panel Admin</a></h1>";

	return $structure;
}

function display_primary_functions(): string {
	$structure = "<span class='admin-primary-functions'>";

		$structure .= "<span class='function-category'>";
			$structure .= "<h2 class='underlined cat-title'>Compétences</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-competence'>Ajouter une compétence</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-competence'>Supprimer une compétence</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='function-category'>";
			$structure .= "<h2 class='underlined cat-title'>Techs</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-tech'>Ajouter une technologie</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-tech'>Supprimer une technologie</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='function-category'>";
			$structure .= "<h2 class='underlined cat-title'>Projets</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='create-project'>Ajouter un projet</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='update-project'>Modifier un projet</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='show-project'>Montrer un projet</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='hide-project'>Cacher un projet</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-project'>Supprimer un projet</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='function-category'>";
			$structure .= "<h2 class='underlined cat-title'>Expériences pro</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-work-exp'>Ajouter une expérience pro</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-work-exp'>Supprimer une expérience pro</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='function-category'>";
			$structure .= "<h2 class='underlined cat-title'>Formations</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-formation'>Ajouter une formation</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-formation'>Supprimer une formation</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		$structure .= "<span class='function-category'>";
			$structure .= "<h2 class='underlined cat-title'>Contact</h2>";
			$structure .= "<span class='functions'>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-contact-icon'>Ajouter une icône de contact</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='add-contact-text'>Ajouter un texte de contact</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-contact-icon'>Supprimer une icône de contact</h3>";
				$structure .= "<h3 class='function-title a-tdc-hv' data-id='delete-contact-text'>Supprimer un texte de contact</h3>";
			$structure .= "</span>";
		$structure .= "</span>";

		// $structure .= "<span class='function-category'>";
			// $structure .= "<h2 class='underlined cat-title'>Autres</h2>";
			// $structure .= "<span class='functions'>";
				// $structure .= "<h3 class='function-title a-tdc-hv' data-id='update-cv-fr'	>Update CV (FR)</h3>";
				// $structure .= "<h3 class='function-title a-tdc-hv' data-id='update-cv-en'	>Update CV (EN)</h3>";
				// $structure .= "<h3 class='function-title a-tdc-hv' data-id='update-todolist'	>Update la ToDoList</h3>";
			// $structure .= "</span>";
		// $structure .= "</span>";
	$structure .= "</span>";

	return $structure;
}

function display_secondary_functions(): string {

	$maintenance_mode = decode('utilities')['maintenance_mode'];
	$maintenance_text = ($maintenance_mode) ? "Désactiver" : "Activer";
	
	$structure = "<span class='admin-secondary-functions'>";
		$structure .= "<a href='https://trello.com/b/MMGrSbhQ/to-do-list' target='_blank'class='function-title'>Accéder à la todo</a>";
		$structure .= "<a href='" . get_admin_panel_folder() . "functions/toggle_maintenance_mode.php' class='function-title'>$maintenance_text le mode maintenance</a>";
	$structure .= "</span>";

	return $structure;
}

function display_functions_panels(): string {
	// Compétences
	$structure = display_add_competence_panel();
	$structure .= display_delete_competence_panel();

	// Techs
	$structure .= display_add_tech_panel();
	$structure .= display_delete_tech_panel();

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

function display_create_project_panel(): string {
	$techs = decode('techs')['techs'];
	$tech_count = count($techs);
	$tech_choice = "";

	foreach ($techs as $tech) {
		$tech_choice .= "<option class='aux-bg-hv' value='$tech'>$tech</option>";
	}

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

function display_update_project_panel(): string {
	$projects = decode('projects');
	$project_list = get_project_list();
	$project_list = sort_in_radio($project_list, 'update');

	$projects_info = "";
	foreach ($projects as $project_id => $project) {
		$projects_info .= display_project_info_panel($project_id, $project);
	}

	if (empty($project_list)) {
		$project_list = "Aucun projet ne peut être affiché";
	}

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

function display_project_info_panel(string $project_id, array $project): string {
	extract($project);

	$date = DateTime::createFromFormat('d/m/Y', $date);
    $date = $date->format('Y-m-d');

	$techs = decode('techs')['techs'];
	$tech_count = count($techs);
	$important_tech_choice = $tech_choice = "";

	foreach ($techs as $tech) {
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

function display_show_project_panel(): string {

	$project_list = get_hidden_projects_list();
	$project_list = sort_in_radio($project_list, 'show');

	if (empty($project_list)) {
		$project_list = "Aucun projet ne peut être affiché";
	}

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

function display_hide_project_panel(): string {

	$project_list = get_shown_projects_list();
	$project_list = sort_in_radio($project_list, 'hide');

	if (empty($project_list)) {
		$project_list = "Aucun projet ne peut être affiché";
	}

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

function display_delete_project_panel(): string {

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

function display_add_competence_panel(): string {
	$competences = decode('competences');

	$category_count = count($competences);
	$category_text = "";
	foreach ($competences as $category => $competence) {
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

function display_delete_competence_panel(): string {

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

function display_add_tech_panel(): string {
	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_techs.php?action=add' class='hide functions-panel aux-bc' id='add-tech'>
			<h4>Ajouter une tech</h4>
			<span class='double'>
				<label for='tech-name'>Nom de la technologie</label>
				<input type='text' id='tech-name' name='name' placeholder='Python' required>
			</span>
			<input type='submit' class='button button-md' value='Ajouter'>
		</form>
	";
}

function display_delete_tech_panel(): string {
	$techs = decode('techs');
	$tech_list = sort_competences_in_option($techs);

	return "
		<form method='POST' action='" . get_admin_panel_folder() . "functions/modify_techs.php?action=delete' class='hide functions-panel aux-bc' id='delete-tech'>
			<h4>Supprimer une technologie</h4>
			<select class='aux-bc tech_list' name='name' size=10 style='width:100%' required>
				$tech_list
			</select>
			<input type='hidden' name='category' id='category'>
			<input type='submit' class='button button-md' value='Supprimer'>
		</form>
	";
}

function display_add_work_exp_panel(): string {
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

function display_delete_work_exp_panel(): string {
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

function display_add_formation_panel(): string {
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

function display_delete_formation_panel(): string {
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

function display_add_contact_icon_panel(): string {
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

function display_add_contact_text_panel(): string {
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

function display_delete_contact_icon_panel(): string {
	$contact_icons = decode('contact')['contact-icon'];
	$contact_icons_count = count($contact_icons);
	$contact_icons_list = "";

	foreach ($contact_icons as $id => $contact_icons) {
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

function display_delete_contact_text_panel(): string {
	$contact_texts = decode('contact')['contact-text'];
	$contact_texts_count = count($contact_texts);
	$contact_texts_list = "";

	foreach ($contact_texts as $id => $contact_text) {
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

function display_update_cv_fr_panel(): string {
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

function display_update_cv_en_panel(): string {
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

function display_update_todo_panel(): string {
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

function display_popup(bool $success, string $message): string {
	$success_class = ($success) ? "success" : "error";

	return "
	<span class='popup aux-bc out-of-frame $success_class'>
		$message
	</span>
	";
}