import { expect, should } from "chai";
import { medicalCheckup } from "../medicalCheckup.js"

describe("medicalCheckup", () => {
    describe("scheduleAppointment", () => {
        //scheduleAppointment(patientsCount, costPerPatient, clinicLocation)
        it("should throw error", () => {
            expect(() => medicalCheckup.scheduleAppointment("1", 1, "clinicLocation")).to.throw(Error, "Invalid Information!")
            expect(() => medicalCheckup.scheduleAppointment(1, "1", "clinicLocation")).to.throw(Error, "Invalid Information!")
            expect(() => medicalCheckup.scheduleAppointment(1, 1, 1)).to.throw(Error, "Invalid Information!")
        })
        it("should return smth", () => {
            expect(medicalCheckup.scheduleAppointment(30, 50, "Sofia")).to.be.equal(`This clinic meets the requirements, with capacity for 30 patients at 50$ per checkup.`)
            expect(medicalCheckup.scheduleAppointment(29, 50, "Sofia")).to.be.equal(`This clinic does not meet your requirements!`)
            expect(medicalCheckup.scheduleAppointment(29, 49, "Sofia")).to.be.equal(`This clinic does not meet your requirements!`)
            expect(medicalCheckup.scheduleAppointment(29, 51, "Sofia")).to.be.equal(`This clinic does not meet your requirements!`)
        })
        it("shoud trhow Error", () => {
            expect(() => medicalCheckup.scheduleAppointment(30, 50, "Sofiaa")).to.throw(Error, `The location of this clinic is not in the correct city!`)
        })
    })
    //additionalServices(labTests, consultations, hasInsurance)
    describe(`additionalServices`, () => {
        it("should throw error", () => {
            expect(() => medicalCheckup.additionalServices("lab", ["test"], true)).to.throw(Error, "Invalid Information!")
            expect(() => medicalCheckup.additionalServices(["lab"], "test", true)).to.throw(Error, "Invalid Information!")
            expect(() => medicalCheckup.additionalServices(["lab"], ["test"], "true")).to.throw(Error, "Invalid Information!")
        })
        it("should return smth", () => {
            expect(medicalCheckup.additionalServices(["blood", "urine"], ["general", "specialist"], false)).to.be.equal(`You spend 335$ for lab tests and consultations!`)
            expect(medicalCheckup.additionalServices(["blood", "urine"], ["general", "specialist"], true)).to.be.equal(`You spend 268$ for lab tests and consultations with 20% insurance discount!`)
        })
    })
    //roomDistribution(patients, rooms)
    describe("roomDistribution", () => {
        it("should throw error", () => {
            expect(() => medicalCheckup.roomDistribution("1", 1)).to.throw(Error, "Invalid Information!")
            expect(() => medicalCheckup.roomDistribution(1, "1")).to.throw(Error, "Invalid Information!")
            expect(() => medicalCheckup.roomDistribution(0, 1)).to.throw(Error, "Invalid Information!")
            expect(() => medicalCheckup.roomDistribution(1, 0)).to.throw(Error, "Invalid Information!")
        })
        it('should return smth', () => {
            expect(medicalCheckup.roomDistribution(17, 4)).to.equal(`You have 4 rooms with 4 patients in each room.`)
            expect(medicalCheckup.roomDistribution(6, 4)).to.equal(`There is only 2 patient in every room, consider rearranging.`)
        })
    })
})