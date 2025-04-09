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
						<span>
							Bienvenue sur mon portfolio !
							<br><br>
							Jeune développeur web de 23 ans, j'ai toujours été passionné par la programmation et l'informatique en général. Je me suis spécialisé dans le développement web lors de mon Bachelor Universitaire de Technologie, mais je bricole en HTML, CSS, JavaScript, PHP, etc... depuis que je suis sorti du lycée.
							<br><br>
							Toujours curieux concernant le développement web, je suis souvent à la recherche des nouvelles tendances du domaine afin de m'approcher de mon but : Combiner mon travail et ma passion !
						</span>
						<span class='double'>
							<span class='subtitle underlined'>Un outil au service des autres</span>
							<span>
								<span>
									Le web est une plateforme puissante, et j'aime l'idée que mes créations puissent simplifier la vie des utilisateurs.
								</span>
								<span>
									Que ce soit un outil de gestion, une vitrine professionnelle ou une application ludique, chaque projet est une occasion de rendre quelque chose d'utile et d'intuitif.
								</span>
							</span>
						</span>
						<span class='double'>
							<span class='subtitle underlined'>Un développeur en quête d'amélioration continue</span>
							<span>
								<span>
									Je crois fermement que le domaine du développement web évolue constamment, et c'est ce qui me passionne !
								</span>
								<span>
									J'apprécie particulièrement le travail collaboratif, où chaque échange et retour d'expérience contribue à créer des solutions toujours plus optimisées.
								</span>
							</span>
						</span>
						<span class='double'>
							<span class='subtitle underlined'>Les technologies que je préfère</span>
							<span>
								<span>
									Je suis très attaché à la conception « from scratch » et à l'utilisation de PHP pour les sites dynamiques.
								</span>
								<span>
									J'ai expérimenté la conception de sites à l'aide de frameworks tels que CodeIgniter ou Symfony pour PHP, mais aussi ReactJS pour JavaScript
								</span>
							</span>
						</span>
						<span class='double'>
							<span class='subtitle underlined'>Certificats</span>
							<span>
								<span class='content-with-image-or-link'>
									- <a href='http://localhost/travail/portfolio/medias/files/IELTS.pdf' target='_blank' class='underlined' aria-label='Voir le certificat IELTS'>IELTS</a> : Score de 7.5, CEFR : C1 (2025)
								</span>
								<span class='content-with-image-or-link'>
									- <a href='https://cert.efset.org/3xzcDP' target='_blank' class='underlined' aria-label='Voir le certificat EFSET'>EFSET</a> : Niveau C1/C2 (2025)
								</span>
								<span class='content-with-image-or-link'>
									- <a href='http://localhost/travail/portfolio/medias/files/Certificat_Opquast.pdf' target='_blank' class='underlined' aria-label='Voir le certificat Opquast'>Opquast</a> : Certification obtenue, 825 sur 1000 (2024)
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
	/* <span class='aboutme-footer'>
	<a href='" . get_files_folder() . "$palette_id/CV_FR_Romain-GERARD.pdf' id='cv-file'target='_blank' class='button button-xl'>Mon CV</a>
	</span> */
}

function display_competences(): string {
	$categories = decode('competences');

	$competence_text = "";
	foreach ($categories as $category_name => $category) {
		$competence_text .= "
		<span class='category'>
			<span class='category-title'>$category_name</span>
			<span class='categorised-competences'>
		";

		foreach ($category as $formatted_competence => $competence) {
			$competence_link = get_competence_link($formatted_competence, $competence);
			$competence_text .= "<img class='competence' src='$competence_link' alt='$competence'>";
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

function display_projects(): string {
	$projects = get_shown_projects_list();
	$project_list = array_values($projects);

	usort($project_list, function (array $a, array $b): int {
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
			<span class='projects'>
	";
		
		for ($i = 0; $i < count($project_list); $i += 2) {
			$structure .= "<span class='project-line'>";
		
			for ($j = 0; $j < 2 && ($i + $j) < count($project_list); $j++) {
				extract($project_list[$i + $j]);

				$link = get_formatted_name($name);
				$position = ($j == 0) ? "first" : "last";
				$project_tech = "";

				foreach ($important_techs as $tech) {
					$project_tech .= "<span class='tech a-bc'>$tech</span>"; 
				}

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

function display_work_exp(): string {
	$work_experiences = decode('work_experiences');

	$structure = "
	<span class='work-exp'>
		<span class='section-title'>
			<h2 class='title'>Mes expériences professionnelles</h2>
			<span class='v-line a-bg'>&nbsp</span>
		</span>
		<span class='work-experiences'>";

	foreach ($work_experiences as $work_experience) {
		extract($work_experience);
		$is_status_empty_class = ($status == "") ? "empty" : "";

		$structure .= "
		<span class='work-experience'>
			<span class='work-experience-details bold'>
				<span class='work-experience-date'>$date</span>
				<span class='work-experience-hashtag'>#</span>
				<span class='work-experience-name'>$name</span>
			</span>
			<span class='work-experience-job italic'>$company_name</span>
			<span class='work-experience-state italic a-fc $is_status_empty_class'>($status)</span>
			<span class='work-experience-description small italic'>";
		
		foreach ($descriptions as $description) {
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

function display_education(): string {
	$educations = decode('educations');

	$structure = "
		<span class='scholar'>
			<span class='section-title'>
				<h2 class='title'>Mes formations</h2>
				<span class='v-line a-bg'>&nbsp</span>
			</span>
			<span class='scholarships'>
	";

	foreach ($educations as $education) {
		extract($education);

		$structure .= "
			<span class='scholarship'>
				<span class='scholar-details bold'>
					<span class='scholar-name'>$name</span>
					<span class='scholar-hashtag'>#</span>
					<span class='scholar-date'>$date</span>
				</span>
		";

		if ($specialty) {
			$structure .= "<span class='scholar-speciality italic'>$specialty</span>";
		}
		if ($major) {
			$structure .= "<span class='scholar-major italic a-fc'>$major</span>";
		}
		
		$structure .= "<span class='scholar-location'>$location</span>
		</span>
		";
	}

	$structure .= "
		</span>
	</span>";

	return $structure;
}

function display_experiences(): string {
	$structure = "<section class='experiences-section' id='experiences-section'>";
	$structure .= display_work_exp();
	$structure .= display_education();
	$structure .= "</section>";

	return $structure;
}

function display_contact(): string {
	
	$contact_json = decode('contact');

	$contact_icons = $contact_json['contact-icon'];
	$social_icons = "";

	$contact_texts = $contact_json['contact-text'];
	$social_texts = "";

	$palette = get_palette_id();

	$icon_counter = 1;

	foreach ($contact_icons as $contact_icon) {
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

		$social_icons .= "<a class='img' target='_blank' href='$link' aria-label='Icône de contact'><img src='" . get_images_folder() . "contact-logos/$palette/$image' class='contact-logo' alt=''></a>";
	
		$icon_counter++;
	}

	$social_icons .= "</span>";

	foreach ($contact_texts as $contact_text) {
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

function display_palette_choice(): string {
	$structure = "<span class='palette-item'>";
	$structure .= "<img class='palette-option palette-trigger' src='" . get_images_folder() . "palette-icons/palette_plus.png' alt='Palette picker'>";
	
	for ($i = 0; $i < count(get_active_palettes()); $i++) {
		$structure .= "<img class='palette-option palette' src='" . get_images_folder() . "palette-icons/$i.png' data-id='$i' alt='Palette $i'>";
	}
	
	$structure .= "</span>";
	
	return $structure;
}