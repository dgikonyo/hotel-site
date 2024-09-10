const express = require('express');
const router = express.Router();
const RoomController = require("../controllers/rooms.controllers");
const roomController = new RoomController();

router.post("/create", roomController.createRoom.bind(roomController));
router.post("/create/bulk", roomController.bulkRegister.bind(roomController));

module.exports = router;