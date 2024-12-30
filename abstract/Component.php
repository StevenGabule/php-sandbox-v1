<?php

abstract class Component
{
  abstract public function printOutput();
}

class ImageComponent extends Component
{
  public function printOutput()
  {
    echo "Pretty picture";
  }
}

trait Sortable
{
  abstract public function uniqueId();

  public function compareById($object)
  {
    return ($object->uniqueId() < $this->uniqueId()) ? -1 : 1;
  }
}

class Bird
{
  use Sortable;

  public function uniqueId()
  {
    return __CLASS__ . ":{$this->id}";
  }
}

// this will not compile
class Car
{
  use Sortable;
}

$bird = new Bird();
$car = new Car();
$comparison = $bird->compareById($car);
