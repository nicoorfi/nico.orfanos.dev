---
title: Using database transactions for write operations
description: Using database transactions can give you database integrity, and it’s a good practice to use them for your write operations. Let’s see why and how you can use them in your Laravel application. 
date: 2022-01-18T00:00:00.000Z
---

## Why transactions are a good thing.
Let’s say that in your application all users have to belong to a team. And in your `createUser` action, you create a user and then you assign this user a team. 
```php
$user = User::create(['email'=> 'john@gmai.com');

$user->teams()->attach($team->id); //Throws an exception
```

If you get an Exception while attaching the `Team` to the `User`, your application ends with a wrong state where you have a `User` which hasn’t a `Team` assigned.

This is simple to fix in this case, but it can be more complex in other cases and by using database transactions will yourself these state fixes. Because, when using database transactions, if the team assignment throws an exception, your application will also prevent the user creation.

## How to implement write transactions in Laravel
Database transactions are good practice for all **write** actions. Therefore we create a global middleware for this, using the following command. 
```bash
$ php artisan make:middleware DatabaseTransaction
```

and we change the `handle` method like below:
```php
//app/Http/Middleware/DatabaseTransaction.php

public function handle($request, \Closure $next)
{
		if (!in_array($request->method(),['POST','PUT','PATCH','DELETE'])) {
			return $next($request);
		}

		DB::beginTransaction();

    try {
        $response = $next($request);
    } catch (\Exception $e) {

        DB::rollBack();

        throw $e;
    }
	
    if ($response->getStatusCode() > 399) {
        DB::rollBack();
    } else {
        DB::commit();
    }

    return $response;
}
```

This code will check if we make a **write** operation by checking if the **request method** of the request is a **write** one, and start a transaction. If within the **write** request something goes wrong it will roll back the transaction.

The only thing left to do is to register the middleware to our `web` middleware group in the  `app/Http/Kernel.php`. 

```php
//app/Http/Kernel.php

protected $middlewareGroups = [
    'web' => [
			// ...
			\App\Http\Middleware\DatabaseTransaction::class
    ],
];
```

Now your application will use this `DatabaseTransaction` middleware on every request.

## What to keep in mind
Once you have fully integrated database transactions in your applications, there is this one thing that you need to watch out for when dispatching jobs. If you dispatch a job and later your application rolls back, your job **will still be processed** by your queue. 

For that reason, Laravel has the [afterCommit](https://laravel.com/docs/8.x/queues#specifying-commit-dispatch-behavior-inline)  method which you can chain after the `dispatch`. This way you are safe that the dispatch will only run if the response was successful. 

So if you also are sending an email after the user creation, your code should look like this:

```php
$user = User::create(['email'=> 'john@gmai.com');
    
$user->teams()->attach($team->id);

dispatch(new SendWelcomeEmail($user))->afterCommit();
```

## Final words

The accuracy, completeness, and reliability of your database data are viable things for your application. Using database transactions in Laravel is easy for us to take advantage of them. 
