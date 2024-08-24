const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const reservationSchema = new Schema({
	reservationId: {
		type: uuid.v1(),
		required: true,
	},
	date_in: {
		type: Date,
		required: [true, "Reservation start date required"],
	},
	date_out: {
		type: Date,
		required: [true, "Reservation end date required"],
	},
	guest_id: {
		type: String,
		required: true,
	},
	totalAmount: {
		type: Number,
		required: true,
	},
}, {timestamps: true});

module.exports = mongoose.model("reservations", reservationSchema);