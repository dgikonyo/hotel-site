onst express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const hostedAtSchema = new Schema({
	guestId: {
	    type: String,
	    required: true,
  },
  occupiedRoomId: {
	    type: String,
	    required: true,
  },
});