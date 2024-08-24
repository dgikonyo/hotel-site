const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

// we only record here if it is paid:
const occupiedRoomSchema = new Schema({
	checkIn: {
		type: Date,
		required: [true, "check in date required"],
	},
	checkIn: {
		type: Date,
		required: [true, "check out date required"],
	},
	roomId: {
		type: String,
		required: true,
	},
	reservationId: {
		type: String,
		required: true,
	},
}, {timestamps: true});

module.exports = mongoose.model("occupiedRoom", occupiedRoomSchema);