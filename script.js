let containter = document.getElementById('diceBox');

let generateDie = document.getElementById('newDice');

let total = document.getElementById('sum');

let rollDice = document.getElementById('rollDice');

let myDice = []

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Die {
    constructor() {

        this.dice = document.createElement('div');
        this.dice.classList.add('dice')
        diceBox.appendChild(this.dice);
        this.roll();
        this.dice.addEventListener('click', () => {
            this.roll();
        })
        this.dice.addEventListener('dblclick', () => {
            this.del();

        })

    }

    roll() {
        this.value = randomVal(1, 7);
        let dText = document.createTextNode(`${this.value}`);
        this.dice.innerHTML = '&#' + (9855 + this.value) + ';';
    }

    del() {
        for (let i = 0; i < myDice.length; i++) {
            let die = myDice[i];

            if (die === this) {
                myDice.splice(i, 1);
            }
        }

        diceBox.removeChild(this.dice);
    }

}

rollDice.addEventListener('click', function () {
    for (let i = 0; i < myDice.length; i++) {
        myDice[i].roll();
    }

});

generateDie.addEventListener('click', makeDie);

function makeDie() {
    let dice = new Die();
    myDice.push(dice);
}


total.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < myDice.length; i++) {
        sum += myDice[i].value;
    };
    alert(`The Sum of these is ${sum}`)

})


