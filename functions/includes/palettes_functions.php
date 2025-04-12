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

function set_primary_palette(): void {
	setcookie("color_palette", 0, time() + get_ten_years(), "/");
	header("Location: " . $_SERVER["PHP_SELF"]);
	exit();
}

function is_palette_active(): bool {
	return (isset($_COOKIE["color_palette"])) ? true : false;
}
