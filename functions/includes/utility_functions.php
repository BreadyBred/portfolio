<?php

require __DIR__ . "/../../vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;

function log_(mixed $element): void {
	echo "<pre>" . print_r($element, true) . "</pre>";
}

function is_maintenance_mode_on(): bool {
	if (decode("utilities")["maintenance_mode"]) {
		return true;
	}

	return false;
}

function redirect_to_maintenance_screen(): void {
	header("Location:" . get_maintenance_screen());
}

function redirect_to_site_root(): void {
	header("Location:" . get_site_root());
}

function get_URL_depth(string $url): int {
	$base_url = get_site_root();
	$base_url = rtrim($base_url, "/");
	
	if (strpos($url, $base_url) === 0) {
		$relative_path = substr($url, strlen($base_url));
		$relative_path = ltrim($relative_path, "/");
		
		if (empty($relative_path)) {
			return 0;
		}
		
		$segments = explode("/", $relative_path);

		$last_segment = end($segments);

		if (strpos($last_segment, ".") !== false) {
			array_pop($segments);
		}
		
		return count($segments);
	} else {
		return -1;
	}
}

function get_current_URL(): string {
	$protocol = (!empty($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] !== "off" || $_SERVER["SERVER_PORT"] == 443) ? "https://" : "http://";
	$host = $_SERVER["HTTP_HOST"];
	$request_URI = $_SERVER["REQUEST_URI"];
	
	return $protocol . $host . $request_URI;
}

function is_on_localhost(): bool {
	return $_SERVER["HTTP_HOST"] === "localhost";
}

function get_site_root(bool $secured = true): string {
	if (is_on_localhost()) {
		return "http://localhost/travail/portfolio/";
	}

	if (!$secured) {
		return "http://romain-gerard.com/";
	}

	return "https://romain-gerard.com/";
}

function get_maintenance_screen(): string {
	return get_site_root() . "error/?e=503";
}

function get_images_folder(): string {
	return get_site_root() . "medias/images/";
}

function get_script_folder(): string {
	return get_site_root() . "script/";
}

function get_projects_illustrations_folder(): string {
	return get_images_folder() . "projects/illustrations/";
}

function get_projects_thumbnails_folder(): string {
	return get_images_folder() . "projects/thumbnails/";
}

function get_files_folder(): string {
	return get_site_root() . "medias/files/";
}

function get_admin_folder(): string {
	return get_site_root() . "admin/";
}

function get_admin_panel_folder(): string {
	return get_site_root() . "admin/panel/";
}

function get_json_folder(): string {
	return get_site_root(false) . "data/";
}

function send_login_notification(): void {
	if(is_on_localhost()) {
		return;
	}
	
	require_once "load_environment.php";
	$mail = new PHPMailer(true);

	$mail->isSMTP();
	$mail->Host = $_ENV["SMTP_HOST"];
	$mail->SMTPAuth = true;
	$mail->Username = $_ENV["SMTP_USERNAME"];
	$mail->Password = $_ENV["SMTP_PASSWORD"];
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
	$mail->Port = 587;
	
	$mail->setFrom("gerarromain@gmail.com", "Notification Portfolio");
	$mail->addAddress("gerarromain@gmail.com");
	
	$date = date("d/m/Y");
	$heure = date("H:i");
	
	$mail->isHTML(false);
	$mail->Subject = "Nouvelle connexion au panel admin !";
	$mail->Body = "Une nouvelle connexion a été effectuée le $date à $heure." . PHP_EOL . "Une nouvelle entrée log.txt a été ajoutée.";
	
	$mail->send();
}

function add_in_log(): void {
	if(is_on_localhost()) {
		return;
	}

    $log_file = __DIR__ . "/../../medias/files/log.txt";

	$date = date("d/m/Y");
	$heure = date("H:i");
    $log_message = "Une nouvelle connexion a été effectuée le $date à $heure" . PHP_EOL;

    file_put_contents($log_file, $log_message, FILE_APPEND | LOCK_EX);
}

function get_formatted_name(string $name): string {
	$search =  [" ", "\"", "(", ")", ",", ".", ":"];
	$replace = ["_", ""  , "" , "", "", "", ""    ];

	$name = str_replace($search, $replace, $name);

	$name = strtolower($name);

	if (substr($name, -1) === "_") {
		$name = substr($name, 0, -1);
	}
	
	$regex = array(
		"à" => "a", "á" => "a", "â" => "a", "ã" => "a", "ä" => "a", "å" => "a", "æ" => "ae",
		"ç" => "c",
		"è" => "e", "é" => "e", "ê" => "e", "ë" => "e",
		"ì" => "i", "í" => "i", "î" => "i", "ï" => "i",
		"ñ" => "n",
		"ò" => "o", "ó" => "o", "ô" => "o", "õ" => "o", "ö" => "o", "ø" => "o",
		"ù" => "u", "ú" => "u", "û" => "u", "ü" => "u",
		"ý" => "y", "ÿ" => "y"
	);

	return strtr($name, $regex);
}

function get_ten_years(): int {
	return (10 * 365 * 24 * 60 * 60);
}

function decode(string $filename): array {
    $url = get_json_folder() . "$filename.json";
    $ch = curl_init($url);
    
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    $response = curl_exec($ch);

    curl_close($ch);

    return json_decode($response, true);
}

function check_session(): void {
	if (empty($_COOKIE["login"])) {
		session_unset();
		session_destroy();
		header("Location: " . get_site_root() . "admin/");
		exit;
	}
}

function get_browser_language(): string {
	$lang = substr($_SERVER["HTTP_ACCEPT_LANGUAGE"], 0, 2);
	return ($lang == "fr") ? $lang : "en";
}

function load_env(): array {
    $env_file = ((is_on_localhost()) ? $_SERVER["DOCUMENT_ROOT"] . "/travail/portfolio" : $_SERVER["DOCUMENT_ROOT"]) . "/.env";
    
    if (!file_exists($env_file) || !is_readable($env_file)) {
        return [];
    }
    
    $env_lines = file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $env_vars = [];
    
    foreach ($env_lines as $line) {
        $line = trim($line);
        if (empty($line) || strpos($line, "#") === 0) {
            continue;
        }
        
        $parts = explode("=", $line, 2);
        if (count($parts) == 2) {
            $key = trim($parts[0]);
            $value = trim($parts[1], " \t\n\r\0\x0B\"'");
            $env_vars[$key] = $value;
        }
    }
    
    return $env_vars;
}

function get_error_response(): array {
	return [
		"success" => false,
		"message" => "&#9888; Une erreur est survenue. &#9888;"
	];
}
