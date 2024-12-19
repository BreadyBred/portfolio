<?php

include 'functions.php';
session_start();

if(empty($_POST)) {
	header('Location: ' . get_site_root());
	exit;
}

$user_infos = decode('user');

$username = $_POST['username'];
$password = crypt($_POST["password"], '15082001');

if($username == $user_infos['username']) {
	if($password == $user_infos['password']) {
		setcookie('login', 'login_time', time() + 3600, '/');
		$_SESSION['username'] = $user_infos['username'];
		add_in_log();
		send_login_notification();
		header("Location: " . get_site_root() . "admin/panel/");
		exit;
	}
}

header("Location: " . get_site_root() . "admin?error=true");
exit;