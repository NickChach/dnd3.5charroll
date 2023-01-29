const rollButton = document.querySelector("button");

function rollD6() {
  const d6 = Math.floor(Math.random() * 6) + 1;
  return d6;
}

function roll4D6() {
  const fourD6 = [];
  for (let i = 0; i < 4; i++) {
    const die = rollD6();
    fourD6.push(die);
  }
  return fourD6;
}

function dropLowestD6() {
  const dice = roll4D6();
  dice.sort();
  dice.shift();
  return dice;
}

function addRemainingD6() {
  const dice = dropLowestD6();
  const sum = dice.reduce((total, die) => {
    return total + die;
  }, 0);
  return sum;
}

function rollAbilities() {
  const scores = [];
  for (let i = 0; i < 6; i++) {
    const score = addRemainingD6();
    scores.push(score);
  }
  return scores;
}
