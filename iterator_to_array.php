<?php

// $iterator = new ArrayIterator(array('recipe' => 'pancakes', 'eggs', 'milk', 'flour'));
// var_dump(iterator_to_array($iterator, true));
// var_dump(iterator_to_array($iterator, false));

// EXPECTED OUTPUT:
// array(4) {
//   ["recipe"]=>
//   string(8) "pancakes"
//   [0]=>
//   string(3) "egg"
//   [1]=>
//   string(4) "milk"
//   [2]=>
//   string(5) "flour"
// }
// array(4) {
//   [0]=>
//   string(8) "pancakes"
//   [1]=>
//   string(3) "egg"
//   [2]=>
//   string(4) "milk"
//   [3]=>
//   string(5) "flour"
// }

// return infinite loop and it will failed
// function fibonacci() : Generator
// {
//   yield $a = 1;
//   yield $b = 2;

//   start:
//   yield $c = $a + $b;
//   $a = $b;
//   $b = $c;
//   goto start;
// }

// $fibonacciSequence = fibonacci();
// iterator_to_array($fibonacciSequence);

// COMBINE ITERATOR

$first = new ArrayIterator( array('k1' => 'a' , 'k2' => 'b',  'k3' => 'c',  'k4' => 'd') );
$second = new ArrayIterator( array( 'k1' => 'X', 'k2' => 'Y', 'Z' ) );
$combinedIterator = new AppendIterator();
$combinedIterator->append($first);
$combinedIterator->append($second);
var_dump(iterator_to_array($combinedIterator, false));