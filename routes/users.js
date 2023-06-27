var express = require('express');
var router = express.Router();
Ticket = require('../models/tickets');

/* GET panier du user */
router.get('/cart/:user', async (req, res) => {
  const { user } = req.params;
  const tickets = await Ticket.find({ user, paid: false });
  return tickets.length > 0 ? res.json({ result: true, tickets }) : res.json({ result: false });
});

/* GET commandes validées du user */
router.get('/cart/:user', async (req, res) => {
  const { user } = req.params;
  const tickets = await Trip.find({ user, paid: true });
  return tickets.length > 0 ? res.json({ result: true, tickets }) : res.json({ result: false });
});

module.exports = router;
