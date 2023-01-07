let chai = require("chai");
let expect = chai.expect;

let chaiaspromised = require("chai-as-promised");

const Student = require("../controllers/studentCtrl");
const user = require("../controllers/userCtrl");

var student = new Student();

chai.use(chaiaspromised);

describe("------------Promise------------", () => {
	it("should return return right data from the promise (then)", function (done) {
		// this.timeout(3000); //this will ensure that the promise you are waiting for does not take too much time;
		this.timeout(0); //this removes the time restriction of 2000 ms set by default;
		student.getDataWithTimeout().then(function (data) {
			expect(data).to.be.equal(10);
			done(); //returns time;
		});
	});

	it("should return return right data from the promise (traditional way)", async () => {
		let data = await student.getData();
		expect(data).to.be.equal(10);
	});

	it("should return return right data from the promise (chaiaspromised)", async () => {
		expect(student.getData()).to.eventually.equal(10);
		//return gives you the time taken by the promise;
	});

	it("should return a otp property", function () {
		this.timeout(0);
		expect(user.getOtp()).to.eventually.have.deep.property("otp");
	});
});
