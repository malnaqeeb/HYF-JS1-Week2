console.log("Operators");
// 1- Mathematically, if a == b and b == c, then a == c. Can you explain in your words why this is not true for the following snippet?

//  0 == '0'; -> true
//  0 == [];  -> true
// "0" == []; -> false

// Explanation: 
//   - Equal (==) returns true if the operands are equal. it's compare the values.
//   - Every value has an inherent boolean value(truthy or falsy).
//      
//      *First Line: 
//       -  leftside is number and the value is 0 
//       -  Rightside is string but javascript convert it to number (which is 0)                          
//       -  So now both sides are numbers. As result the values are equal which returns (true)  

//      *Second line:
//       -  The empty array has inherited boolean value which is truthy.
//       -  Now the equality operator (which is implicit coercion ) wants to compare [] with number
//       -  The loose equality operator (==)use .toString() method to coerce empty array to an empty string which is coerced to zero 
//       -  In the leftside, we have zero
//          ->  0 == 0 return true
//       
//      *Third line:
//      -  The left side is a string and has an inherent boolean value which is truthy
//      -  The right side is an empty array and (as what happened in the second line) will be coerced to an empty string
//      -  now we have string "0" which is truthy compared to the empty string "" which is falsy 
//        -> which returns false  

// 2 - given the following: 
//    const x = [1, 2, 3];
//    const y = [1, 2, 3];
//    const z = y; 
//   What do you think will happen with (x == y , x === y ,  z === y, z ==  x)? 
//                
//      x ==  y 
//      x === y 
//      z === y 
//      z ==  x 
// Explanation: 
//      - Arrays are compared by their reference.
//      - That comparison checks if the array point to the same location in memory (if yes then returns true otherwise return false) 
//      - x & y are arrays with exactly the same elements and order but each one refer to diffierent instance.`
//          -> as a result ( x == y, x === y,  z == x) all returns false
//      - On the other hand y & z both refer to the same instance.
//          -> as a result (z === y) returns true


// 3- given the following: 
//const o1 = { foo: "bar" };
//const o2 = { foo: "bar" };
//const o3 = o2;

// - Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
// Explanation:
//Both o2 and o3 are pointing to the same object which means that change o2 will defently lead to change o3
//In the other hand o1 is another object and point to another location in the memory so the modifation of o1 doesn't  effect  o3

// - Does the order that you assign (o3 = o2 or o2 = o3) matter?
// Explanation:
//- const o3 = o2;
//      -> This statement is pointing 03 to o2 which is already declared and initialized.
//-  const 02 = 03; 
//      -> Means that we redelared a variable which is return SyntaxError
//-  o2 = o3 
//      -> Means that o2 is pointing to not declared object(03) which result in ReferenceError: s3 is not defined
