class GuestDto {
	user_id;
	firstName;
	lastName;
	email;
	dateOfBirth;
	nationalIdNumber;

	constructor(user_id,
	firstName,
	lastName,
	email,
	dateOfBirth,
	nationalIdNumber){
		this.user_id = user_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.dateOfBirth = dateOfBirth;
		this.nationalIdNumber = nationalIdNumber;
	}

	getUserId(){
		return this.user_id;
	}

	setUserId(user_id){
		this.user_id = user_id;
	}

	getFirstName(){
		return this.firstName;
	}

	setFirstName(firstName){
		this.firstName = firstName;
	}

	getLastName(){
		return this.lastName;
	}

	setLastName(lastName){
		this.lastName = lastName;
	}

	getDateOfBirth(){
		return this.dateOfBirth;
	}

	setDateOfBirth(dateOfBirth){
		this.dateOfBirth = dateOfBirth;
	}

	getEmail(){
		return this.email;
	}

	setEmail(email){
		this.email = email;
	}

	getNationalIdNumber(){
		return this.nationalIdNumber;
	}

	setNationalIdNumber(nationalIdNumber){
		this.nationalIdNumber = nationalIdNumber;
	}
}

module.exports = GuestDto;