<?php

function display_aboutme(): string {
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
						<span class='single'>
							<span>
								" . t("Bienvenue sur mon portfolio !") . "</span>
							<span>
								" . t("Jeune développeur web de 23 ans, j'ai toujours été passionné par la programmation et l'informatique en général. Je me suis spécialisé dans le développement web lors de mon Bachelor Universitaire de Technologie, mais je bricole en HTML, CSS, JavaScript, PHP, etc... depuis que je suis sorti du lycée.") . "</span>
							<span>
								" . t("Toujours curieux concernant le développement web, je suis souvent à la recherche des nouvelles tendances du domaine afin de m'approcher de mon but : Combiner mon travail et ma passion !") . "</span>
						</span>
						<span class='double'>
							<span class='subtitle underlined'>" . t("Un outil au service des autres") . "</span>
							<span>
								<span>
									" . t("Le web est une plateforme puissante, et j'aime l'idée que mes créations puissent simplifier la vie des utilisateurs.") . "
								</span>
								<span>
									" . t("Que ce soit un outil de gestion, une vitrine professionnelle ou une application ludique, chaque projet est une occasion de rendre quelque chose d'utile et d'intuitif.") . "
								</span>
							</span>
						</span>
						<span class='double'>
							<span class='subtitle underlined'>" . t("Un développeur en quête d'amélioration continue") . "</span>
							<span>
								<span>
									" . t("Je crois fermement que le domaine du développement web évolue constamment, et c'est ce qui me passionne !") . "
								</span>
								<span>
									" . t("J'apprécie particulièrement le travail collaboratif, où chaque échange et retour d'expérience contribue à créer des solutions toujours plus optimisées.") . "
								</span>
							</span>
						</span>
						<span class='double'>
							<span class='subtitle underlined'>" . t("Les technologies que je préfère") . "</span>
							<span>
								<span>
									" . t("Je suis très attaché à la conception « from scratch » et à l'utilisation de PHP pour les sites dynamiques.") . "
								</span>
								<span>
									" . t("J'ai expérimenté la conception de sites à l'aide de frameworks tels que CodeIgniter ou Symfony pour PHP, mais aussi ReactJS pour JavaScript.") . "
								</span>
							</span>
						</span>
						<span class='double'>
							<span class='subtitle underlined'>" . t("Certificats") . "</span>
							<span>
								<span class='content-with-image-or-link'>
									- <a href='" . get_files_folder() . "/IELTS.pdf' target='_blank' class='underlined' aria-label='" . t("Voir le certificat IELTS") . "'>IELTS</a> : " . t("Score de 7.5") . ", CEFR : C1 (2025)
								</span>
								<span class='content-with-image-or-link'>
									- <a href='https://cert.efset.org/3xzcDP' target='_blank' class='underlined' aria-label='" . t("Voir le certificat EFSET") . "'>EFSET</a> : " . t("Niveau C1/C2") . " (2025)
								</span>
								<span class='content-with-image-or-link'>
									- <a href='" . get_files_folder() . "/Certificat_Opquast.pdf' target='_blank' class='underlined' aria-label='" . t("Voir le certificat Opquast") . "'>Opquast</a> : " . t("Certification obtenue, 825 sur 1000") . " (2024)
								</span>
							</span>
						</span>
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
}

function display_competences(): string {
	$categories = decode("competences");

	$competence_text = "";
	foreach ($categories as $category_name => $category) {
		$competence_text .= "
			<span class='category'>
				<span class='category-title'>" . t($category_name) . "</span>
				<span class='categorised-competences'>";

		foreach ($category as $formatted_competence => $competence) {
			$competence_link = get_competence_link($formatted_competence, $competence);
			$competence_text .= "<img class='competence' src='$competence_link' alt='$competence'>";
		}

		$competence_text .= "
			</span>
		</span>";
	}

	return "
		<section class='competences-section' id='competences-section'>
			<span class='section-title'>
				<h2 class='title'>" . t("Mes compétences") . "</h2>
				<span class='v-line a-bg'>&nbsp</span>
			</span>
			<span class='competences'>
				$competence_text
			</span>
		</section>
	";
}

function display_projects(): string {
	$projects = get_shown_projects_list();
	$project_list = array_values($projects);

	usort($project_list, function (array $a, array $b): int {
		$date_a = DateTime::createFromFormat("d/m/Y", $a["date"]);
		$date_b = DateTime::createFromFormat("d/m/Y", $b["date"]);
		
		return $date_b <=> $date_a;
	});

	$structure = "
		<section class='projects-section' id='projects-section'>
			<span class='section-title'>
				<h2 class='title'>" . t("Mes réalisations") . "</h2>
				<span class='v-line a-bg'>&nbsp</span>
			</span>
			<span class='projects'>";
		
		for ($i = 0; $i < count($project_list); $i += 2) {
			$structure .= "<span class='project-line'>";
		
			for ($j = 0; $j < 2 && ($i + $j) < count($project_list); $j++) {
				extract($project_list[$i + $j]); //? $name, $synopsis, $description, $date, $link, $important_techs[], $tech_used[], $to_show

				$link = get_formatted_name($name);
				$position = ($j == 0) ? "first" : "last";
				$project_tech = "";

				foreach ($important_techs as $tech) {
					$project_tech .= "<span class='tech a-bc'>$tech</span>"; 
				}

				$structure .= "
					<span class='project $position $name'>
						<img src='" . get_projects_thumbnails_folder() . "/$thumbnail_url.png' alt='Projet: $name'>
						<span class='project-infos'>
							<span class='tech-used'>
								$project_tech
							</span>
							<span class='project-text'>
								<h3 class='project-title'>$name</h3>
								<span class='project-description small'>" . t("$synopsis") . "</span>
							</span>
							<a href='" . get_site_root() . "/projects?name=$link' class='button'>" . t("Découvrir") . "</a>
						</span>
					</span>";
			}
		
			$structure .= "</span>";
		}			

	$structure .= "
		</span>
	</section>";

	return $structure;
}

