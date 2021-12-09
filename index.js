function writeCards(names) {
    const cards = [];

    for (let i = 0; i <= 2; i++) {
        cards.push("Thank you, " + names[i] + ", for the wonderful surprise gift!");
    }

    return cards;
};

writeCards(names);


function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number--);
        debugger;
    }
};

countDown(10);