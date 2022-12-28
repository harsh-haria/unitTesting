let { expect } = require("chai");
let sinon = require("sinon");
var Student = require("../controllers/studentCtrl");

var studentObj = new Student();

describe("function return check", function () {
	it("test user function", () => {
		expect(studentObj.userId()).to.be.equal(12);
	});

	var spyObj = sinon.spy(studentObj, "getInfo");

	it("should count the function calls to 1", () => {
		// var spyObj = sinon.spy(studentObj, "getInfo");
		studentObj.home(5);
		expect(spyObj.callCount).to.be.equal(1);
	});

	it("check function arguments", () => {
		// var spyObj = sinon.spy(studentObj, "getInfo");
		studentObj.home(5);
		expect(spyObj.calledWith(5, 1)).to.be.true;
	});
});
