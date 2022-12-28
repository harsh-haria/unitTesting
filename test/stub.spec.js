let { expect } = require("chai");
let sinon = require("sinon");
var Student = require("../controllers/studentCtrl");

var studentObj = new Student();

describe("function return check", function () {
	it("should get totalMarks properly", () => {
		var stubObject = sinon.stub(studentObj, "getExternal");
		stubObject.withArgs(40).returns(5);
		expect(studentObj.finalMarks(40)).to.be.equal(54);
	});
});
