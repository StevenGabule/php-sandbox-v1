<?php

trait Logger
{
  public function log($logString)
  {
    $className = __CLASS__;
    echo date("Y-m-d h:i:s", time()) . ": [$className] {$logString}";
  }
}

class User
{
  use Logger;

  public $name;

  public function __construct(string $name)
  {
    $this->name = $name;
    $this->log("Created user '{$this->name}'");
  }

  public function __toString()
  {
    return $this->name;
  }
}

class UserGroup
{
  use Logger;

  public array $users = [];

  public function addUser(User $user)
  {
    if (! in_array($this->users, $user)) {
      $this->users[] = $user;
      $this->log("Added user '{$user}' to group.");
    }
  }
}

$group = new UserGroup();
$group->addUser(new User('Franklin'));
// 012-03-09 07:12:58: [User] Created user 'Franklin' 2012-03-09 07:12:58:
// [UserGroup] Added user 'Franklin' to group

trait Command
{
  public function run()
  {
    echo "Executing a command\n";
  }
}

trait Marathon
{
  public function run()
  {
    echo "Running a marathon.\n";
  }
}

class Person
{
  use Command, Marathon {
    Command::run as runCommand;
    Marathon::run insteadof Command;
  }
}

$person = new Person();
$person->run(); // running marathon
$person->runCommand(); // Executing a command
