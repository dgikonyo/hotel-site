const { plainToInstance } = require("class-transformer");
const RoomDto = require("../dto/room.dto");
const ResponseService = require("../utils/responses/responseUtils");
const Room = require("../models/room.model");

class RoomService {
  async registerRoom(req, res) {
    const roomInstance = plainToInstance(RoomDto, req.body);
    const validationErrors = await this.validateRoom(roomInstance);

    if (validationErrors.length > 0) {
      return ResponseService.sendResponse(
        res,
        400,
        "BAD REQUEST",
        "FAILURE",
        validationErrors.join(", ")
      );
    }

    try {
      const isRoomNumberExists = await Room.findOne({
        roomNumber: roomInstance.roomNumber,
      });

      if (isRoomNumberExists.length > 0) {
        return ResponseService.sendResponse(
          res,
          400,
          "CONFLICT",
          "FAILURE",
          "DUPLICATE ROOM NUMBER FOUND"
        );
      }

      const roomDto = new RoomDto();

      roomDto.setRoomNumber(roomInstance.roomNumber);
      roomDto.setName(roomInstance.name);
      roomDto.setStatus(roomInstance.status);
      roomDto.setSmoke(roomInstance.smoke);
      roomDto.setCostPerNight(roomInstance.costPerNight);
      roomDto.setRoomTypeId(roomInstance.roomTypeId);

      const room = new Room(roomDto);
      const result = await room.save();

      return ResponseService.sendResponse(
        res,
        201,
        "CREATED",
        "SUCCESS",
        result
      );
    } catch (errors) {
      return ResponseService.sendResponse(
        res,
        500,
        "INTERNAL SERVER ERROR",
        "FAILURE",
        error.message
      );
    }
  }

  async registerBulkRooms(req, res) {
    const roomInstance = plainToInstance(RoomDto, req.body);

    try {
      const room = new Room();

      const result = room.collection.insertMany(
        roomInstance,
        function (err, res, next) {
          if (err) {
            throw err;
          }
          console.log("Number of documents inserted: " + res.insertedCount);
          next();
        }
      );
      return ResponseService.sendResponse(
        res,
        201,
        "CREATED",
        "SUCCESS",
        result
      );
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        "INTERNAL SERVER ERROR",
        "FAILURE",
        error.message
      );
    }
  }

  async listRooms(req, res) {}
  async getARoom(req, res) {}
  async checkRoomAvailability(req, res) {}
  async searchRooms(req, res) {}

  validateRoom(roomInstance) {
    const errors = [];

    if (!roomInstance.roomNumber) {
      errors.push("input room number");
    }
    if (!roomInstance.name) {
      errors.push("input room name");
    }
    if (!roomInstance.status) {
      errors.push("input room status");
    }
    if (!roomInstance.smoke) {
      errors.push("input room smoke detector info");
    }
    if (!roomInstance.costPerNight) {
      errors.push("input room cost per night");
    }
    if (!roomInstance.roomTypeId) {
      errors.push("input room type id");
    }

    return errors;
  }
}

module.exports = RoomService;
