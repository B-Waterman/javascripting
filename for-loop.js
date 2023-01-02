let total = 0; //use let here as total is meant to change every loop.
const limit = 10; //use const here as the loop will not go past 10.
for (let i = 0; i < limit; i++) {
  total += i //add +1 to total every loop.
};

console.log(total); //should print numbers 1 through 10