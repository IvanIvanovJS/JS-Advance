import { expect } from "chai";

import { isSymmetric } from "./checkForSymetry.js"

describe("checking for symetric array", () => {
    it("should return false for non array input", () => {
        expect(isSymmetric(123, "abc")).to.be.equal(false)
    })
    it("should return false for non symetric array", () => {
        expect(isSymmetric([123, "abc"])).to.be.equal(false)
    })
    it("should return true for  symetric array", () => {
        expect(isSymmetric(["abc", "abc"])).to.be.equal(true)
    })
    it("should return true for  symetric array", () => {
        expect(isSymmetric([])).to.be.equal(true)
    })
    it("should return false for non symetric array", () => {
        expect(isSymmetric([[0, "abc"], ["abc", 0]], [[0, "abc"], ["abc", 0]])).to.be.equal(false)
    })
    it("returns true for ['a', 2, {}, 2, 'a']", () => {
        expect(isSymmetric(['a', 2, {}, 2, 'a'])).to.be.true;
    });
})