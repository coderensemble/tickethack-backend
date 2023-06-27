const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
	user: String,
	trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
	paid: Boolean,
});

const Ticket = mongoose.model('tickets', ticketSchema);

module.exports = Ticket;