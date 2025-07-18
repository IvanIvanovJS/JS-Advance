function playingCards(face, suit) {
    const validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'].map(el => el.toString())
    const valiSuits = { 'S': "\u2660", 'H': "\u2665", 'D': "\u2666", 'C': "\u2663" }
    if (valiSuits.hasOwnProperty(suit) && validFaces.includes(face)) {
        return face + valiSuits[suit]
    } else {
        throw new Error()
    }

}
console.log(playingCards('1', 'S'));

