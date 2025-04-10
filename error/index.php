<?php

include "../functions/functions.php";

if (!isset($_GET["e"])) {
	$_GET["e"] = 404;
}

if ($_GET["e"] == 503 && !is_maintenance_mode_on()) {
	redirect_to_site_root();
}

check_palette();

echo display_error_page($_GET["e"]);
