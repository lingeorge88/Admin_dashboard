# Controllers
## Purpose
### Controllers contain the logic that gets executed when a route is requested. They act as an intermediary between models (data) and views (presentation), although in API development with Node.js and Express.js, the "view" part might not be directly involved, especially in a REST API context.
## Functionality
###  Controllers handle the input from the request, process it (with possible interactions with the database/models), and return a response. This can include rendering a view with data, sending JSON to the client, or redirecting to another route.
## Key Role
### Controllers organize the business logic of your application. They keep the code clean and maintainable by separating the concerns and not overloading the route definitions with procedural code.
## Summary
### Controllers define what to do when you get to a certain route, handling the processing and resposne logic
