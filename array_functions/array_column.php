<?php

# Array representing a possible record set returned from a database
$records = [
  [
    'id' => 2135,
    'first_name' => 'John',
    'last_name' => 'Doe',
  ],
  [
    'id' => 3245,
    'first_name' => 'Sally',
    'last_name' => 'Smith',
  ],
  [
    'id' => 5342,
    'first_name' => 'Jane',
    'last_name' => 'Jones',
  ],
  [
    'id' => 5623,
    'first_name' => 'Peter',
    'last_name' => 'Doe',
  ],
];

// $first_names = array_column($records, 'first_name');
// $last_name = array_column($records, 'last_name', 'id');
// print_r($last_name);

# Example #3 Get the column of usernames from the public "username" property of an object
class User
{
  public $username;
  public function __construct(string $username)
  {
    $this->username = $username;
  }
}

$users = [
  new User('User 1'),
  new User('User 2'),
  new User('User 3'),
];

// print_r(array_column($users, 'username'));

# Example #4 Get the column of names from the private "name" property of an object using the magic methods __isset() and __get()
class Person
{
  private $name;

  public function __construct(string $name)
  {
    $this->name = $name;
  }

  public function __get($prop)
  {
    return $this->$prop;
  }

  public function __isset($prop): bool
  {
    return isset($this->$prop);
  }
}

$people = [
  new Person('Fred'),
  new Person('Jane'),
  new Person('John'),
];

print_r(array_column($people, 'name'));
