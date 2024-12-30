<?php

// $person = ['name' => "Fred", 'age' => 35, 'wife' => "Betty"];
// extract($person);
// print_r([$name, $age, $wife]);

// $shape = "round";
// $array = ["cover" => "bird", 'shape' => 'rectangular'];
// extract($array, EXTR_PREFIX_ALL, 'book');
// echo "Cover: $book_cover, Book Shape: $book_shape}, Shape: $shape" . PHP_EOL;

// $color = "indigo";
// $shape = "curvy";
// $floppy = "none";
// $a = compact("color", "shape", "floppy");
// print_r($a) . PHP_EOL;

// // or
// $names = ["color", "shape", "floppy"];
// $a = compact($names);
// print_r($a);

// $addresses = ["spam@cyberpromo.net", "abuse@example.com"];
// while (list($key, $value) = each($addresses)) {
//   echo "$key is $value" . PHP_EOL;
// }

# Example 5-1. Building a table with the iterator functions
// $ages = [
//   'Person' => "Age",
//   'Fred' => 35,
//   'Barney' => 30,
//   'Tigger' => 8,
//   'Pooh' => 40,
//   ];

// reset($ages);
// list($c1, $c2) = each($ages);
// echo "\n$c1 | $c2\n" . PHP_EOL;

// while (list($c1, $c2) = each($ages)) {
//   echo "$c1 | $c2" . PHP_EOL;
// }
