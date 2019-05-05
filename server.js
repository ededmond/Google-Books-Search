const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const socketPORT = process.env.PORT || 3002;
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const routes = require("./routes/api.js")(io);
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "./client/public/index.html"))
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

io.on('connection',function(socket) {
  console.log('a user connected');
  socket.on('disconnect',function() {
    console.log('user disconnected');
  })
})



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks", { useNewUrlParser: true })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
})
io.listen(socketPORT);

