const express = require("express");
const app = express();

const userRoutes = require("./routes/user");

app.use("/user", userRoutes);

// Set up the server
const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

/*
This code creates an Express server that listens for incoming HTTP requests on port 3000 (or the port specified in the PORT environment variable, if it exists). It also sets up a route for the root path ('/') that sends the string "Hello, World!" as the response.

To run this server, you will need to have Node.js and the Express module installed. You can install them using the following command:

Copy code
npm install express
Once the dependencies are installed, you can start the server by running the following command:

Copy code
node server.js
This will start the server, and you should be able to visit http://localhost:3000 in your web browser to see the "Hello, World!" message.
*/
