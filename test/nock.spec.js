let chai = require("chai");
let expect = chai.expect;
const nock = require("nock");
let chaiaspromised = require("chai-as-promised");

const Student = require("../controllers/studentCtrl");
const user = require("../controllers/userCtrl");

var student = new Student();

chai.use(chaiaspromised);

describe("---------------nock--------------", function () {
	it("should mock a api response", function (done) {
		var obj = {
			status: 200,
			message: "api data fetched correctly",
			data: [1, 2, 3, 4, 5],
		};
		const apiHit = nock("https://dummy.restapiexample.com/api/v1")
			.get("/employees")
			.reply(200, obj);
		this.timeout(0);
		student
			.thirdPartyApi()
			.then((data) => {
				// console.log(data);
				expect(data).to.be.equal(apiHit);
			})
			.catch((error) => {
				console.log("Error: " + error);
			});
		done();
	});
});
