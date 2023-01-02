const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //assigns array of numbers 1-10 to variable
const filtered = numbers.filter(function evenNumbers (number) {
  return (number % 2 === 0)
});
console.log(filtered);