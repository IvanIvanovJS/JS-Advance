import { expect } from "chai"
import { createCalculator } from "./addSubtract.js"

describe("testing function add subtract with inner functions", () => {
    it("should return 0", () => {
        let result = createCalculator();
        expect(result.get()).to.be.equal(0)
    })
    it("should return 1 with add function", () => {
        let result = createCalculator();
        result.add(1)
        expect(result.get()).to.be.equal(1)
    })
    it("should return -1 with subtract function", () => {
        let result = createCalculator();
        result.subtract(1)
        expect(result.get()).to.be.equal(-1)
    })
    it("should return NaN with non Intiger input", () => {
        let result = createCalculator();
        result.add("abc")
        expect(result.get()).to.be.NaN
    })
    it("should return 0", () => {
        let result = createCalculator();
        result.add(1)
        result.subtract(1)
        expect(result.get()).to.be.equal(0)
    })
    it("should return -1 with string number", () => {
        let result = createCalculator();

        result.subtract("1")
        expect(result.get()).to.be.equal(-1)
    })
    it("should return 1 with string number", () => {
        let result = createCalculator();

        result.add("1")
        expect(result.get()).to.be.equal(1)
    })
})