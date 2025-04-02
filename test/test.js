import { expect } from "chai"; // Import Chai's assertion library to use "expect" for making assertions
import calculateTax from "../taxCalculator.js"; // Import the calculateTax function that we will be testing
// Import Mocha's describe and it functions for structuring our tests
import { describe, it } from "mocha";

/* 
    Pair Programming:
    Worked with Timothy Christian Waniaye and Bridget Tino
*/

// Grouping our test cases for the Tax Calculator function using Mocha's `describe`
describe("Tax Calculator Function", function () {

    // Test Case 1: Check if earnings below 12000 return 0 tax
    it("should return 0 for earnings below 12000", function () {
        // Test that a tax of 0 is returned for earnings below 12000
        expect(calculateTax(11000)).to.equal(0); // Expected tax is 0
    });

    // Test Case 2: Check if earnings of 24000 result in a 20% tax
    it("should return 2400 for earnings of 24000 (20% tax)", function () {
        // Test that earnings of 24000 will have 20% tax applied, which is 2400
        expect(calculateTax(24000)).to.equal(2400); // Expected tax is 2400 (20% of the amount above 12000)
    });

    // Test Case 3: Check if earnings of 40,000 return a tax of 8800 (20% for the first 24,000 and 40% for the remainder)
    it("should return 8800 for earnings of 40,000", function () {
        // Test that earnings of 40,000 will have 20% tax applied to the first 24,000 and 40% tax on the remaining 16,000
        expect(calculateTax(40000)).to.equal(8800); // Expected tax is 8800
    });

    // Test Case 4: Check if exactly 12000 earnings return 0 tax
    it("should return 0 for exactly 12000", function () {
        // Test that 12000 earnings return no tax, since it's the threshold for the tax bracket
        expect(calculateTax(12000)).to.equal(0); // Expected tax is 0
    });

    // Test Case 5: Check if exactly 36000 earnings return 4800 tax
    it("should return 4800 for exactly 36000 earnings", function () {
        // Test that earnings of 36000 result in tax of 4800, as 20% is applied to the first 24000 and 40% on the remaining 12000
        expect(calculateTax(36000)).to.equal(4800); // Expected tax is 4800
    });

});
