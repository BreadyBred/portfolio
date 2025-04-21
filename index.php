<?php

include "./functions/functions.php";

if (!is_palette_active()) {
	set_primary_palette();
}

if (!is_language_active()) {
	set_language();
}

if (is_maintenance_mode_on()) {
	redirect_to_maintenance_screen();
}

echo display_landing_page();
