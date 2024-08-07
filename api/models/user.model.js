const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const userSchema = new Schema({
    id: {
      type: String,
      default: uuid.v4(),
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: [true, "First name must be provided"],
      minlength: 3,
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "last name must be provided"],
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email."],
    },
    dateOfBirth: {
      type: Date,
      required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);