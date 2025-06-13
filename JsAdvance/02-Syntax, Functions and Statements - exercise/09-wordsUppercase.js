function wordsUppercase(str) {
    let upString = str.toUpperCase();
    let pattern = /[A-Za-z0-9]+/g;
    let match = upString.match(pattern).join(`, `);
    console.log(match);

}
wordsUppercase('Hi, how are you?')