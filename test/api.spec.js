const chai = require("chai");

const expect = chai.expect;

var student = require("../controllers/userCtrl");

var server = require("../index");

let chaihttp = require("chai-http");

chai.use(chaihttp);

describe("Task Api", function () {
	it("get user", function (done) {
		chai
			.request(server)
			.get("/user")
			.end((err, response) => {
				expect(response.status).to.be.equal(200);
				expect(response.body).to.have.all.keys("message", "temp", "number");
			});
		done();
	});
});
