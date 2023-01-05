## Description

This project was constructed with objective to do notification microservice where project's layer stay isolated and with only responsibility. Segmented the infra's layer where all external relationship (database, output api and messaging) and application's layer where stay domain application this part was constructed the way independet framework or library, you can move this part of project to another project and code keep working.  

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Features
- send notification
- read notification
- unread notification
- count notification by recipient
- list all notificifacion by recipient
- cancel sending notification
- send notification with Kafka

## Tecnologies
- TS
- Nest
- Jest
- OOP
- Kafka
- Docker
- Unit Tests
- Prisma
- SQLite
- Kafka

## Temporary Documentation
[Notifications.postman_collection.zip](https://github.com/eriklm42/ms-notification-nest/files/10351706/Notifications.postman_collection.zip)

## To do
- Apply kubernets
- Integration with Swagger or another documentation plataform 
- Apply Grafana
- Apply logs plataform
