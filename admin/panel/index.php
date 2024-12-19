<?php

include '../../functions/functions.php';
session_start();

check_session();
check_palette();

echo display_admin_panel();