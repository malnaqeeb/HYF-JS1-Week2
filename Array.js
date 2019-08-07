const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

// 1- Add a statement that adds your favorite animal say 'turtle' to the existing array.
favoriteAnimals.push('turtle');

// 2- Explanation: push() method it be used to add element to the end of the array 
//                 so the new array will be: ["blowfish", "capricorn", "giraffe", "turtle"]

// 3- Log the new array.
console.log(favoriteAnimals);

// 4- Add another animal to the array after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1,0,"Tiger");
// 5- Explanation: The arguments (1 , 0 , "tiger") means:
//                 - At index position 1, remove 0 elements, then add "Tiger" to that position
//                 - The element "capricorn" will be moved to index position 2, giraffe to 3 and turtle to 4

// 6- Log the new array.
console.log(favoriteAnimals);

// 7- Delete 'giraffe' from the array.
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);