<?php

include "../functions/functions.php";

if (!isset($_GET["e"])) {
	$_GET["e"] = 404;
}

if ($_GET["e"] == 503 && !is_maintenance_mode_on()) {
	redirect_to_site_root();
}

if (!is_palette_active()) {
	set_primary_palette();
}

if (!is_language_active()) {
	set_language();
}

echo display_error_page($_GET["e"]);