function display_work_exp(): string {
	$work_experiences = decode("work_experiences");

	$structure = "
		<span class='work-exp'>
			<span class='section-title has-relevant-content'>
				<h2 class='title'>" . t("Mes expériences professionnelles") . "</h2>
				<span class='v-line a-bg'>&nbsp</span>
				<span class='relevance-button work-experience small underlined'>" . t("Voir tout") . "</span>
			</span>
			<span class='work-experiences'>";

	foreach ($work_experiences as $work_experience) {
		extract($work_experience); //? $name, $date, $company_name, ?$status, ?$is_relevant, $descriptions[]
		$is_status_empty_class = ($status === null) ? "empty" : "";
		$is_relevant_class = ($is_relevant) ? "" : "irrelevant";
		$relevance_display = ($is_relevant) ? "flex" : "none";

		$structure .= "
			<span class='work-experience $is_relevant_class' style='display: $relevance_display;'>
				<span class='work-experience-details bold'>
					<span class='work-experience-date'>" . t("$date") . "</span>
					<span class='work-experience-hashtag'>#</span>
					<span class='work-experience-name'>" . t("$name") . "</span>
				</span>
				<span class='work-experience-job italic'>$company_name</span>
				<span class='work-experience-state italic a-fc $is_status_empty_class'>(" . t("$status") . ")</span>
				<span class='work-experience-description small italic'>";
		
		foreach ($descriptions as $description) {
			extract($description); //? $line, $tabulations

			$tabs = str_repeat("&emsp;", $tabulations);
			$optional_class = ($tabulations > 1) ? "a-fc" : "";

			$structure .= "
				<span class='work-experience-line $optional_class'>
					$tabs> " . t("$line") . "
				</span>";
		}
		
		$structure .= "
				</span>
			</span>";
	}

	$structure .= "
			</span>
		</span>";

	return $structure;
}

function display_education(): string {
	$educations = decode("educations");

	$structure = "
		<span class='formations'>
			<span class='section-title has-relevant-content'>
				<h2 class='title'>" . t("Mes formations") . "</h2>
				<span class='v-line a-bg'>&nbsp</span>
				<span class='relevance-button formation small underlined'>" . t("Voir tout") . "</span>
			</span>
			<span class='formations-list'>";

	foreach ($educations as $education) {
		extract($education); //? $diploma, $full_diploma, $date, $specialty, $major, $location, $is_relevant

		$is_relevant_class = ($is_relevant) ? "" : "irrelevant";
		$relevance_display = ($is_relevant) ? "flex" : "none";
		$diploma = ($full_diploma === null) ? t("$diploma") : "<abbr title='" . t("$full_diploma") . "'>" . t("$diploma") . "</abbr>";

		$structure .= "
			<span class='formation $is_relevant_class' style='display: $relevance_display;'>
				<span class='formation-details bold'>
					<span class='formation-name'>$diploma</span>
					<span class='formation-hashtag'>#</span>
					<span class='formation-date'>$date</span>
				</span>";

		if ($specialty) {
			$structure .= "<span class='formation-speciality italic'>" . t("$specialty") . "</span>";
		}

		if ($major) {
			$structure .= "<span class='formation-major italic a-fc'>" . t("$major") . "</span>";
		}
		
		$structure .= "
				<span class='formation-location'>$location</span>
			</span>";
	}

	$structure .= "
		</span>
	</span>";

	return $structure;
}

function display_experiences(): string {
	return "
		<section class='experiences-section' id='experiences-section'>"
			. display_work_exp()
			. display_education() .
		"</section>";
}

function display_contact(): string {
	$palette = get_palette_id();
	$images_path = get_images_folder() . "/contact-logos/$palette";

	return "
		<section class='contact-section' id='contact-section'>
			<span class='section-title'>
				<h2 class='title'>" . t("Une idée ? Venez en discuter !") . "</h2>
				<span class='v-line a-bg a-bg-0'>&nbsp;</span>
			</span>
			<span class='socials'>
				<span class='socials-icons'>
					<span class='w3'>
						<a class='img' target='_blank' href='https://www.linkedin.com/in/romain-gerard/' aria-label='Icône de contact'>
							<img src='$images_path/linkedin.png' class='contact-logo' alt='Linkedin icon'>
						</a>
						<a class='img' target='_blank' href='https://github.com/BreadyBred/' aria-label='Icône de contact'>
							<img src='$images_path/github.png' class='contact-logo' alt='Github icon'>
						</a>
						<a class='img' target='_blank' href='https://www.codewars.com/users/BreadyBred' aria-label='Icône de contact'>
							<img src='$images_path/codewars.png' class='contact-logo' alt='Codewars icon'>
						</a>
					</span>
				</span>
				<a href='tel:0777702699' class='italic underlined text'>
					+33 7 77 70 26 99
				</a>
				<a href='mailto:gerarromain@gmail.com' class='italic underlined text'>
					gerarromain@gmail.com
				</a>
			</span>
		</section>";
}

function display_palette_choice(): string {
	$structure = "<span class='palette-item'>";
	$structure .= "<img class='palette-option palette-trigger' src='" . get_images_folder() . "/palette-icons/palette_plus.png' alt='Palette picker'>";
	
	for ($i = 0; $i < count(get_active_palettes()); $i++) {
		$structure .= "<img class='palette-option palette' src='" . get_images_folder() . "/palette-icons/$i.png' data-id='$i' alt='Palette $i'>";
	}
	
	$structure .= "</span>";
	
	return $structure;
}
