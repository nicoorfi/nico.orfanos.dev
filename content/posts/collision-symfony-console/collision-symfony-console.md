---
title: Use Collision with Symfony Console 
description: Use Collision by Nuno Maduro together with Symfony Cosnole component.
date: 2021-02-11T00:00:00.000Z
---

Often when creating Cli Application as a PHP Developers we use the [Console Component](https://symfony.com/doc/current/components/console.html). In the attempt of making our App as friendly as possible we wan't to display some friendly error messages when they happen.

A nice way of doing this is to use the [Collision package](https://github.com/nunomaduro/collision) by [@Nuno Maduro](https://twitter.com/enunomaduro).

This is how we can integrate **Collision** into out Symfony Console application.

## Preparation

Firstly we install all the required packages by running the following command:
```bash
$ composer require nunomaduro/collision symfony/console symfony/event-dispatcher symfony/event-dispatcher-contracts
```

Next we create the executable file:

```bash
$ touch application && chmod +x application
```

## Custom Error listener

The Symfony Console component will dispach an `Symfony\Component\Console\ConsoleEvents::ERROR` Event every
time that something goes wrong. So we create an **Event Listener** which listens to this event.

Nuno already created this Listener in his 
[ Collision Adapter for Symfony ](https://github.com/nunomaduro/collision-adapter-symfony) which you can find [here](https://github.com/nunomaduro/collision-adapter-symfony/blob/master/src/EventListener/ErrorListener.php).

We will copy this Event Listener class and simplify it a bit for this post.

```php
<?php
// ErrorListener.php

declare(strict_types=1);

namespace Acme;

use Whoops\Exception\Inspector;
use NunoMaduro\Collision\Writer;
use Symfony\Component\Console\Event\ConsoleErrorEvent;
use Symfony\Component\Console\Exception\ExceptionInterface;
use NunoMaduro\Collision\Contracts\Writer as WriterContract;

final class ErrorListener
{
    private WriterContract $writer;

    public function __construct()
    {
        $this->writer = new Writer();
    }

    public function onConsoleError(ConsoleErrorEvent $event): void
    {
        $error = $event->getError();

        if (! ($error instanceof ExceptionInterface)) {
            $this->writer->setOutput($event->getOutput());

            $this->writer->write(new Inspector($error));

            $event->setExitCode(0);
        }
    }
}
```

Next create an instance of the `EventDispatcher`, register the `ErrorListener` and set the
dispatcher to the console `Application` instance like bellow:

```php
#!/usr/bin/env php
<?php
// application

require 'vendor/autoload.php';

use ErrorListener;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\ConsoleEvents;
use Symfony\Component\EventDispatcher\EventDispatcher;

$dispatcher = new EventDispatcher;
$dispatcher->addListener(ConsoleEvents::ERROR, [new ErrorListener(), 'onConsoleError']);

$application = new Application();
$application->setDispatcher($dispatcher);

$application->addCommands([
    //
]);

$application->run();

```

Now exceptions happening in the application will be rendered by collision.

## Testing

In order to test it we create a console command which will throw an `Exception`:

```php
<?php
// FailingCommand.php

namespace Acme;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class FailingCommand extends Command
{
    protected function configure()
    {
        $this->setName('throw')
            ->setDescription('Command that throws an Exception');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        throw new \Exception('A nicely rendered exception.');
    }
}

```

Then we register the command to the application.

```php
$application->addCommands([
   new \Acme\FailingCommand 
]);
```

And execute it:
```bash
$ ./application throw
```

If we did everything correctly should see:

```bash
   Exception

  A nicely rendered exception.

  at FailingCommand.php:22
     18▕     }
     19▕
     20▕     protected function execute(InputInterface $input, OutputInterface $output)
     21▕     {
  ➜  22▕         throw new \Exception('A nicely rendered exception.');
     23▕     }
     24▕ }
     25▕
     26▕

      +4 vendor frames
  5   application:23
      Symfony\Component\Console\Application::run()
```