//Testing acceptApplications
const SpaceAgency = result;
let space = new SpaceAgency("NASA", "Mars Exploration");

assert.equal(space.acceptApplications([
    "Neil Armstrong-Pilot-1200",
    "Margaret Hamilton-Engineer-800",
    "Mae Jemison-Biologist-700"
])
    , "You successfully added candidates: Neil Armstrong, Margaret Hamilton, Mae Jemison.");