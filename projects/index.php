<?php

include '../functions/functions.php';

if(!isset($_GET['name']) || !does_project_exist($_GET['name']))
	header('Location:' . get_site_root());

check_if_maintenance_mode_on();

$project_name = get_project_full_name($_GET['name']);
echo display_project_page($project_name, $_GET['name']);