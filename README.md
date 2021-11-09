# swapi-api-integration
Integration to swapi.dev to fetch star wars movies and movie characters with functionality to add and retrieve comments for movies

This repo is functionality complete — PRs and issues welcome!

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- Include your mongodb connection string in the .secreta/secreta.json file
- `npm run start:prod` to start the local server on production mode

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [base-64](github.com/mathiasbynens/base64) - For encoding and decoding url strings
- [body-parser](github.com/expressjs/body-parser) - Node js body parsing middleware
- [cors](github.com/expressjs/cors) - Used to enable cors with various options
- [joi](github.com/sideway/joi) - Object schema validation
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript
- [mongoose-paginate-v2](github.com/aravindnc/mongoose-paginate-v2) - Pagination library for mongoose
- [node-fetch](github.com/node-fetch/node-fetch) - For making third party api calls
- [secreta](https://www.npmjs.com/package/secreta) - For managing secret keys and config
- [winston](github.com/winstonjs/winston) - For logging anything

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

## Error Handling

In `src/@core/common/universal.service.ts`, we define failureResponse and serviceErrorHandler functions for returning the errors with their respective status codes and error messages. Service files for the different modules under `src/api/` folder extends the universal.service.ts file to return the necccessary errors in this file.
In `src/@core/common/universal.controller.ts`, we define controllerErrorHandler function to handle errors from the controller classes which extends this universal.controller.ts file

## Authentication
No authorization is required for this API


<br />
