var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
const Ticket = require("../models/tickets");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//route pour aller chercher les information du client

router.get("/:departure/:arrival/:date", (req, res) => {
  const newTrip = { departure: req.params.departure, arrival: req.params.arrival };
  //recuperer les infos de la db
  Trip.find(newTrip).then((data) => {
    console.log(data);
    //verifier que les champs sont remplis
    if (data.length > 0) {
      res.json({ result: true, trips: data });
    } else {
      res.json({ result: false });
    }
  });
});

//route pour creer la base de donnée utilisateur et enregistrer les billets
router.post("/", (req, res) => {
  const user = req.body.user;
  const trip = req.body.trip;
  if (user && trip) {
    const newBillet = new Ticket({
      user: req.body.user,
      trip: req.body.trip,
      paid: false,
    });
    newBillet.save().then(() => {
      res.json({ result: true });
    });
  } else {res.json({result: false})};
});

module.exports = router;
