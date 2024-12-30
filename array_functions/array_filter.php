<?php

// $numbers = [9,23,24,27];
$numbers = range(1, 100);
print_r(array_filter($numbers, function ($element) {
  return $element % 2;
}));
