let containter = document.getElementById('diceBox');
let generateDie = document.getElementById('newDice');

class Die {
    constructor(){
    this.dice = document.createElement('div');
    this.dice.classList.add('dice')
    diceBox.appendChild(this.dice);


    }
}


generateDie.addEventListener('click', makeDie);

function makeDie(){
let dice = new Die;
} 

