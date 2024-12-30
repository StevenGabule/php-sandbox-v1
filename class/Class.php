<?php

class MainClass
{
  public $name;
  public $address;
  public $age;

  public function __construct(string $name, string $address, string $age)
  {
    $this->name = $name;
    $this->address = $address;
    $this->age = $age;
  }
}

class MainEmployees extends MainClass
{
  public $position;
  public $salary;

  public function __construct(string $name, string $address, string $age, $position, $salary)
  {
    parent::__construct($name, $address, $age);
    $this->position = $position;
    $this->salary = $salary;
  }
}

class Person
{
  public $name = '';
  public function getName()
  {
    return $this->name;
  }
}

// anonymous classes
$anonymous = new class () extends Person {
  public function getName()
  {
    return "Moana";
  }
};


# Example 6-1. Displaying all declared classes
function displayClasses()
{
  $classes = get_declared_classes();

  foreach ($classes as $class) {
    echo "Showing information about $class" . PHP_EOL;
    $reflection = new ReflectionClass($class);
    $isAnonymous = $reflection->isAnonymous() ? "Yes" : "No";
    echo "Is anonymous: {$isAnonymous}" . PHP_EOL;
    echo "Class methods:" . PHP_EOL;
    $methods = $reflection->getMethods(ReflectionMethod::IS_STATIC);

    if (! count($methods)) {
      echo "None" . PHP_EOL;
    } else {
      foreach ($methods as $method) {
        echo "{$method}()" . PHP_EOL;
      }
    }
    echo "Class properties:". PHP_EOL;
    $properties = $reflection->getProperties();

    if (! count($properties)) {
      echo "None" . PHP_EOL;
    } else {
      foreach (array_keys($properties) as $property) {
        echo $property . PHP_EOL;
      }
    }
  }
}
