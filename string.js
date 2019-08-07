
// 1- Remove the commas from the string and replace them with spaces.

const myString = "hello,this,is,a,difficult,to,read,sentence";
console.log (myString.length);

let newStr = myString.replace(/,/gi, " ");
console.log(newStr);

// 2- Find a way to reverse this string so that it becomes readable.

const str = 'dlroW olleH';
newStr = str.split('').reverse().join('');
console.log(newStr);


