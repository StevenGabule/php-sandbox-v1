<?php

$names = ["Tom", "Dick", "Harriet", "Brenda", "Joe"];
$ages = [25, 35, 29, 35, 35];
$zips = [80522, '02140', 90210, 64141, 80522];
array_multisort($ages, SORT_ASC, $zips, SORT_DESC, $names, SORT_ASC);
for ($i = 0; $i < count($names); $i++) {
  echo "{$names[$i]}, {$ages[$i]}, {$zips[$i]}" . PHP_EOL;
}
