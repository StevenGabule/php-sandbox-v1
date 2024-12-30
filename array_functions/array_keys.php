<?php

$person = ['name' => 'fred','age' => 24, 'wife' => 'mich'];
$personKeys = array_keys($person);
$personValues = array_values($person);
print_r([$personKeys, $personValues]);

if (array_key_exists('age', $person)) {
  echo 'exists!';
}

$a = [0, null, ''];
function tf($v)
{
  return $v ? 'T' : 'F';
}

for ($i = 0; $i < 4; $i++) {
  printf("%d: %s %s\n", $i, tf(isset($a[$i])), tf(array_key_exists($i, $a)));
}

// 0: T T
// 1: F T
// 2: T T
// 3: F F
