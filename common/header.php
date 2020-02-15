<?php
header('Content-type: text/html; charset=utf-8');
header('Set-Cookie: same-site-cookie=foo; SameSite=Lax');
header('Set-Cookie: cross-site-cookie=bar; SameSite=None; Secure');
session_start();
require_once(__DIR__ . "/../language/" . addslashes($_SESSION['lang']) . ".php");

if (basename($_SERVER["PHP_SELF"]) === "download.html") {
    $dir_download = __DIR__ . "/../downloads/attributico/";
    $entries = scandir($dir_download, SCANDIR_SORT_DESCENDING);
    $filelist = $license = array();
    foreach ($entries as $entry) {
        if (strpos($entry, "Attributico") === 0) {
            $filelist[] = $entry;
        }
        if (strpos($entry, "License") === 0) {
            $license[] = $entry;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title><?php echo ($title) ?></title>
    <meta name="description" content="<?php echo ($description) ?>">
    <meta name="keywords" content="<?php echo ($keywords) ?>">
    <!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css' /> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" /> -->
    <link type="text/css" rel="stylesheet" href="/css/font-awesome/css/font-awesome.min.css" />
    <!-- <link type="text/css" rel="stylesheet" href="/css/jquery-ui.css" /> -->
    <!-- <link type="text/css" rel="stylesheet" href="/css/stylesheet.css" /> -->
    <link type="text/css" rel="stylesheet" href="/css/sldocs.css" />
    <link type="text/css" rel="stylesheet" href="/css/lightgallery.css" />
</head>

<body data-spy="scroll" data-target="#navbar-top" data-offset="50">

<!-- <body  data-target="#navbar-top" data-method="offset" data-offset="50"> -->
