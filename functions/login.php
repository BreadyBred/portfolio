<?php

include 'functions.php';
session_start();

if(empty($_POST)) {
	header('Location: ' . get_site_root());
	exit;
}

$env_vars = load_env();

$admin_username = $env_vars['ADMIN_USERNAME'] ?? '';
$admin_password = $env_vars['ADMIN_PASSWORD'] ?? '';

$submitted_username = $_POST['username'];
$submitted_password  = $_POST["password"];

if($submitted_username == $admin_username) {
	if(password_verify($submitted_password, $admin_password)) {
		setcookie('login', 'login_time', time() + 3600, '/');
		$_SESSION['username'] = $admin_username;
		add_in_log();
		send_login_notification();
		header("Location: " . get_site_root() . "admin/panel/");
		exit;
	}
}

header("Location: " . get_site_root() . "admin?error=true");
exit;