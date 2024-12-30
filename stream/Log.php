<?php

class Log
{
  private $filename;
  private $fh;

  public function __construct($filename)
  {
    $this->filename = $filename;
    $this->open();
  }

  public function open()
  {
    $this->fh = fopen($this->filename, 'a') or die("Can't open {$this->filename}");
  }
  public function write($note)
  {
    fwrite($this->fh, "{$note}\n");
  }

  public function read()
  {
    return join('', file($this->filename));
  }

  public function __wakeup(array $data): void
  {
    $this->filename = $data['filename'];
    $this->open();
  }

  public function __sleep()
  {
    fclose($this->fh);

    return ["filename" => $this->filename];
  }
}


session_start();
$now = strftime("%c");
if (! isset($_SESSION['logger'])) {
  $logger = new Log("tmp/persistent_log");
  $_SESSION['logger'] = $logger;
  $logger->write("Created $now");
  echo "Created session and persistent log object." . PHP_EOL;
} else {
  $logger = $_SESSION['logger'];
}

$logger->write("Viewed first page {$now}");

echo "The log contains: " . PHP_EOL;
echo nl2br($logger->read());
