<?php
header('Content-type: text/html; charset=utf-8');
header('Set-Cookie: same-site-cookie=foo; SameSite=Lax');
header('Set-Cookie: cross-site-cookie=bar; SameSite=None; Secure');
session_start();
require_once(__DIR__ . "/../language/" . addslashes($_SESSION['lang']) . ".php");
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
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css' />
    <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet" href="/css/font-awesome/css/font-awesome.min.css" />
    <link type="text/css" rel="stylesheet" href="/css/jquery-ui.css" />
    <link type="text/css" rel="stylesheet" href="/css/stylesheet.css" />
    <link type="text/css" rel="stylesheet" href="/css/sldocs.css" />
    <link type="text/css" rel="stylesheet" href="/css/lightgallery.css" />
</head>

<!-- <body class = "home" data-spy="scroll" data-target="#navbar-top" data-offset="60"> -->

<body data-spy="scroll" data-target="#sidebar" data-offset="0">