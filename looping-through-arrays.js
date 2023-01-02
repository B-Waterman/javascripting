const pets = ['cat', 'dog', 'rat']; //assigns array of animals to variable 'pet'
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's'
}; //adds plural 's' to each value in the array
console.log(pets); //prints 'cats, dogs, rats' to console