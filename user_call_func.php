<?php

// function call_user_func(callable $callback, mixed ...$args)
// Calls the callback given by the first parameter and passes the remaining parameters as arguments.
// https://www.php.net/manual/function.call-user-func.php
// @param $callback: The callable to be called.
// @param $args: Zero or more parameters to be passed to the callback. 
// Note that the parameters for call_user_func() are not passed by reference. Example #1 call_user_func() example and references

error_reporting(E_ALL);
function increment(&$var) {
   $var++;
}

$a = 0;
call_user_func('increment', $a);
echo $a . PHP_EOL;

// it is possible to use this instead
call_user_func_array('increment', array($a));
echo $a  . PHP_EOL;

// it is also possible to use a variable function
$increment = 'increment';
$increment($a);
echo $a  . PHP_EOL;

// ``` The above example will output: `Warning: Parameter 1 to increment() expected to be a reference, value given in …
// 0
// 1
// 2`

// _@return_ Returns the return value of the callback.