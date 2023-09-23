let fruits=["Apple","Bananna","Orange"];
console.log(fruits[0]);
console.log("at(-3)",fruits.at(-3));
fruits.push("Mango","Pineapple");
console.log(fruits);
console.log("at()",fruits.at());
console.log("at(1)",fruits.at(1));
const popped = fruits.pop();//Removes and returns last element
console.log("pop()",fruits);

// let empty=[];
// const test=empty.pop();
// console.log(test);

const removed = fruits.shift();//Removes and returns first element
console.log(fruits);
console.log("removed",removed);

let testArr=["A","B","C"];
testArr.unshift("D","E");//Addes the element at the first

console.log(testArr);

