<?php

# The program in Example 5-3 applies the various sorting functions to
# the same data.
# Sorting Arrays
function userSort($a, $b)
{
  // smarts is all important, so sort it first
  if ($b == "smarts") {
    return 1;
  } elseif ($a == "smarts") {
    return -1;
  }

  return ($a == $b) ? 0 : (($a < $b) ? -1 : 1);
}

$values = [
  'name' => "Buzz Lightyear",
  'email_address' => "buzz@starcommand.gal",
  'age' => 32,
  'smarts' => "some",
  ];
$sortType = 'usort'; // uksort, uasort
$sortType = 'uksort'; // uksort, uasort
$sortType = 'uasort'; // uksort, uasort
// $sortType($values, 'userSort');
// $sortType($values, 'userSort');
$sortType($values, 'userSort');
print_r($values);
