<?php

session_start();
include "../functions/functions.php";

if (isset($_SESSION["username"])) {
	header("Location: " . get_site_root() . "/admin/panel/");
}

if (!is_palette_active()) {
	set_primary_palette();
}

if (!is_language_active()) {
	set_language();
}

echo display_login_page();
