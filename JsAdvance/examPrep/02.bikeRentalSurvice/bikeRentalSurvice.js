class BikeRentalService {

    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(arr) {
        class Bike {
            constructor(brand, qty, price) {
                this.brand = brand;
                this.qty = qty;
                this.price = price;
            }
        }
        let print = [];
        for (const element of arr) {
            let [brand, qty, price] = element.split(`-`)

            qty = Number(qty)
            price = Number(price)
            let existingBike = this.availableBikes.find((b) => b.brand === brand);
            let currentBike = new Bike(brand, qty, price)



            if (existingBike) {
                existingBike.qty += qty;
                if (existingBike.price < price) {
                    existingBike.price = price
                }
            } else {
                this.availableBikes.push(currentBike)
                print.push(brand)
            }

        }
        return `Successfully added ${print.join(`, `)}`;
    }
    rentBikes(selectedBikes) {
        let totalPrice = 0;
        let available = true;
        for (const element of selectedBikes) {
            let [brand, qty] = element.split(`-`)
            qty = Number(qty)

            let searchedBike = this.availableBikes.find((b) => b.brand === brand);

            if (!searchedBike || searchedBike.qty < qty) {
                available = false

            } else {
                totalPrice += qty * searchedBike.price
                searchedBike.qty -= qty
            }

        }
        if (available) {

            return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
        } else {
            return "Some of the bikes are unavailable or low on quantity in the bike rental service."

        }


    }
    returnBikes(returnedBikes) {
        let matching = true;
        for (const element of returnedBikes) {
            let [brand, qty] = element.split(`-`)
            let returnedBike = this.availableBikes.find((b) => b.brand === brand);
            if (!returnedBike) {
                matching = false;
                return "Some of the returned bikes are not from our selection."
            }
        }
        if (matching) {
            for (const element of returnedBikes) {
                let [brand, qty] = element.split(`-`)
                qty = Number(qty)
                let searchedBike = this.availableBikes.find((b) => b.brand === brand);
                searchedBike.qty += qty
            }
            return "Thank you for returning!"
        }
    }
    revision() {
        let print = []
        this.availableBikes.sort((a, b) => a.price - b.price)
        for (const element of this.availableBikes) {
            let currentLine = `${element.brand} quantity:${element.qty} price:$${element.price}`
            print.push(currentLine)

        }


        return `Available bikes:\n${print.join(`\n`)}\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`
    }
}