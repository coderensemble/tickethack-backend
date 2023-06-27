var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const newTrip = new Trip ({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date});

//route pour aller chercher les information du client

router.post('/',(req,res) => {
  req.body.departure, req.body.arrival, req.body.date === 
  res.json({tripsList: Trips})
});



//route pour creer la base de donnée utilisateur et enregistrer les billets
router.post('/')




module.exports = router;
