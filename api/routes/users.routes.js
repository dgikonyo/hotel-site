const express = require('express');
const router = express.Router();
const GuestController = require("../controllers/reservations.controllers");


const guestController = new GuestController();
// GET, POST, PATCH, PUT, DELETE
	// (){} createReservation

router.post("/create", guestController.createGuest.bind(guestController));

module.exports = router;