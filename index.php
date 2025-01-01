<?php

include './functions/functions.php';

check_palette();

if(is_maintenance_mode_on())
	redirect_to_maintenance_screen();

echo display_landing_page();