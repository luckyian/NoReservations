var express = require("express");
var path = require("path");


//data
const table = [
  {
      Name: "Ken",
      Phone: "",
      Email: "",
      UniqueID: 1
  },
  {
      Name: "",
      Phone: "",
      Email: "",
      UniqueID: 2
  },
  {
      Name: "",
      Phone: "",
      Email: "",
      UniqueID: 3
  },
  {
      Name: "",
      Phone: "",
      Email: "",
      UniqueID: 4
  },
  {
      Name: "",
      Phone: "",
      Email: "",
      UniqueID: 5
  }
]

const waitList = [
  {
      Name: "test",
      Phone: "test",
      Email: "test",
      UniqueID: 6
  }
]

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
    table.push(newReservation);
  
    // We then display the JSON to the users
    res.json(newReservation);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  