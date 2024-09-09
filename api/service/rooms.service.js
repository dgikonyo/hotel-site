const { plainToInstance } = require("class-transformer");
const RoomDto = require("../dto/room.dto");
const ResponseService = require("../utils/responses/responseUtils");

class RoomService {
  async registerRoom(req, res) {
    const roomInstance = plainToInstance(RoomDto, req.body);

    const validationErrors = await this.validateRoom(roomInstance);

    if (validationErrors.length > 0) {
      return new ResponseService.sendResponse(
        res,
        400,
        "BAD REQUEST",
        "FAILURE",
        validationErrors.join(", ")
      );
    }

    try {
        const isRoomNumberExists
    } catch (errors) {}
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
