# API Endpoints

This API has the following endpoints:

## Auth Endpoints

- **POST** `/register`: This endpoint is used to register a new user. It requires the following parameters in the request body: `email`, `password`, `name`, `last_name`, `role`.
- **POST** `/login`: This endpoint is used to login a user. It requires the following parameters in the request body: `email`, `password`.

## Movies Endpoints

- **GET** `/`: This endpoint is used to get all movies.
- **GET** `/:id`: This endpoint is used to get a movie by id.

## Rented Movies Endpoints

- **POST** `/`: This endpoint is used to update rented movies.
- **POST** `/:id/:user_id`: This endpoint is used to delete a rented movie by id.
- **GET** `/:id`: This endpoint is used to get all rented movies.

## User Endpoints

- **GET** `/`: This endpoint is used to get all users. Only superadmin users can access this endpoint.
- **POST** `/:id`: This endpoint is used to delete a user by id.
- **GET** `/:id`: This endpoint is used to get a user by id.
