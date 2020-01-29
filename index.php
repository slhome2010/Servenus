<?php
// Global define
define('VERSION', 'v3.0.1');
define('DIR_DOWNLOAD', '/downloads');

// Configuration
if (is_file('config.php')) {
	require_once('config.php');
}

// Languages
@session_start();
if(isset($_GET['lang'])) { 						// Выбранный язык отправлен скрипту через GET
	$_SESSION['lang'] = trim(strip_tags($_GET['lang']));
	$date = time() + 30*24*60*60;
	setcookie('lang',trim(strip_tags($_GET['lang'])),$date);
} else if (isset($_COOKIE['lang'])) { 				// Если язык уже выбран и сохранен в сессии отправляем его скрипту
	$_SESSION['lang'] = $_COOKIE['lang'];
} else { 									// Язык по умолчанию
	$_SESSION['lang'] = 'en';
}

// Открываем текущий язык
$CurentLang = addslashes($_SESSION['lang']);

/* header("Location: /".$CurentLang."/index.html"); */
header("Location: /start.html");

?>