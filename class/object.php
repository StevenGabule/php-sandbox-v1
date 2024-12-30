<?php

// class Person
// {
//   public $name;
//   public $age;
// }

// $fred = new Person();
// $fred->name = 'Fred';
// $fred->age = '22';
// $props = get_object_vars($fred);
// // print_r($props);

// class A
// {
// }
// class B extends A
// {
// }

// $obj = new B();
// echo get_parent_class($obj);
// echo get_parent_class(new B());

// Example 6-2. Object introspection functions
function getCallableMethods($objects): array
{
  $reflection = new ReflectionClass($objects);
  $methods = $reflection->getMethods();

  return $methods;
}

function getLineage($object): array
{
  $reflection = new ReflectionClass($object);
  if ($reflection->getParentClass()) {
    $parent = $reflection->getParentClass();
    $lineage = getLineage($parent);
    $lineage[] = $reflection->getName();
  } else {
    $lineage = [$reflection->getName()];
  }

  return $lineage;
}

function getChildClasses($object): array
{
  $reflection = new ReflectionClass($object);
  $classes = get_declared_classes();
  $children = [];
  foreach ($classes as $class) {
    $checkedReflection = new ReflectionClass($class);

    if ($checkedReflection->isSubclassOf($reflection->getName())) {
      $children[] = $checkedReflection->getName();
    }
  }

  return $children;
}

function getProperties($object): array
{
  $reflection = new ReflectionClass($object);

  return $reflection->getProperties();
}

function printObjectInfo($object)
{
  $reflection = new ReflectionClass($object);
  echo "Class" . PHP_EOL;
  echo "{$reflection->getName()}" . PHP_EOL;

  echo "Inheritance" . PHP_EOL;
  echo "Parents" . PHP_EOL;
  $lineage = getLineage($object);
  array_pop($lineage);

  if (count($lineage) > 0) {
    echo "" . join(" > ", $lineage) . "";
  } else {
    echo "None";
  }
  echo "Children" . PHP_EOL;

  $children = getChildClasses($object);
  if (count($children) > 0) {
    echo join(", ", $children);
  } else {
    echo "None";
  }

  echo "Methods" . PHP_EOL;
  $methods = getCallableMethods($object);

  if (! count($methods)) {
    echo "None";
  } else {
    foreach ($methods as $method) {
      echo "{$method}()" . PHP_EOL;
    }
  }

  echo "Properties" . PHP_EOL;
  $properties = getProperties($object);

  if (! count($properties)) {
    echo "None";
  } else {
    foreach (array_keys($properties) as $property) {
      echo "${$property} = " . $object->$property . "" . PHP_EOL;
    }
  }
}


class A
{
  public $foo = "foo";
  public $bar = "bar";
  public $baz = 17.0;
  public function firstFunction()
  {
  }
  public function secondFunction()
  {
  }
}
class B extends A
{
  public $quux = false;
  public function thirdFunction()
  {
  }
}
class C extends B
{
}
$a = new A();
$a->foo = "sylvie";
$a->bar = 23;
$b = new B();
$b->foo = "bruno";
$b->quux = true;
$c = new C();

printObjectInfo($a);
printObjectInfo($b);
printObjectInfo($c);
