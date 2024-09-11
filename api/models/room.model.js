const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const roomSchema = new Schema(
  {
    roomNumber: {
      type: Number,
      required: true,
      default: () => getRandomNumber(1, 100),
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    smoke: {
      type: Boolean,
      required: true,
    },
    costPerNight: {
      type: Number,
      required: true,
    },
    roomTypeId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("room", roomSchema);
