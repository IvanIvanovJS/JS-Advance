function filtering(Jsondata, criteria) {
    let data = JSON.parse(Jsondata);
    if (criteria === "all") {
        console.log(print(data));

    } else {
        let [filtter, match] = criteria.split(`-`);
        let result = data.filter(el => el[filtter] === match);
        console.log(print(result));

    }

    function print(data) {

        let result = [];
        for (const employee of data) {
            result.push(`${result.length}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
        }
        return result.join(`\n`)
    }
}


filtering(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
)