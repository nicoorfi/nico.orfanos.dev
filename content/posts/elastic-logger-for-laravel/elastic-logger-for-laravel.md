---
title: Elastic logger for Laravel
description: Log from your Laravel app into Elastic Cloud from all your environments.
date: 2022-10-21T00:00:00.000Z
---

A thing in all my projects is using Elastic cloud for my application logging.

The reason for this is that, it’s super easy to start logging in [Elastic](https://www.elastic.co/de/) with Laravel. With ~20$ a month you can have a small Elasticsearch & Kibana setup ready the receive logs from your application.

Now let me show you how to do this.

First you need to require the official Elasticsearch library 

```bash
$ composer require elasticsearch/elasticsearch
```

Next we add an `elastic` custom logging driver to `config/logging.php` file

```php
'elastic' => [
            'driver' => 'custom',
            'via'    => \App\Logging\ElasticLogger::class,
            'cloud_id' => env('ELASTIC_CLOUD_ID', null),
            'password' => env('ELASTIC_PASSWORD', null),            
            'prefix' => env('ELASTIC_INDEX_PREFIX', \Illuminate\Support\Str::slug(env('APP_NAME', 'laravel'), '_')),
        ],
```

and we create our **custom** `ElasticLogger` class in `app/Logging/ElasticLogger.php` with the following

```php
<?php

namespace App\Logging;

use Carbon\Carbon;
use Monolog\Formatter\ElasticsearchFormatter;
use Monolog\Handler\ElasticsearchHandler;
use Psr\Log\LoggerInterface;
use Elasticsearch\ClientBuilder;
use Illuminate\Log\Logger;
use Monolog\Logger as MonologLogger;

class ElasticLogger
{
    public function __invoke(array $config): LoggerInterface
    {
        $index =  $config['prefix'] . '_' . Carbon::now()->format('Y_m_d');

        $client = ClientBuilder::create()
            ->setElasticCloudId($config['cloud_id'])
            ->setBasicAuthentication('elastic', $config['password'])
            ->build();

        $handler = new ElasticsearchHandler($client);
        $handler->setFormatter(new ElasticsearchFormatter($index, '_doc'));

        $monolog = new MonologLogger('elastic', [$handler]);

        return (new Logger($monolog))->withContext(['env' => config('app.env')]);
    }
}
```

And last we update our environment variables

```php
LOG_CHANNEL=elastic
ELASTIC_PASSWORD=
ELASTIC_CLOUD_ID=
```

You will find the **Elastic Password** and your **Cloud Id** in the [Elastic.co deployment](https://cloud.elastic.co/).

Now you can use the `Log` facade and all logs from your application will land at one place.

For example
```php
Log::info('New Order!', [ 'price' => $order->total ]);
```

You can use this to create various Dashboards for Error reporting und much more stuff.

In another post I will show you how you can auto delete you indices once they are older than a week.