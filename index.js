const myArr = [0, 1, 2, 3, 4, 5];
const secondArr = ["hello", true];

// for (a = 0; a <= myArr.length; a++) {
// 	console.log(a);
// }
// console.log(myArr.length); //to find array length
// console.log(myArr.pop()); //to remove last array
// console.log(myArr.push("hello")); //to add an index in last array
// console.log(myArr.shift()); //to remove first index in array
// console.log(myArr.unshift("m adding")); //to add first index in array
// console.log(myArr.concat(secondArr)); //to add any array in array
// console.log(myArr.sort()); //to add any array in array
// console.log(myArr.slice(1, 4)); //to cut array from to till

// console.log(myArr.find((e) => e > 5)); //to check any condition in the array

// function sum(a, b) {
// 	return a + b;
// }
// sum(5, 3);

// console.log(myArr.findIndex((e) => e === 3)); //to check that value is avaialbe or not

// console.log(myArr.includes(7)); // to find there is an element or not

myArr.forEach((e) => {
	console.log(e);
}); //print an array

console.log(myArr.map((e) => e * 2)); //for manipulate your array
console.log(myArr);
