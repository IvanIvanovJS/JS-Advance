import { expect } from "chai"
import { isOddOrEven } from "./evenOrOdd.js"

describe("oddOrEven testing function", () => {
    it("should return undefined", () => {
        expect(isOddOrEven(123)).to.be.equal(undefined)
    })
    it("should return even", () => {
        expect(isOddOrEven("as")).to.be.equal("even")
    })
    it("should return odd", () => {
        expect(isOddOrEven("123")).to.be.equal("odd")
    })
})