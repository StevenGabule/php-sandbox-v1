<?php

// $removed = array_splice(array, start [, length [, replacement ] ]);
$subjects = ["physics", "chem", "math", "bio", "cs", "drama", "classics"];
// $removed = array_splice($subjects, 2, 3);
// print_r($removed); // math, bio, cs
// print_r($subjects);// physics, drama, classics

// $new = ['Law', 'Business', 'IS'];
// array_splice($subjects, 4, 3, $new);
// print_r($subjects);


$new = ["physics", "business", "IS"];
array_splice($subjects, 3, 4, $new);
// print_r($subjects);

$subjects = ["physics", "chem", "math"];
$new = ['Law', 'business'];
array_splice($subjects, 2, 0, $new);
print_r($subjects); // $subjects is array("physics", "chem", "law", "business", "math")

$capitals = [
  'USA' => "Washington",
  'Great Britain' => "London",
  'New Zealand' => "Wellington",
  'Australia' => "Canberra",
  'Italy' => "Rome",
  'Canada' => "Ottawa",
  ];

$downUnder = array_splice($capitals, 2, 2); // remove new zealand and australia
$france = ['France' => 'Paris'];
array_splice($capitals, 1, 0, $france);
// insert france between USA and GB
