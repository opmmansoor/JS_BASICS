//Array Sort Methods  [ Sorting means arranging data in a specific order.]
//I. Alphabetic Sort
//1. Array sort() [ arranges array elements in alphabetical order by default ]
let fruits = ["Mango", "Apple", "Orange"];
fruits.sort();
console.log(fruits);


//2. Array reverse() [ reverses the order of array elements ]
let fruit = ["Apple", "Mango", "Orange"];
fruit.reverse();
console.log(fruit);


//3. Sorting Objects [when objects are inside an array, we sort based on a property ]
let students = [
  {name: "John", age: 25},
  {name: "Ali", age: 20},
  {name: "Sara", age: 22}
];
students.sort((a,b) => a.age - b.age);//Ascending
students.sort((a,b) => b.age - a.age);//Descending
students.sort((a,b) => a.name.localeCompare (b.name));//Name Alphabetical
students.sort((a,b) => b.name.localeCompare (a.name));//Reverse

console.log(students);


//II. Numeric Sort  [ sort numbers in an array in ascending or descending order. ]
//1.Normal sort()
let numbers = [100, 25, 5, 40];
numbers.sort((a,b) => a - b);// Ascending Order
numbers.sort((a,b) => b - a);// Descending Order
console.log(numbers);


//2.Random Sort [ Randomly rearranges array elements ]
let number = [1,2,3,4,5];
number.sort(() => 0.5 - Math.random());
console.log(number);


//3.Math.min() [ Returns the smallest number ]
console.log(Math.min(10, 20, 5, 50));

let num = [10,20,5,50];
console.log(Math.min(...numbers));


//4.Math.max() [ Returns the largest number ]
console.log(Math.max(10,20,5,50));

let marks = [10,200,5,50];
console.log(Math.max(...marks));