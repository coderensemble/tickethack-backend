const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
	paid: Boolean,
});

const Ticket = mongoose.model('tickets', ticketSchema);

module.exports = Ticket;