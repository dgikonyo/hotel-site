const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const reservationSchema = new Schema({
  date_in: {
		type: Date,
		required: [true, "Reservation start date required"],
	},
	date_out: {
		type: Date,
		required: [true, "Reservation end date required"],
	},
  guestId: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model("reservations", reservationSchema);