var express = require('express');
var router = express.Router();
const Ticket = require('../models/tickets');

/* GET - Panier du user */
router.get('/cart/:user', async (req, res) => {
  const { user } = req.params;
  const tickets = await Ticket.find({ user, paid: false }).populate('trip');
  return tickets.length > 0 ? res.json({ result: true, tickets }) : res.json({ result: false });
});

/* GET - Commandes validées du user */
router.get('/bookings/:user', async (req, res) => {
  const { user } = req.params;
  const tickets = await Ticket.find({ user, paid: true }).populate('trip');
  return tickets.length > 0 ? res.json({ result: true, tickets }) : res.json({ result: false });
});

/* PUT - Mise à jour du paiement du user */
router.put('/buy/:user', async (req, res) => {
  const { user } = req.params;
  const result = await Ticket.updateMany({ user, paid: false }, { paid: true });
  return res.json({ result: result.acknowledged });
});

/* DELETE - Suppression d'un billet */
router.delete('/delete/:ticket', async (req, res) => {
  const { ticket } = req.params;
  const result = await Ticket.deleteOne({ _id: ticket });
  return result.deletedCount === 1 ? res.json({ result: true }) : res.json({ result: false });
});

module.exports = router;
