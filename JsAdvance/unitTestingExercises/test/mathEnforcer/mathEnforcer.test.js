import { expect } from "chai"
import { mathEnforcer } from "./mathEnforcer.js"

describe("mathEnforcer", function () {
    describe("addFive", function () {
        it("should return 10 with addFive(5)", () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
        })
        it("should return undefined with argument string", () => {
            expect(mathEnforcer.addFive("5")).to.be.equal(undefined)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.addFive(5.55)).to.be.closeTo(10.55, 0.01)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.addFive(-5.55)).to.be.closeTo(-0.55, 0.01)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.addFive(-4)).to.be.equal(1)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.addFive()).to.be.equal(undefined)
        })


    })
    describe("subtract", function () {
        it("should return -5 ", () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5)
        })
        it("should return undefined with argument string", () => {
            expect(mathEnforcer.subtractTen("5")).to.be.equal(undefined)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.subtractTen(5.55)).to.be.closeTo(-4.45, 0.01)
        })
        it("should return floating with argument floating", () => {

            expect(mathEnforcer.subtractTen(10.001)).equal(10.001 - 10)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.subtractTen(11)).to.be.equal(1)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.subtractTen()).to.be.equal(undefined)
        })

    })
    describe("sum", function () {
        it("should return undefined", () => {
            expect(mathEnforcer.sum(5, "5")).to.be.equal(undefined)
        })
        it("should return undefined with argument string", () => {
            expect(mathEnforcer.sum("5", 5)).to.be.equal(undefined)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(5.55, 4.45)).to.be.closeTo(10, 0.01)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(10, -20)).to.be.equal(-10)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(5.55, 4)).to.be.closeTo(9.55, 0.01)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(-20, -20)).to.be.equal(-40)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(-20, 20)).to.be.equal(0)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(-20, 10)).to.be.equal(-10)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(-5.55, 4)).to.be.closeTo(-1.55, 0.01)
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(undefined, 5)).to.be.equal(undefined);
            expect(mathEnforcer.sum(5)).to.be.equal(undefined);
        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(0, 0)).to.be.equal(0)

        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum(0)).to.be.equal(undefined)

        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum()).to.be.equal(undefined)

        })
        it("should return floating with argument floating", () => {
            expect(mathEnforcer.sum("1", "1")).to.equal(undefined);


        })
    })
})