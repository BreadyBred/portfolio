<?php

session_start();
include '../functions/functions.php';

if(isset($_SESSION['username']))
	header('Location: ' . get_site_root() . 'admin/panel/');

check_palette();
echo display_login_page();