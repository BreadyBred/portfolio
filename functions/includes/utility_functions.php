<?php
require __DIR__ . '/../PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;

function log_(mixed $element):void {
	echo "<pre>" . print_r($element, true) . "</pre>";
}

function basic_checks() {
	check_palette();
	check_if_maintenance_mode_on();
}

function get_site_root(bool $secured = true):string {
	if($_SERVER['HTTP_HOST'] == "localhost")
		return 'http://localhost/travail/Projet/refonte_portfolio/';

	if(!$secured)
		return 'http://romain-gerard.com/';

	return 'https://romain-gerard.com/';
}

function get_URL_depth(string $url): int {
	$base_url = get_site_root();
	$base_url = rtrim($base_url, '/');
	
	if (strpos($url, $base_url) === 0) {
		$relative_path = substr($url, strlen($base_url));
		$relative_path = ltrim($relative_path, '/');
		
		if (empty($relative_path))
			return 0;
		
		$segments = explode('/', $relative_path);

		$last_segment = end($segments);

		if (strpos($last_segment, '.') !== false)
			array_pop($segments);
		
		return count($segments);
	} else {
		return -1;
	}
}

function get_current_URL() {
	$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
	$host = $_SERVER['HTTP_HOST'];
	$request_URI = $_SERVER['REQUEST_URI'];
	
	return $protocol . $host . $request_URI;
}

function check_if_maintenance_mode_on():void {
	if(decode('utilities')['maintenance_mode'])
		redirect_to_maintenance_screen();
}

function get_maintenance_screen():string {
	return get_site_root() . 'error/?e=503';
}

function get_images_folder():string {
	return get_site_root() . 'medias/images/';
}

function get_script_folder():string {
	return get_site_root() . 'script/';
}

function get_projects_illustrations_folder():string {
	return get_images_folder() . 'projects/illustrations/';
}

function get_projects_thumbnails_folder():string {
	return get_images_folder() . 'projects/thumbnails/';
}

function get_files_folder():string {
	return get_site_root() . 'medias/files/';
}

function get_admin_folder():string {
	return get_site_root() . 'admin/';
}

function get_admin_panel_folder():string {
	return get_site_root() . 'admin/panel/';
}

function get_json_folder():string {
	return get_site_root(false) . 'data/';
}

function redirect_to_maintenance_screen():void {
	header('Location:' . get_maintenance_screen());
}

function send_login_notification():void {
	$mail = new PHPMailer(true);

	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'gerarromain@gmail.com';
	$mail->Password = 'mvsy lvkc xvkd myqe';
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
	$mail->Port = 587;
	
	$mail->setFrom('gerarromain@gmail.com', 'Notification Portfolio');
	$mail->addAddress('gerarromain@gmail.com');
	
	$date = date("d/m/Y");
	$heure = date("H:i");
	
	$mail->isHTML(false);
	$mail->Subject = "Nouvelle connexion au panel admin !";
	$mail->Body = "Une nouvelle connexion a été effectuée le $date à $heure." . PHP_EOL . "Une nouvelle entrée log.txt a été ajoutée.";
	
	$mail->send();
}

function add_in_log():void {
    $log_file = __DIR__ . '/../../medias/files/log.txt';

	$date = date("d/m/Y");
	$heure = date("H:i");
    $log_message = "Une nouvelle connexion a été effectuée le $date à $heure" . PHP_EOL;

    file_put_contents($log_file, $log_message, FILE_APPEND | LOCK_EX);
}

function get_formatted_name(string $name):string {
	$search =  [' ', '\'', '(', ')', ',', '.', ':'];
	$replace = ['_', ''  , '' , '', '', '', ''    ];

	$name = str_replace($search, $replace, $name);

	$name = strtolower($name);

	if(substr($name, -1) === '_') {
		$name = substr($name, 0, -1);
	}
	
	$regex = array(
		'à' => 'a', 'á' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a', 'å' => 'a', 'æ' => 'ae',
		'ç' => 'c',
		'è' => 'e', 'é' => 'e', 'ê' => 'e', 'ë' => 'e',
		'ì' => 'i', 'í' => 'i', 'î' => 'i', 'ï' => 'i',
		'ñ' => 'n',
		'ò' => 'o', 'ó' => 'o', 'ô' => 'o', 'õ' => 'o', 'ö' => 'o', 'ø' => 'o',
		'ù' => 'u', 'ú' => 'u', 'û' => 'u', 'ü' => 'u',
		'ý' => 'y', 'ÿ' => 'y'
	);

	return strtr($name, $regex);
}

