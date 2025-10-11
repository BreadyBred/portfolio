<?php

session_start();
include "../../functions/functions.php";

if (!is_login_active()) {
	deactivate_session();
}

if (!is_language_active()) {
	set_language();
}

echo display_admin_panel();
