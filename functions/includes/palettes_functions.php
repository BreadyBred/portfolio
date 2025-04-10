<?php

function get_active_palettes(): array {
	return decode("utilities")["palettes"];
}

function get_palette_colors(): array {
	return get_active_palettes()[$_COOKIE["color_palette"]];
}

function get_palette_id(): int {
	return $_COOKIE["color_palette"];
}

function set_basic_palette(): void {
	setcookie("color_palette", 0, time() + get_ten_years(), "/");
	header("Location: " . $_SERVER["PHP_SELF"]);
	exit();
}

function check_palette(): void {
	if (!isset($_COOKIE["color_palette"])) {
		set_basic_palette();
	}
}
