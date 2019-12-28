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

## Routes

| Route                            | Verb      | Handler                         | Middleware        | Name                   |
| -------------------------------- | --------- | ------------------------------- | ----------------- | ---------------------- |
| /users                           | POST      | UserController.store            | av:User           | /users                 |
| /sessions                        | POST      | SessionController.store         | av:Session        | /sessions              |
| /passwords                       | POST      | ForgotPasswordController.store  | av:ForgotPassword | /passwords             |
| /passwords                       | PUT       | ForgotPasswordController.update | av:ResetPassword  | /passwords             |
| /files/:id                       | HEAD,GET  | FileController.show             |                   | /files/:id             |
| /files                           | POST      | FileController.store            | auth              | /files                 |
| /projects                        | HEAD,GET  | ProjectController.index         | auth              | projects.index         |
| /projects                        | POST      | ProjectController.store         | auth,av:Project   | projects.store         |
| /projects/:id                    | HEAD,GET  | ProjectController.show          | auth              | projects.show          |
| /projects/:id                    | PUT,PATCH | ProjectController.update        | auth              | projects.update        |
| /projects/:id                    | DELETE    | ProjectController.destroy       | auth              | projects.destroy       |
| /projects/:projects_id/tasks     | HEAD,GET  | TaskController.index            | auth              | projects.tasks.index   |
| /projects/:projects_id/tasks     | POST      | TaskController.store            | auth,av:Task      | projects.tasks.store   |
| /projects/:projects_id/tasks/:id | HEAD,GET  | TaskController.show             | auth              | projects.tasks.show    |
| /projects/:projects_id/tasks/:id | PUT,PATCH | TaskController.update           | auth              | projects.tasks.update  |
| /projects/:projects_id/tasks/:id | DELETE    | TaskController.destroy          | auth              | projects.tasks.destroy |
