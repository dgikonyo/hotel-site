const GuestService = require("../service/guests.service");
// create reservation
class ReservationController {
	async createGuest(req, res, next) {
		console.log(`Attempt to register a guest: ${JSON.stringify(req.body)}`);

		const guestService = new GuestService();
		return await guestService.registerGuest(req, res);
	}

	// async updateReservation(req, res, next) {
	// 	console.log(`Attempt to update a reservation: ${JSON.stringify(req.body)}`);

	// 	const guestService = new GuestService();
	// 	return await guestService.updateReservation(req, res);
	// }
}

module.exports = ReservationController;