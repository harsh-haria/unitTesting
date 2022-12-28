const { expect } = require("chai");
describe("--------General methods--------", () => {
	describe("Array Methods", () => {
		let newArray = [1, 2, 3];
		it("should be an array", () => {
			expect(newArray).to.be.an("array");
		});
		it("Should have index matching", () => {
			expect(newArray.indexOf(2)).to.equal(1);
		});
	});

	describe("String Methods", () => {
		it("should be an string", () => {
			let newString = "Pikachu!";
			expect(newString).to.be.a("string");
		});
	});

	describe("object Methods", () => {
		let user1 = {
			name: "harsh",
			age: 23,
			number: {
				countryCode: 91,
				mobile: [1231231234],
			},

			status: true,
		};
		it("should have an property named age", () => {
			expect(user1).to.have.property("age", 23);
		});
		it("api object should match", () => {
			expect(user1).to.have.all.keys("name", "age", "number", "status");
		});
		it("there should be more than 2 phone numbers", () => {
			expect(user1).to.have.nested.property("number.mobile[0]");
		});
		it("mobile number contains country code", () => {
			expect(user1).to.have.nested.include({ "number.countryCode": 91 });
		});
	});
});
