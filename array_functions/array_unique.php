<?php

function arrayUnion($a, $b)
{
  $union = array_merge($a, $b);
  $union = array_unique($union);

  return $union;
}

$first = [1, "two", 3];
$second = ["two", "three", "four"];
$union = arrayUnion($first, $second);
print_r($union);
