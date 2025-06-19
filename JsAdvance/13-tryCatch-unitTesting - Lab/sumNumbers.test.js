import { expect } from "chai"
import { sum } from "./sumNumbers.js"

describe("Testing sum function", () => {
    it("should accept an array and return 6", () => {
        expect(sum([1, 2, 3])).to.equal(6)
    })
    it("should accept array of string and return NaN", () => {
        expect(sum(["abc", "bca", "cba"])).to.be.NaN;
    })
    it("should accept array of string and numbers to return NaN", () => {
        expect(sum([1, 'bca', "cba"])).to.be.NaN;
    })

})