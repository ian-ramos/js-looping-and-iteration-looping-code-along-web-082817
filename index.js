// Code your solutions in this file
function random() {
  return Math.random() >= 0.5
}

function tailsNeverFails() {
  let count = 0
  while(random()) {
    count++
  }
  return `You got ${count} tails in a row!`
}

function printBadges(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}
