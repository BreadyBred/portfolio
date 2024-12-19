<?php

include '../functions/functions.php';

if(!isset($_GET['e']))
	$_GET['e'] = 404;

check_palette();

echo display_error_page($_GET['e']);