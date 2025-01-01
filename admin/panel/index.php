<?php

session_start();
include '../../functions/functions.php';

check_session();
check_palette();

echo display_admin_panel();