<?php

// $person = ['fred', 34, 'betty'];
// list($name, $age, $wife) = $person;
// print_r([$name, $age, $wife]);

// $people = ['tom', 'dick', 'harriet', 'brenda', 'jo'];
// $middle = array_slice($people, -2, 2);
// print_r($middle);

// $person = ['name' => 'fred','age' => 24, 'wife' => 'dadan'];
// $subset = array_slice($person, 1, 2);
// print_r($subset);

# Combine array_slice() with list() to extract only some values to variables:
$persons = ['Tom', 'Dick', 'Harriet', 'Brenda', 'Jo'];
list($second, $third) = array_slice($persons, 1, 2);
print_r([$second, $third]);
