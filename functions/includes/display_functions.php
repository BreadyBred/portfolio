<?php

function display_landing_page(): string {
	$structure = display_html_head("Portfolio")
	. display_header()
	. display_aboutme()
	. display_competences()
	. display_projects()
	. display_experiences()
	. display_contact()
	. display_footer()
	. display_html_footer();

	return $structure;
}

function display_project_page(string $project_name, string $formatted_name): string {
	$structure = display_html_head($project_name, "body-full-height body-space-between")
	. display_header()
	. display_single_project($formatted_name)
	. display_footer()
	. display_html_footer();

	return $structure;
}

function display_login_page(): string {

	$structure = display_html_head("Login", "body-full-height body-center")
	. display_login_form()
	. display_html_footer();

	return $structure;
}

function display_admin_panel(): string {

	$structure = display_html_head("Panel Admin")
	. display_admin_structure()
	. display_html_footer();

	return $structure;
}

function display_error_page(string $error_code): string {

	$structure = display_html_head($error_code, "body-full-height body-space-between")
	. display_header()
	. display_error_structure($error_code)
	. display_footer()
	. display_html_footer();

	return $structure;
}
