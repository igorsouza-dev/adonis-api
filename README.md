# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Redis

`$ docker run --name redis -p 6379:6379 -d redis:alpine`

### Starting Queues

`$ adonis kue:listen`

### Sentry

Configure your sentry integration at your `.env`:

```
SENTRY_DSN=
SENTRY_ENVIROMENT=
```

In order to work, you should set the sentry environment to `production`
