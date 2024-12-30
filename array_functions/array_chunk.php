<?php

# Example 1
// $input_arr = array('a', 'b', 'c', 'd', 'e');
// print_r(array_chunk($input_arr, 2));
// print_r(array_chunk($input_arr, 2, true));
// Array
// (
//     [0] => Array
//         (
//             [0] => a
//             [1] => b
//         )
//     [1] => Array
//         (
//             [0] => c
//             [1] => d
//         )
//     [2] => Array
//         (
//             [0] => e
//         )
// )
// Array
// (
//     [0] => Array
//         (
//             [0] => a
//             [1] => b
//         )
//     [1] => Array
//         (
//             [2] => c
//             [3] => d
//         )
//     [2] => Array
//         (
//             [4] => e
//         )
// )

// NOTE:
// Tried to use an example below (#56022) for array_chunk_fixed that would "partition" or divide an array into a
// desired number of split lists -- a useful procedure for "chunking" up objects or text items into columns, or
// partitioning any type of data resource. However, there seems to be a flaw with array_chunk_fixed — for instance,
// try it with a nine item list and with four partitions. It results in 3 entries with 3 items, then a blank array.
// So, here is the output of my own dabbling on the matter:
// function partition(array $list, int $p) {
//   $listLen = count($list);
//   $partLen = floor($listLen / $p);
//   $partRem = $listLen % $p;
//   $partition = [];
//   $mark = 0;

//   for($px = 0; $px < $p; $px++) {
//     $incr = ($px < $partRem) ? $partLen + 1 : $partLen;
//     $partition[$px] = array_slice($list, $mark, $incr);
//     $mark += $incr;
//   }

//   return $partition;
// }


// $cityList = [ "Black Canyon City", "Chandler", "Flagstaff", "Gilbert", "Glendale", "Globe", "Mesa", "Miami", "Phoenix", "Peoria", "Prescott", "Scottsdale", "Sun City", "Surprise", "Tempe", "Tucson", "Wickenburg"];
// print_r( partition( $cityList, 3 ) );
// EXPECTED OUTPUT:
// Array
// (
//     [0] => Array
//         (
//             [0] => Black Canyon City
//             [1] => Chandler
//             [2] => Flagstaff
//             [3] => Gilbert
//             [4] => Glendale
//             [5] => Globe
//         )

//     [1] => Array
//         (
//             [0] => Mesa
//             [1] => Miami
//             [2] => Phoenix
//             [3] => Peoria
//             [4] => Prescott
//             [5] => Scottsdale
//         )

//     [2] => Array
//         (
//             [0] => Sun City
//             [1] => Surprise
//             [2] => Tempe
//             [3] => Tucson
//             [4] => Wickenburg
//         )
// )

# To reverse an array_chunk, use array_merge, passing the chunks as a variadic:
// $arr = range(1,10);
// $chunks= array_chunk($arr, 3);
// $de_chunks= array_merge(...$chunks);
// print_r($de_chunks);
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
//     [3] => 4
//     [4] => 5
//     [5] => 6
//     [6] => 7
//     [7] => 8
//     [8] => 9
//     [9] => 10
// )

# implemented ArrayAccess Iterator Countable.
// function chunk_iterable($listOfThings, $size)
// {
//   $chunk = 0;
//   $chunks = array_fill(0, ceil(count($listOfThings) / $size) - 1, []);
//   $index = 0;
//   foreach ($listOfThings as $thing) {
//     if ($index && $index % $size == 0)
//       $chunk++;
//     $chunks[$chunk][] = $thing;
//     $index++;
//   }
//   return $chunks;
// }

// print_r(chunk_iterable(range(1, 19), 4));
// expected output:
// Array
// (
//     [0] => Array
//         (
//             [0] => 1
//             [1] => 2
//             [2] => 3
//             [3] => 4
//         )
//     [1] => Array
//         (
//             [0] => 5
//             [1] => 6
//             [2] => 7
//             [3] => 8
//         )
//     [2] => Array
//         (
//             [0] => 9
//             [1] => 10
//             [2] => 11
//             [3] => 12
//         )
//     [3] => Array
//         (
//             [0] => 13
//             [1] => 14
//             [2] => 15
//             [3] => 16
//         )
//     [4] => Array
//         (
//             [0] => 17
//             [1] => 18
//             [2] => 19
//         )
// )


# chunk array vertically
// $arr = range(1, 19);
// function array_chunk_vertical($arr, $per_column)
// {
//   $n = count($arr);
//   $mod = $n % $per_column;
//   $cols = floor($n / $per_column);
//   $mod ? $cols++ : null;
//   $re = [];

//   for ($col = 0; $col < $cols; $col++) {
//     for ($row = 0; $row < $per_column; $row++) {
//       if ($arr) {
//         $re[$row][] = array_shift($arr);
//       }
//     }
//   }
//   return $re;
// }

// $result = array_chunk_vertical($arr, 6);
// foreach($result as $row) {
//   foreach($row as $v) {
//     echo "[$v]";
//   }
//   echo PHP_EOL;
// }
/*
[1][7][13][19]
[2][8][14]
[3][9][15]
[4][10][16]
[5][11][17]
[6][12][18]
 */

// $numRange = range(1, 7);
// $rows = array_chunk($numRange, 3);
// print_r($rows);
