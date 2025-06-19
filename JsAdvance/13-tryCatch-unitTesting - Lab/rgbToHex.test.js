import { expect } from "chai"
import { rgbToHexColor } from "./rgbToHex.js"


describe("rgb to hex testing", () => {
    it("should return undefined for red as bigger number than 255", () => {
        expect(rgbToHexColor(256, 120, 111)).to.be.undefined
    })
    it("should return undefined for blue as bigger number than 255", () => {
        expect(rgbToHexColor(211, 256, 111)).to.be.undefined
    })
    it("should return undefined for green as bigger number than 255", () => {
        expect(rgbToHexColor(211, 112, 256)).to.be.undefined
    })
    it("should return undefined for red as negative number", () => {
        expect(rgbToHexColor(-1, 120, 111)).to.be.undefined
    })
    it("should return undefined for blue as negative number", () => {
        expect(rgbToHexColor(11, -1, 111)).to.be.undefined
    })
    it("should return undefined for green as negative number", () => {
        expect(rgbToHexColor(1, 120, -111)).to.be.undefined
    })
    it("should return #01786F", () => {
        expect(rgbToHexColor(1, 120, 111)).to.be.equal("#01786F")
    })
    it("should return undefined for green as string", () => {
        expect(rgbToHexColor(1, 120, "115")).to.be.undefined
    })
    it("should return undefined for red as string", () => {
        expect(rgbToHexColor("abc", 120, "115")).to.be.undefined
    })
    it("should return undefined for array input", () => {
        expect(rgbToHexColor([1, 2, 3])).to.be.undefined
    })
    it("should return undefined for blue as string", () => {
        expect(rgbToHexColor(11, "120", 115)).to.be.undefined
    })
    it("should return undefined for empty input", () => {
        expect(rgbToHexColor()).to.be.undefined
    })
    it("should return #000000", () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000")
    })
    it("should return #FFFFFF", () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF")
    })

})
