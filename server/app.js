// "Import" the Express module instead of http
import express from "express";
// Initialize the Express application
const app = express();

// Handle the request with HTTP GET method from http://localhost:3000/
app.get("/", (request, response) => {
   response.send("Welcome to the Class SPA REST API");
});

// Handle the request with HTTP GET method from http://localhost:3000/status
app.get("/status", (request, response) => {
   // Create the headers for response by default 200
   // Create the response body
   // End and return the response
  response.json({ message: "Service healthy" });
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 3000
const server = app.listen(3000, () => console.log(`Listening on port ${server.address().port}`));
