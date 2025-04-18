<?php

function display_html_head(string $page_title, string $body_class = ""): string {
	return "
		<!DOCTYPE html>
		<html lang='fr' class='bg-bg'>
		<head>
			<meta charset='UTF-8'>
			<meta name='viewport' content='width=device-width, initial-scale=1.0'>

			<meta name='robots' content='index'>
			<meta name='description' content='Portfolio de Romain Gérard, développeur web spécialisé en HTML, CSS, JavaScript, PHP, et MySQL. Diplômé après 3 ans en Université de Rouen, en Normandie, avec une expertise en développement de sites internet et applications web.'>
			<meta name='author' content='Romain GERARD'>

			<link rel='shortcut icon' href='" . get_images_folder() . "/logo/" . get_palette_id() . "/favicon.ico' type='image/x-icon'>
			<link rel='stylesheet' href='" . get_site_root() . "/style/style.css?v=" . time() . "'>
			<script src='" . get_script_folder() . "/script.js'></script>
			<title>$page_title - Romain GERARD</title>
		</head>
		<body class='$body_class'>
	";
}

function display_header(bool $is_error_page = false): string {
	return "
		<header class='bottom-border aux-bc'>
			<nav>
				<a href='" . get_site_root() . "' aria-label='" . t("Retour à l'accueil", $is_error_page) . "'>
					<img src='" . get_images_folder() . "/logo/" . get_palette_id() . "/logo_256.png' id='main-logo' alt=''>
				</a>
				<ul class='desktop-only'>
					<li>
						<a href='" . get_site_root() . "'>
							" . t("Accueil", $is_error_page) . "
							<span class='line a-bg'></span>
						</a>
					</li>
					<li>
						<a href='" . get_site_root() . "#competences-section'>
							" . t("Compétences", $is_error_page) . "
							<span class='line a-bg'></span>
						</a>
					</li>
					<li>
						<a href='" . get_site_root() . "#projects-section'>
							" . t("Projets", $is_error_page) . "
							<span class='line a-bg'></span>
						</a>
					</li>
					<li>
						<a href='" . get_site_root() . "#experiences-section'>
							" . t("Parcours", $is_error_page) . "
							<span class='line a-bg'></span>
						</a>
					</li>
					<li>
						<a href='" . get_site_root() . "#contact-section'>
							" . t("Contact", $is_error_page) . "
							<span class='line a-bg'></span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	";
}

function display_single_project(string $project_name): string {
	$projects = decode("projects");
	extract($projects[$project_name]); //? $name, $synopsis, $description, $date, $link, $important_techs[], $tech_used[], $to_show

	$project_tech = "";
	foreach ($tech_used as $tech) {
		$project_tech .= "<span class='tech a-bc'>$tech</span>";
	}

	$description_lines = explode(". ", t("$description"));
	$description = "";
	foreach ($description_lines as $description_line) {
		$point = (in_array(substr($description_line, -1), [".", "!", "?"])) ? "" : ".";
		$description .= "<span>{$description_line}{$point}</span>";
	}

	return "
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
						<img src='" . get_projects_illustrations_folder() . "/$image_url.png' alt='$name Illustration'>
						<span class='project-overall'>
							<span class='tech-used'>
								$project_tech
							</span>
							<span class='project-description'>
								$description
							</span>
							<span class='project-details-footer'>
								<a href='$link' target='_blank' class='button button-l'>" . t("Découvrir") . "</a>
								<span class='small'>$date</span>
							</span>
						</span>
					</span>
				</span>
				<span class='project-footer'>
					<span class='small italic desktop-only'>Romain GERARD</span>
					<a href='" . get_site_root() . "' class='underlined'>" . t("Retour à l'index") . "</a>
				</span>
			</span>
			<span class='side desktop-only'>
				<span class='line a-bg'>&nbsp</span>
				<span class='rotated-p90'>$name</span>
			</span>
		</section>";
}

function display_error_structure(string $error_type): string {
	$error_codes = array(
		"fr" => array(
			"403" => array(
				"page_title" => "403",
				"main_message" => "On dirait que tu n'as pas le droit d'être ici",
				"sub_message" => "Larry le malicieux va s'occuper de ton cas",
				"image_link" => "https://i.ibb.co/ZW9Sk14/larry.png",
				"home_link_text"=> "Échappe-toi vite...",
				"show_link" => true,
				"additional_class" => null
			),
			"404" => array(
				"page_title" => "404",
				"main_message" => "La page n'existe pas.",
				"sub_message" => "On dirait que tu t'es perdu...",
				"image_link" => "https://i.ibb.co/4FZVV2g/cat.gif",
				"home_link_text" => "Retrouve la voie...",
				"show_link" => true,
				"additional_class" => "big"
			),
			"503" => array(
				"page_title" => "503",
				"main_message" => "Ce site est en cours de maintenance.",
				"sub_message" => "Veuillez revenir plus tard !",
				"image_link" => "https://i.ibb.co/4FZVV2g/cat.gif",
				"home_link_text" => null,
				"show_link" => false,
				"additional_class" => "big"
			)
		),
		"en" => array(
			"403" => array(
				"page_title" => "403",
				"main_message" => "Looks like you're not allowed to be here",
				"sub_message" => "Mischievous Larry will take care of you",
				"image_link" => "https://i.ibb.co/ZW9Sk14/larry.png",
				"home_link_text"=> "Escape quickly...",
				"show_link" => true,
				"additional_class" => null
			),
			"404" => array(
				"page_title" => "404",
				"main_message" => "This page doesn't exist.",
				"sub_message" => "Looks like you're lost...",
				"image_link" => "https://i.ibb.co/4FZVV2g/cat.gif",
				"home_link_text" => "Find your way back...",
				"show_link" => true,
				"additional_class" => "big"
			),
			"503" => array(
				"page_title" => "503",
				"main_message" => "This site is under maintenance.",
				"sub_message" => "Please come back later!",
				"image_link" => "https://i.ibb.co/4FZVV2g/cat.gif",
				"home_link_text" => null,
				"show_link" => false,
				"additional_class" => "big"
			)
		)

	);

	$error_infos = $error_codes[get_browser_language()][$error_type];
	
	extract($error_infos); //? $page_title, $main_message, $sub_message, $image_link, $home_link_text, $show_link, $additional_class

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
			<img src='$image_link' alt='' class='$additional_class'>
			$home_link
		</span>";
}

function display_floating_options(): string {
	return display_palette_choice() . display_language_choice();
}

function display_footer(): string {
	return "<footer class='top-border aux-bc'><span>Romain GERARD <a href='" . get_admin_folder() . "'>©</a> " . get_current_year() . "</span></footer>";
}


function display_html_footer(): string {
	return "</body>
	</html>";
}
