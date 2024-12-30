<?php

// $names = ["Cath", "Angela", "Brad", "Mira"];
// sort($names);
// print_r($names);
// echo PHP_EOL;
// rsort($names);
// echo PHP_EOL;
// print_r($names);
$logins = [
  'njt' => 415,
  'kt' => 492,
  'rl' => 652,
  'jht' => 441,
  'jj' => 441,
  'wt' => 402,
  'hut' => 309,
  ];

arsort($logins);
print_r($logins);
echo PHP_EOL;

$numPrinted = 0;
foreach ($logins as $user => $time) {
  echo "$user | $time" . PHP_EOL;
  if (++$numPrinted == 3) {
    break; // stop after 3
  }
}

echo PHP_EOL;
ksort($logins);
print_r($logins);
