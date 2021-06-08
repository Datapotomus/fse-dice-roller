let dieRolls = [];

let rollDice = document.querySelector("#rollBtn");
let showRolls = document.querySelector("#allRollsBtn")
let diceList = document.querySelector("#rollsList");

function diceImg(num){
  let imgElement = document.createElement('img')
  imgElement.src = `./assets/images/Dice-${num}-b.svg.png`
  imgElement.alt = "picture of a dice"
  imgElement.width = 30
  return imgElement

}


// Pulled from mdn docs
function getDiceResult() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function arraySum(total, num) {
  return total + num;
}

rollDice.addEventListener("click", function () {
  let numberOfDice = document.querySelector("[name=dNum]").value;
  for (let index = 0; index < numberOfDice; index++) {
    dieRolls.push(getDiceResult());
  }

  let diceTotal = dieRolls.reduce(arraySum);
  document.querySelector("#diceTotal").innerHTML = diceTotal
  console.log(numberOfDice)
  console.log(`DieRolls ${dieRolls}`)
  console.log(`DiceTotal ${diceTotal}`)
});

showRolls.addEventListener("click", function () {
  document.querySelectorAll("li").forEach(e => e.parentNode.removeChild(e));
  for (let index = 0; index < dieRolls.length; index++) {
    let newLi = document.createElement('li')
    diceList.append(newLi)
    newLi.append(dieRolls[index] + " = ")
    newLi.append(diceImg(dieRolls[index]))
    
  }
  console.log(diceList)
});




console.log(document.querySelector("#diceTotal").innerHTML)


