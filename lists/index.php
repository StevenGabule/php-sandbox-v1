<?php

// $person = ['fred', 34, 'betty'];
// list($name, $age, $wife) = $person;
// print_r([$name, $age, $wife]);

$people = ['tom', 'dick', 'harriet', 'brenda', 'jo'];
$middle = array_slice($people, -2, 2);
print_r($middle);
