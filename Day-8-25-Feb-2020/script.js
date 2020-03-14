// 1. Array.prototype.from()
let newArray = Array.from('Hello');
console.log(newArray); // [ 'H', 'e', 'l', 'l', 'o' ]

newArray = Array.from([1, 2, 3, 4], num => num * 2);
console.log(newArray); // [ 2, 4, 6, 8 ]

// 2. Array.prototype.isArray();
newArray = ['a', 'b', 'c', 'd'];
console.log(Array.isArray(newArray)); // true

newArray = { name: 'Ali' };
console.log(Array.isArray(newArray)); // false

newArray = 'Hello! World';
console.log(Array.isArray(newArray)); // false

// 3. Array.of()
newArray = Array.of(7);
console.log(newArray); // [7]

newArray = Array.of('a', 'b', 'c');
console.log(newArray); // [ 'a', 'b', 'c' ]

newArray = Array(7);
console.log(newArray); // [ <7 empty items> ]

newArray = Array(7, 8, 9, 10);
console.log(newArray); // [ 7, 8, 9, 10 ]

// 4. Array.prototype.concat()
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

const concat = array1.concat(array2);

console.log(concat); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// 5. Array.prototype.copyWithin()
newArray = [1, 2, 3, 4, 5];
newArray.copyWithin(0, 2, 3);
console.log(newArray); // [ 3, 2, 3, 4, 5 ]

newArray = [1, 2, 3, 4, 5];
newArray.copyWithin(2, 0);
console.log(newArray); // [ 1, 2, 1, 2, 3 ]
