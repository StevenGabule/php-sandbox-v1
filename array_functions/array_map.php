<?php

// Example #1 array_map() example
// function cube($n)
// {
//   return ($n * $n * $n);
// }

// $a = [1, 2, 3, 4, 5];
// $b = array_map('cube', $a);
// print_r($b);
// EXPECTED OUTPUT:
// Array
// (
//     [0] => 1
//     [1] => 8
//     [2] => 27
//     [3] => 64
//     [4] => 125
// )

# Example #2 array_map() using a lambda function
// $func = function(int $value): int
// {
//   return $value * 2;
// };

// print_r(array_map($func, range(1,5)));
// Array
// (
//   [0] => 2
//   [1] => 4
//   [2] => 6
//   [3] => 8
//   [4] => 10
// )

# Example #3 array_map() - using more arrays
// function show_spanish(int $n, string $m): string
// {
//   return "The number $n is called $m in spanish.";
// }

// function map_spanish(int $n, string $m) : array
// {
//   return [$n => $m];
// }

// $a = [ 1,2,3,4,5];
// $b = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
// $c = array_map('show_spanish', $a, $b);
// $d = array_map('map_spanish', $a, $b);
// print_r([$c, $d]);

# Example #7 array_map() - associative arrays
$arr = [
  'v1' => 'First release',
  'v2' => 'Second release',
  'v3' => 'Third release',
];

// Note: Before 7.4.0, use the longer syntax for anonymous functions instead.
$callback = fn(string $k, string $v): string => "$k was the $v";
$result = array_map($callback, array_keys($arr), array_values($arr));
var_dump($result);
// array(3) {
//   [0]=>
//   string(24) "v1 was the First release"
//   [1]=>
//   string(25) "v2 was the Second release"
//   [2]=>
//   string(24) "v3 was the Third release"
// }