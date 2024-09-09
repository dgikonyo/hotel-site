class RoomDto {
  roomNumber;
  name;
  status;
  smoke;
  costPerNight;
  roomTypeId;

  constructor(roomNumber, name, status, smoke, costPerNight, roomTypeId) {
    this.roomNumber = roomNumber;
    this.name = name;
    this.status = status;
    this.smoke = smoke;
    this.costPerNight = costPerNight;
    this.roomTypeId = roomTypeId;
  }

  getRoomNumber() {
    return this.roomNumber;
  }

  setRoomNumber(roomNumber) {
    this.roomNumber = roomNumber;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  getSmoke() {
    return this.smoke;
  }

  setSmoke(smoke) {
    this.smoke = smoke;
  }

  getCostPerNight() {
    return this.costPerNight;
  }

  setCostPerNight(costPerNight) {
    this.costPerNight = costPerNight;
  }

  getRoomTypeId() {
    return this.roomTypeId;
  }

  setRoomNumber(roomTypeId) {
    this.roomTypeId = roomTypeId;
  }
}

module.exports = RoomDto;
