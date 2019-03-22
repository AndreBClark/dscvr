<?php
define('SITE_NAME', 'Webpack Starter');

if(file_exists($_SERVER['DOCUMENT_ROOT'].'/lib/local-config.php'))
    include $_SERVER['DOCUMENT_ROOT'].'/lib/local-config.php';
