const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomTypeSchema = new Schema({
	description: {
		type: String,
		required: [true, "room type description required"],
		minlength: 3,
	},
	maxCapacity: {
		type: Number,
		required: [true, "room type capacity required"],
	},
}, timestamps: true);

module.exports = mongoose.model("roomType", roomTypeSchema);