import { expect } from "chai"; // Import Chai's assertion library
import calculateTax from "../taxCalculator.js"; // Import the function to test
// Import Mocha's describe and it functions for test structuring
import { describe, it } from "mocha";


describe("Tax Calculator Function", function () {
    it("should return 0 for earnings below 12000", function () {
        expect(calculateTax(11000)).to.equal(0);
    });

    it("should return 2400 for earnings of 24000 (20% tax)", function () {
        expect(calculateTax(24000)).to.equal(2400);
    });

    it("should return 8800 for earnings of 40,000", function () {
        expect(calculateTax(40000)).to.equal(8800);
    });


});
