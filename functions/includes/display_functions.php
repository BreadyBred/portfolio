<?php

function display_landing_page():string {

	$structure = display_html_head('Portfolio');
	$structure .= display_header();
	$structure .= display_aboutme();
	$structure .= display_competences();
	$structure .= display_projects();
	$structure .= display_experiences();
	$structure .= display_contact();
	$structure .= display_footer();
	$structure .= display_html_footer();

	return $structure;
}

function display_project_page(string $project_name, string $formatted_name):string {

	$structure = display_html_head($project_name, 'body-full-height body-space-between');
	$structure .= display_header();
	$structure .= display_single_project($formatted_name);
	$structure .= display_footer();
	$structure .= display_html_footer();

	return $structure;
}

function display_login_page():string {

	$structure = display_html_head('Login', 'body-full-height body-center');
	$structure .= display_login_form();
	$structure .= display_html_footer();

	return $structure;
}

function display_admin_panel():string {

	$structure = display_html_head('Panel Admin');
	$structure .= display_admin_structure();
	$structure .= display_html_footer();

	return $structure;
}

function display_error_page(string $error):string {

	$structure = display_html_head($error, 'body-full-height body-space-between');
	$structure .= display_header();
	$structure .= display_error_structure($error);
	$structure .= display_footer();
	$structure .= display_html_footer();

	return $structure;
}