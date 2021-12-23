---
title: Docker composer custom DNS 
description: How to use custom DNS in your Docker compose setup.
date: 2021-02-05T00:00:00.000Z
---

Recenly spend some hours debugging a strange behavior happening only on my local development environment for my Laravel application.
My virtual server hosted on Google Cloud seem to not be available when I was attempting to connect from my local machine, but when I attempted to connect from a remote one
everything appeared to be working fine. After quite some debugging I found it. It was the default DNS used by my local computer.

## Using custom DNS

After this I decided that I am not letting this to luck and that I am going to use the **Cloudflare** and **Google** DNS severs for now on.

So my `docker-compose.yml` file end up looking like this:

```yaml
  app:
    build: '.'
    dns:
     - 1.1.1.1 # Cloudflare
     - 8.8.8.8 # Google
    volumes:
        - ./:/var/www/app
```

And everything seem to be working fine at first, until some hours later when I discovered that the `host.docker.internal` DNS name isn't
working anymore.

## Local Docker DNS

While developing in a docker container often you may want to connect back to a service on your local machine
and for that reason docker provides the usefull special DNS name `host.docker.internal`. But when
using the `dns` section in you `docker-compose.yml` the `host.docker.internal` isn't available anymore.

For that the solution is to also add your local docker DNS ip address to you `docker-compose.yml`. So if
your subnet address is `192.168.65.0/24` then your DNS will probably be the first address `192.168.65.1`. So the final version of `docker-compose.yml` should look like this:

```yaml
  app:
    build: '.'
    dns:
     - 1.1.1.1 # Cloudflare
     - 8.8.8.8 # Google
     - 192.168.65.1 # Local Docker DNS
    volumes:
        - ./:/var/www/app
```

Afterwards `host.docker.internal` shoud work as expected.

You can find your Subnet address under: **Resources->Network** on your Mac.