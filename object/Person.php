<?php

class Person
{
  public string $name = '';
  public int $age;
  protected const PROTECTED_CONST = false;
  public const DEFAULT_USERNAME = "<unknown>";
  private const INTERNAL_KEY = "ABCDE123";

  public function __construct()
  {
    $this->age = 0;
  }

  public function incrementAge()
  {
    $this->age += 1;
    $this->ageChanged();
  }
  protected function decrementAge()
  {
    $this->age -= 1;
    $this->ageChanged();
  }

  private function ageChanged()
  {
    echo "age changed to {$this->age}";
  }

  public function getName()
  {
    return $this->name;
  }

  public function setName(string $newName)
  {
    $this->name = $newName;
  }

  public function __get($property)
  {
    if ($property === 'biography') {
      $biography = 'Long text here...';

      return $biography;
    }
  }

  public function __set($property, $value)
  {
    if ($property === 'biography') {

    }
  }
}

class PaymentMethod
{
  public const int TYPE_CREDITCARD = 0;
  public const int TYPE_CARD = 1;
}

echo PaymentMethod::TYPE_CREDITCARD; // 0


class Child extends Person
{
  public function getName()
  {

  }
}

class HtmLStaff
{
  public static function startTable()
  {
    echo "<Table border=\"1\">\n";
  }

  public static function endTable()
  {
    echo "</Table>\n";
  }
}

// HtmLStaff::startTable();
// HtmLStaff::endTable();

class SuperNaturalPerson extends Person
{
  public function incrementAge()
  {
    $this->decrementAge();
  }
}

$person = new Person();
$person->incrementAge();
// $person->decrementAge(); // not allowed due to access identifier
$person->ageChanged(); // not allowed

$person = new SuperNaturalPerson();
$person->incrementAge();

interface Printable
{
  public function printOutput();
}

class ImageComponent implements Printable
{
  public function printOutput()
  {
    echo "Printing an image...";
  }
}
