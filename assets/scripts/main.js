let dieRolls = [];

let rollDice = document.querySelector("#rollBtn");
let numDice = document.querySelector("#diceNum");
let totalDiceRolls = document.querySelector("#diceTotal");
let showRolls = document.querySelector("#allRollsBtn")
let diceList = document.querySelector("#rollsList");
let resetButton = document.querySelector("#resetBtn");

function diceImg(num){
  let imgElement = document.createElement('img')
  imgElement.src = `./assets/images/Dice-${num}-b.svg.png`
  imgElement.alt = "picture of a dice"
  imgElement.width = 30
  return imgElement

}


// Pulled from mdn docs
function getDiceResult(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function arraySum(total, num) {
  return total + num;
}

rollDice.addEventListener("click", function () {
  let numberOfDice = numDice.value;
  for (let index = 0; index < numberOfDice; index++) {
    dieRolls.push(getDiceResult(1,6));
  }

  let diceTotal = dieRolls.reduce(arraySum);
  totalDiceRolls.innerHTML = diceTotal
  console.log(numberOfDice)
  console.log(`DieRolls ${dieRolls}`)
  console.log(`DiceTotal ${diceTotal}`)
});

showRolls.addEventListener("click", function () {
  rollsList.innerHTML = "";
  // document.querySelectorAll("li").forEach(e => e.parentNode.removeChild(e));
  for (let index = 0; index < dieRolls.length; index++) {
    let newLi = document.createElement('li')
    diceList.append(newLi)
    newLi.append(dieRolls[index] + " = ")
    newLi.append(diceImg(dieRolls[index]))
    
  }
  console.log(diceList)
});

resetButton.addEventListener("click",function(){
    console.log("reset button")
    dieRolls = [];
    totalDiceRolls.innerHTML = "___";
    // document.querySelectorAll("li").forEach(e => e.parentNode.removeChild(e));
    rollsList.innerHTML = ""; 
    numDice.value = "";
});

/*
Just getting this to work like it did in the class. Leaving the append above for actual functionality.
*/

// showRolls.addEventListener("click", function () {
//   document.querySelectorAll("li").forEach(e => e.parentNode.removeChild(e));
//   for (let index = 0; index < dieRolls.length; index++) {
//     let numberRolled = dieRolls[index];
//     let diceImage = `<img src="./assets/images/Dice-${dieRolls[index]}-b.svg.png" alt="picture of a dice" width="30"></img>`
//     const newDiceString='<li class="dice">'+numberRolled+ " = " + diceImage + "</li>";
//     diceList.innerHTML+= newDiceString
//   }
//   console.log(diceList)
// });

console.log(totalDiceRolls.innerHTML)