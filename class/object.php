<?php

class Person
{
  public $name;
  public $age;
}

$fred = new Person();
$fred->name = 'Fred';
$fred->age = '22';
$props = get_object_vars($fred);
// print_r($props);

class A
{
}
class B extends A
{
}

$obj = new B();
echo get_parent_class($obj);
echo get_parent_class(new B());
