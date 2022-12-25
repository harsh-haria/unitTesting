class Student {
	constructor() {}

	home(type) {
		let data;
		data += this.getInfo(type, 1);
		return data + 5;
	}

	getInfo(type, status) {
		return 10;
	}

	userId() {
		return 12;
	}
}

module.exports = Student;
