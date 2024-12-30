<?php

// $person = ['name' => "Fred", 'age' => 35, 'wife' => "Betty"];
// extract($person);
// print_r([$name, $age, $wife]);

// $shape = "round";
// $array = ["cover" => "bird", 'shape' => 'rectangular'];
// extract($array, EXTR_PREFIX_ALL, 'book');
// echo "Cover: $book_cover, Book Shape: $book_shape}, Shape: $shape" . PHP_EOL;

$color = "indigo";
$shape = "curvy";
$floppy = "none";
$a = compact("color", "shape", "floppy");
print_r($a) . PHP_EOL;

// or
$names = ["color", "shape", "floppy"];
$a = compact($names);
print_r($a);
