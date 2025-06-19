import { assert, expect } from "chai";
import { printDeckOfCards } from './deckOfCards.js';


describe("Checking cards", () => {
    it("should print correct deck", () => {
        const log = [];
        const originalLog = console.log;
        console.log = (msg) => log.push(msg);

        printDeckOfCards(['AS', '10D', 'KH', '2C']);

        console.log = originalLog;

        expect(log[0]).to.equal("A♠ 10♦ K♥ 2♣");
    });

    it("should print invalid card message", () => {
        const log = [];
        const originalLog = console.log;
        console.log = (msg) => log.push(msg);

        printDeckOfCards(['5S', '3D', 'QD', '1C']);

        console.log = originalLog;

        expect(log[0]).to.equal("Invalid card: 1C");
    });
});