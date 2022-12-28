let { expect } = require("chai");
let sinon = require("sinon");
var Student = require("../controllers/studentCtrl");

var studentObj = new Student();

describe("-------------Mock--------------", function () {
	it("Successfully mock the student class and verify getExternal function", () => {
		var mock = sinon.mock(studentObj);
		var expt = mock.expects("getExternal");
		expt.exactly(1);
		expt.withArgs(42);
		studentObj.getExternal(42);
		mock.verify();
	});
});
