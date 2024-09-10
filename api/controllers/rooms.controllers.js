const RoomService = require("../service/rooms.service");

class RoomControllers {
  async createRoom(req, res) {
    console.log(`Attempt to create room: ${JSON.stringify(req.body)}`);

    const roomService = new RoomService();
    return await roomService.registerRoom(req, res);
  }

  async bulkRegister(req, res) {
    console.log(`Attempt to bulk insert rooms: ${JSON.stringify(req.body)}`);

    const roomService = new RoomService();
    return await roomService.registerBulkRooms(req, res);
  }

  async getRooms(req, res) {
    console.log(`Attempt to get rooms: ${JSON.stringify(req.body)}`);

    const roomService = new RoomService();
    return await roomService.listRooms(req, res);
  }

  async getARoom(req, res) {
    console.log(`Attempt to get a room: ${JSON.stringify(req.body)}`);

    const roomService = new RoomService();
    return await roomService.getARoom(req, res);
  }

  async listAvailableRooms(req, res) {
    console.log(`Attempt to list available rooms: ${JSON.stringify(req.body)}`);

    const roomService = new RoomService();
    return await roomService.checkRoomAvailability(req, res);
  }

  async findRooms(req, res) {
    console.log(`Attempt to find rooms: ${JSON.stringify(req.body)}`);

    const roomService = new RoomService();
    return await roomService.searchRooms(req, res);
  }
}

module.exports = RoomControllers;
