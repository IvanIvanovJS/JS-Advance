function printDeckOfCards(cards) {
    const result = [];
    if (!Array.isArray(cards)) {
        throw new TypeError("cards is not iterable");
    }

    for (const card of cards) {
        let face = card.slice(0, card.length - 1);
        let suit = card.slice(-1);

        try {
            result.push(createCard(face, suit));
        } catch (err) {
            return console.log(err.message);

        }
    }

    return console.log(result.join(` `));



    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            S: '\u2660', // ♠
            H: '\u2665', // ♥
            D: '\u2666', // ♦
            C: '\u2663'  // ♣
        };

        if (!validFaces.includes(face) || !validSuits[suit]) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return face + validSuits[suit]

    }


}
printDeckOfCards(['5S', '3D', 'QD', '1C'])



export { printDeckOfCards }
