const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservedRoomSchema = new Schema({
	numberOfRooms: {
		type: Number,
		required: true,
	},
	room_type_id: {
		type: Number,
		required: true,
	},
	reservation_id: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
}, {timestamps: true});

module.exports = mongoose.model("reserved_room", reservedRoomSchema);