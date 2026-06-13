// Iteration methods
//Iteration methods are array methods that run a function for each element in an array

//  1.array.map() [ creates a new array by performing an operation on every element ]
// examples
//a.
let numbers = [1, 2, 3, 4];
let result = numbers.map(function(num){
   return num * 2;
});
console.log(result);

//b.
var marks = [35,25,28,70,52];
var results = marks.map(mark => mark + 5);
console.log(results);



// 2. array.filter() [ returns only the elements that satisfy a condition. ]
// examples
//a.
let number = [1, 2, 3, 4, 5, 6];
let even = number.filter(function(num){
   return num % 2 === 0;
});
console.log(even);

//b.
var scores = [52,16,54,81,29,25,35];
var win = scores.filter(score => score>=35);
console.log(win);



// 3. array.reduce()  [ reduces all array elements into a single value ]
// examples
//a.
let points = [10, 20, 30];
let total = points.reduce(function(sum, num){
   return sum + num;
}, 0);
console.log(total);

//b.
let notes = [24,21,41,14];
let totals = notes.reduce((sum,note) => sum+note , 0);
console.log(totals);



//4. array.forEach() [ runs a function for every element in an array ]
//It does not return a new array.
// examples
//a.
let fruits = ["Apple", "Orange", "Mango"];
fruits.forEach(function(fruit){
   console.log(fruit);
});

//b.
let students = ["Ali", "John", "Sara"];
students.forEach(name => {
   console.log(name);
});