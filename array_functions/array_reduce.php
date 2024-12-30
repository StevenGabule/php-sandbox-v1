<?php

// $addItUp = function ($runningTotal, $currentValue) {
//   $runningTotal += $currentValue * $currentValue;

//   return $runningTotal;
// };

// $numbers = [2,3,5,7];
// $total = array_reduce($numbers, $addItUp);
// echo $total . PHP_EOL;

// echo $addItUp(0, 2) . PHP_EOL;
// echo $addItUp(4, 3) . PHP_EOL;
// echo $addItUp(13, 5) . PHP_EOL;
// echo $addItUp(38, 7) . PHP_EOL;

# Example 5-2 checks whether the user has entered information in all the required fields in a form.
function hasRequired($array, $requiredFields)
{
  $keys = array_keys($array);
  foreach ($requiredFields as $fieldName) {
    if (! in_array($fieldName, $keys)) {
      return false;
    }
  }

  return true;
}
$postsData = ['name' => 'John', 'email_address' => 'john@gail.com'];
$testArr = array_filter($postsData);
// print_r($testArr);

echo hasRequired($testArr, ['names', 'email_address']) ? 'DID' : 'DID NOT!';
echo PHP_EOL;
