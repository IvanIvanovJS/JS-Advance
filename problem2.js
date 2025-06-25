class SpaceAgency {
    candidates = [];
    constructor(agency, mission) {
        this.agency = agency;
        this.mission = mission;
    }
    acceptApplications(applications) {
        class Candidate {
            constructor(name, education, flightHours) {
                this.name = name;
                this.education = education;
                this.flightHours = flightHours
            }
        }
        let printAdded = [];
        for (const element of applications) {
            let [name, education, flightHours] = element.split(`-`)
            flightHours = Number(flightHours)
            let currentCandidate = new Candidate(name, education, flightHours)
            let searchedCandidate = this.candidates.find((candidate) => candidate.name === name)

            if (searchedCandidate) {
                if (searchedCandidate.flightHours > flightHours) {
                    searchedCandidate.flightHours = flightHours
                }
            } else {
                printAdded.push(name)
                this.candidates.push(currentCandidate)
            }

        }
        return `You successfully added candidates: ${printAdded.join(`, `)}.`


    }
    chooseForMission(candidateInfo) {
        let [name, minFlightHours] = candidateInfo.split(`-`)
        minFlightHours = Number(minFlightHours)
        let searchedCandidate = this.candidates.find((candidate) => candidate.name === name)
        if (!searchedCandidate) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (searchedCandidate.flightHours < minFlightHours) {

                throw new Error(`${name} does not have enough flight hours for the ${this.mission} mission, minimum required is ${minFlightHours} hours.`)
            } else {
                searchedCandidate.flightHours = "selected"
                return `Congratulations, ${name} will participate in the ${this.mission} mission!`
            }
        }
    }
    trainingBonus(name) {
        let searchedCandidate = this.candidates.find((candidate) => candidate.name === name)
        if (!searchedCandidate) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (searchedCandidate.education === `Pilot`) {
                return `${name} will be trained by ${this.agency} as part of the ${this.mission} mission with a training bonus of $100,000!`
            } else if (searchedCandidate.education === `Engineer`) {
                return `${name} will be trained by ${this.agency} as part of the ${this.mission} mission with a training bonus of $120,000!`
            } else {
                return `${name} will be trained by ${this.agency} as part of the ${this.mission} mission with a training bonus of $80,000!`
            }
        }
    }

    candidatesReport() {
        if (this.candidates.length == 0) {
            throw new Error(`Candidate database is empty!`)
        }
        let print = [];
        this.candidates.sort((a, b) => a.name.localeCompare(b.name))
        print.push("Candidates list:")
        for (const element of this.candidates) {
            print.push(`${element.name}-${element.flightHours}`)
        }
        return print.join(`\n`)
    }

}
let agency = new SpaceAgency("NASA", "Mars Exploration");
console.log(agency.acceptApplications([
    "Neil Armstrong-Pilot-1200",
    "Margaret Hamilton-Engineer-800",
    "Mae Jemison-Biologist-700"
]));
console.log(agency.chooseForMission("Neil Armstrong-1000"));
console.log(agency.trainingBonus("Mae Jemison"));
console.log(agency.candidatesReport());
