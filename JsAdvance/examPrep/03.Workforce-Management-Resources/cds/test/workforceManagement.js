import { expect, assert } from "chai";
import { workforceManagement } from "../workforceManagement.js"

describe("workforceManagement testing", () => {
    describe("recruitStaff", () => {

        it("Should throw an error", () => {
            expect(() => workforceManagement.recruitStaff("gosho", "teacher", 5))
                .to.throw(Error, `We are not currently hiring for this role.`)
        })
        it("Should hire the employee expirience >= 4", () => {
            let name = "Gosho"
            let role = "Developer"
            let expirience = 4;
            expect(workforceManagement.recruitStaff(name, role, expirience))
                .to.equal(`${name} has been successfully recruited for the role of ${role}.`)


        })
        it("Should hire the employee expirience >= 4", () => {
            let name = "Gosho"
            let role = "Developer"
            let expirience = 10;
            expect(workforceManagement.recruitStaff(name, role, expirience))
                .to.equal(`${name} has been successfully recruited for the role of ${role}.`)

        })
        it("Shouldn't hire the employee expirience < 4", () => {
            let name = "Gosho"
            let role = "Developer"
            let expirience = 0;
            expect(workforceManagement.recruitStaff(name, role, expirience))
                .to.equal(`${name} is not suitable for this role.`)

        })
    })
    describe("computeWages", () => {
        it("should return Invalid Hours => input != number", () => {
            expect(() => workforceManagement.computeWages("12")).to.throw(Error, "Invalid hours")
        })
        it("should return Invalid Hours => input negative number", () => {
            expect(() => workforceManagement.computeWages(-1)).to.throw(Error, "Invalid hours")
        })
        it("should return 4398", () => {
            expect(workforceManagement.computeWages(161)).to.equal(4398)
        })
    })
    describe("dismissEmployee", () => {
        it("should throw an error negative index", () => {
            expect(() => workforceManagement.dismissEmployee(["Ivan", "Dragan"], -1)).to.throw(Error, "Invalid input")
        })
        it("should throw an error not array", () => {
            expect(() => workforceManagement.dismissEmployee("Ivan", 1)).to.throw(Error, "Invalid input")
        })
        it("should throw an error index out of array length", () => {
            expect(() => workforceManagement.dismissEmployee(["Ivan", "Dragan", "Gosho"], 3)).to.throw(Error, "Invalid input")
        })
        it("should throw an error index is decimal", () => {
            expect(() => workforceManagement.dismissEmployee(["Ivan", "Dragan", "Gosho"], 1.5)).to.throw(Error, "Invalid input")
        })
        it("should return string", () => {
            expect(workforceManagement.dismissEmployee(["Ivan", "Dragan", "Gosho"], 1)).to.equal("Ivan, Gosho")
        })
    })
})
