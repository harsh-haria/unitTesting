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

	getInternal(total) {
		return total - 1;
	}

	getExternal(total) {
		return total + 1;
	}

	finalMarks(total) {
		var external = this.getExternal(total);
		var internal = this.getInternal(total);
		var finalSum = external + internal + 10;
		return finalSum;
	}

	getData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(10);
			}, 1500);
		});
	}

	getDataWithTimeout() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(10);
			}, 10000);
		});
	}
}

module.exports = Student;
