var express = require("express");
var path = require("path");
var data = require("./JS/data");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    
    res.sendFile(path.join(__dirname, "./HTML/home.html"));
  });
  
  // Displays all tables
  app.get("/api/tables", function(req, res) {
    return res.json(data.table);
  });
  
  // Displays a single character, or returns false
  app.get("/reservation", function(req, res) {
    var chosen = req.params.reservations;
  
    console.log(chosen);
  
    for (var i = 0; i < reservation.length; i++) {
      if (chosen === reservation[i].routeName) {
        return res.json(reservation[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Reservations - takes in JSON input
  app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    console.log(newReservation);
  
    // We then add the json the user sent to the reservations array
    reservations.push(newReservations);
  
    // We then display the JSON to the users
    res.json(newReservation);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });