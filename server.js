var express = require("express");
var path = require("path");


//data
const table = [
];

const waitList = [
];

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    
    res.sendFile(path.join(__dirname, "./HTML/home.html"));
  });

  app.get("/viewtables", function(req, res) {
    
    res.sendFile(path.join(__dirname, "./HTML/views.html"));
  });

  app.get("/reservation", function(req, res) {
    
    res.sendFile(path.join(__dirname, "./HTML/form.html"));
  });
  
  // Displays all tables
  app.get("/api/tables", function(req, res) {
    return res.json(table);
  });

  // Displays all reservations
  app.get("/api/waitlists", function(req, res) {
    return res.json(waitList);
  });
  
  // Create New Reservations - takes in JSON input
  app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    console.log(newReservation);
  
    // We then add the json the user sent to the reservations array
    table.push(newReservation);
  
    // We then display the JSON to the users
    res.json(newReservation);
  });

    // Create New Reservations - takes in JSON input
    app.post("/api/waitlists", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      var newReservation = req.body;
    
      console.log(newReservation);
    
      // We then add the json the user sent to the reservations array
      waitList.push(newReservation);
    
      // We then display the JSON to the users
      res.json(newReservation);
    });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  