function get_ten_years():int {
	return (10 * 365 * 24 * 60 * 60);
}

function get_project_full_name(string $formatted_name):string {
	$projects = decode('projects');

	return $projects[$formatted_name]['name'];
}

function get_shown_projects_list():array {
	$projects = decode('projects');
	$project_list = array();
	foreach($projects as $project_id => $project) {
		extract($project);
		
		if($to_show)
			$project_list[$project_id] = $project;
	}

	return $project_list;
}

function get_hidden_projects_list():array {
	$projects = decode('projects');
	$project_list = array();
	foreach($projects as $project_id => $project) {
		extract($project);

		if(!$to_show)
			$project_list[$project_id] = $project;
	}
	return $project_list;
}

function get_project_list():array {
	$projects = decode('projects');
	return $projects;
}

function decode(string $filename):array {
	return json_decode(file_get_contents(get_json_folder() . "$filename.json"), true);
}

function does_project_exist(string $project_name):bool {
	$projects = decode('projects');

	if(array_key_exists($project_name, $projects))
		return true;

	return false;
}

function sort_in_radio(array $elements, string $prefix):string {
	$structure = "";

	foreach($elements as $id => $element) {
		extract($element);

		$html_id = $prefix . "-" .$id;

		$structure .= "
		<span>
			<label for='$html_id'>$name</label>
			<input type='radio' id='$html_id' value='$id' name='project' class='input_radio a-bc a-ac' required>
		</span>
		";
	}

	return $structure;
}

function sort_in_option(array $elements):string {
	$structure = "";

	foreach($elements as $id => $element) {
		extract($element);

		$structure .= "
			<option class='aux-bg-hv' value='$id'>$name</option>
		";
	}

	return $structure;
}

function sort_competences_in_option(array $competences):string {
	$structure = "";

	foreach($competences as $category => $elements) {
		$structure .= "
			<optgroup label='$category'>
		";
		foreach($elements as $formatted_competence => $competence) {
			$structure .= "
				<option class='aux-bg-hv' value='$formatted_competence'>$competence</option>
			";
		}
		$structure .= "
			</optgroup>
		";
	}

	return $structure;
}

function check_session():void {
	if(empty($_COOKIE['login'])) {
		session_unset();
		session_destroy();
		header("Location: " . get_site_root() . "admin/");
		exit;
	}
}

function get_competence_link(string $formatted_competence, string $competence):string {
	$color = get_palette_colors();
	return "https://img.shields.io/badge/$competence-%23$color[0]?style=for-the-badge&logo=$formatted_competence&logoColor=$color[1]";
}

function get_browser_language():string {
	$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
	return ($lang == 'fr') ? $lang : "en";
}

function move_image(array $image, string $repository, string $image_name):void {
	$extension = '.png';
	$image_tmp = $image['tmp_name'];

	$url_depth = get_URL_depth(get_current_URL());
	$image_path = str_repeat('../', $url_depth) . "medias/images/" . $repository . "/" . $image_name . $extension;
	
	move_uploaded_file($image_tmp, $image_path);
}

function move_multiple_image(string $image_tmp, string $repository, string $image_name):void {
	$extension = '.png';

	$url_depth = get_URL_depth(get_current_URL());
	$image_path = str_repeat('../', $url_depth) . "medias/images/" . $repository . "/" . $image_name . $extension;
	
	move_uploaded_file($image_tmp, $image_path);
}

function get_active_palettes():array {
	return decode('utilities')['palettes'];
}

function get_palette_colors():array {
	return get_active_palettes()[$_COOKIE['color_palette']];
}

function get_palette_id():int {
	return $_COOKIE['color_palette'];
}

function set_basic_palette():void {
	setcookie('color_palette', 0, time() + get_ten_years(), "/");
	header("Location: " . $_SERVER['PHP_SELF']);
	exit();
}

function check_palette() {
	if(!isset($_COOKIE['color_palette']))
		set_basic_palette();
}