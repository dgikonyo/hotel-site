const { plainToInstance } = require("class-transformer");
const Guest = require("../models/guest.model");
const GuestDto = require("../dto/guest.dto");
const Reservation = require("../models/reservation.model");
const ResponseService = require("../utils/responses/responseUtils");

class GuestService {
  async registerGuest(req, res) {
    const guestInstance = plainToInstance(GuestDto, req.body);
    const guestDto = new GuestDto();

    if (!guestInstance.firstName) {
      return ResponseService.sendResponse(
        res,
        400,
        "BAD REQUEST",
        "FAILURE",
        "first name missing"
      );
    } else if (!guestInstance.lastName) {
      return ResponseService.sendResponse(
        res,
        400,
        "BAD REQUEST",
        "FAILURE",
        "last name missing"
      );
    } else if (!guestInstance.email) {
      return ResponseService.sendResponse(
        res,
        400,
        "BAD REQUEST",
        "FAILURE",
        "email missing"
      );
    } else if (!guestInstance.dateOfBirth) {
      return ResponseService.sendResponse(
        res,
        400,
        "BAD REQUEST",
        "FAILURE",
        "email missing"
      );
    } else if (!guestInstance.nationalIdNumber) {
      return ResponseService.sendResponse(
        res,
        400,
        "BAD REQUEST",
        "FAILURE",
        "national id number missing"
      );
    }

    try {
      guestDto.setUserId(guestInstance.user_id);
      guestDto.setFirstName(guestInstance.firstName);
      guestDto.setLastName(guestInstance.lastName);
      guestDto.setEmail(guestInstance.email);
      guestDto.setDateOfBirth(guestInstance.dateOfBirth);
      guestDto.setNationalIdNumber(guestInstance.nationalIdNumber);

      const guest = new Guest(guestDto);
      const result = await guest.save();

      return ResponseService.sendResponse(
        res,
        201,
        "GUEST CREATED",
        "Success",
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

  
}

module.exports = GuestService;
