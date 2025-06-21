import { expect, should } from "chai";
import { foodDelivery } from "../03.Food-Delivery_Resources/foodDelivery.js"

describe(`foodDelivery`, () => {
    describe("getCategory function", () => {
        it("input Vegan", () => {
            expect(foodDelivery.getCategory("Vegan")).to.be.equal("Dishes that contain no animal products.")
        })
        it("input Vegeterian", () => {
            expect(foodDelivery.getCategory("Vegetarian")).to.be.equal("Dishes that contain no meat or fish.")
        })
        it("input Gluten-free", () => {
            expect(foodDelivery.getCategory("Gluten-Free")).to.be.equal("Dishes that contain no gluten.")
        })
        it("input All", () => {
            expect(foodDelivery.getCategory("All")).to.be.equal("All available dishes.")
        })
        it("Throw Error", () => {
            expect(() => foodDelivery.getCategory("w")).to.throw(Error, "Invalid Category!")
        })
    })
    describe("addMenuItem function", () => {
        it("should throw Error", () => {
            expect(() => foodDelivery.addMenuItem("qwe", 6)).to.throw(Error, "Invalid Information!")
            expect(() => foodDelivery.addMenuItem(["test1", "test2", "test3", "test4"], "2")).to.throw(Error, "Invalid Information!")
            expect(() => foodDelivery.addMenuItem([], 6)).to.throw(Error, "Invalid Information!")
            expect(() => foodDelivery.addMenuItem(["test1", "test2", "test3", "test4"], 4)).to.throw(Error, "Invalid Information!")
        })
        it("should return array length", () => {
            expect(foodDelivery.addMenuItem([{ name: "Test1", price: 5 }], 6)).to.equal(`There are 1 available menu items matching your criteria!`)
            expect(foodDelivery.addMenuItem([{ name: "Test1", price: 100 }, { name: "Test2", price: 100 }], 100)).to.equal(`There are 2 available menu items matching your criteria!`)
        })
    })
    describe("calculateOrderCost function", () => {
        it("should throw Error", () => {
            expect(() => foodDelivery.calculateOrderCost("test", ["test"], true)).to.throw(Error, "Invalid Information!")
            expect(() => foodDelivery.calculateOrderCost(["test"], "test", true)).to.throw(Error, "Invalid Information!")
            expect(() => foodDelivery.calculateOrderCost(["test"], ["test"], 1)).to.throw(Error, "Invalid Information!")
        })
        it("shoud return total sum", () => {
            expect(foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], true)).to.be.equal("You spend $10.63 for shipping and addons with a 15% discount!")
            expect(foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], false)).to.be.equal("You spend $12.50 for shipping and addons!")
        })
    })
})