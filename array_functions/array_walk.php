<?php

$printRow = function ($value, $key) {
  print("$key | $value") . PHP_EOL;
};

$person = ['name' => "Fred", 'age' => 35, 'wife' => "Wilma"];
array_walk($person, $printRow);
