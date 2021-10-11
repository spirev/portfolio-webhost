<?php

$view = "";
$title = "";
$is_in_range = false;

foreach ($_GET as $key => $value) {
    $view = $key;
}

$pages = [
    ["parcours", "Mon parcours"],
    ["projets", "Mes projets"],
    ["interets", "Mes centres d'intérets"],
    ["contact", "Me contacter"]
];

foreach ($pages as $page) {
    if (in_array($view, $page)) {
        $is_in_range = true;
        $title = $page[1];
        break;
    }
}

if ($is_in_range === false) {
    $view = 'parcours';
}

include 'views/layout.phtml';
