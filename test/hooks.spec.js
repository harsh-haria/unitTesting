const chai = require("chai");
const expect = chai.expect;

describe("=========Heading 1=========", function () {
	//it allows functions like skip and only. Implementation below.\
	//skip and only can also be used with descibe.
	/*
        it.skip('some text', function(){

        });
        it.only('some text', function(){

        });
    */

	//before, beforeEach, afterEach and after; All are called hooks!
	//as the name suggests, they are called on a particular event!
	before(function () {
		console.log("before called!");
	});

	afterEach(function () {
		console.log("after every function called!");
	});

	beforeEach(function () {
		console.log("before every function called!");
	});

	after(function () {
		console.log("after called!");
	});

	var data = "pikachu";

	it("hould allow hooks1", function () {
		expect(data).to.be.a("string");
	});

	it("should match with the data1", function () {
		expect(data).to.be.equal("pikachu");
	});
});

describe.skip("=========Heading 2=========", function () {
	var data = "bird";

	it("hould allow hooks2", function () {
		expect(data).to.be.a("number");
	});

	it("should match with the data2", function () {
		expect(data).to.be.equal("pikachu");
	});
});

describe("=========Heading 3=========", function () {
	var data = 1;

	it("should allow hooks3", function () {
		expect(data).to.be.a("number");
	});

	it.skip("should match with the data3", function () {
		expect(data).to.be.equal(1);
	});
});
