import { expect } from "chai"
import { lookupChar } from "./charLookup.js"

describe("testing charAt funciton", () => {
    it("should return undefiend with non-string first argument", () => {
        expect(lookupChar(123, 2)).to.be.equal(undefined)
    })
    it("should return undefiend without intiger as second argument", () => {
        expect(lookupChar("123", "123")).to.be.equal(undefined)
    })
    it("should return incorrect index with integer as second argument bigger than first argument length", () => {
        expect(lookupChar("text", 4)).to.be.equal("Incorrect index")
    })
    it("should return incorrect index with integer as second argument bigger than first argument length", () => {
        expect(lookupChar("text", 25)).to.be.equal("Incorrect index")
    })
    it("should return incorrect index with negative intiger as second argument", () => {
        expect(lookupChar("text", -1)).to.be.equal("Incorrect index")
    })
    it("should return t with correct arguments", () => {
        expect(lookupChar("text", 3)).to.be.equal("t")
    })
    it("should return undefiend with floating number", () => {
        expect(lookupChar("text", 2.55)).to.be.equal(undefined)
    })
    it("should return undefiend without arguments", () => {
        expect(lookupChar()).to.be.equal(undefined)
    })
    it("should return Incorrect index", () => {
        expect(lookupChar("1", 1)).to.be.equal("Incorrect index")
    })
    it("should return Incorrect index", () => {
        expect(lookupChar("", 0)).to.be.equal("Incorrect index")
    })
    it("should return 0", () => {
        expect(lookupChar("0", 0)).to.be.equal("0")
    })
    it("should return undefined if second arg is boolean", () => {
        expect(lookupChar("test", true)).to.be.equal(undefined)
    })
    it("should return Incorrect index with empty string and negative index", () => {
        expect(lookupChar("", -1)).to.be.equal("Incorrect index");
    })
    it("should return undefined if index is NaN", () => {
        expect(lookupChar("abc", NaN)).to.be.equal(undefined);
    })
    it("should return undefined if input is array", () => {
        expect(lookupChar(["text"], 2)).to.be.equal(undefined);
    })
    it("should return undefined if input is object", () => {
        expect(lookupChar({ text: "text" }, 2)).to.be.equal(undefined);
    })
    it("should return h", () => {
        expect(lookupChar("hello", 0)).to.be.equal("h");
    })
    it("should return l", () => {
        expect(lookupChar("hello", 3)).to.be.equal("l");
    })

})