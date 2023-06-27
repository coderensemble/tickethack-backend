var express = require('express');
var router = express.Router();
const Ticket = require('../models/tickets');

/* GET panier du user */
router.get('cart/:user', (req, res) => {
  console.log(req.params);
  /*const { user } = req.params;
  const tickets = Ticket.find({ user, paid: false });
  return tickets.length > 0 ? res.json({ result: true, tickets }) : res.json({ result: false });*/
});

/* GET commandes validées du user */
router.get('bookings/:user', async (req, res) => {
  const { user } = req.params;
  const tickets = await Ticket.find({ user, paid: true });
  return tickets.length > 0 ? res.json({ result: true, tickets }) : res.json({ result: false });
});

module.exports = router;
