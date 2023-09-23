function sum(a,b){
return a+b;
}

function ops(a,b,operation){
    return operation(a,b);
}

console.log(ops(2,3,sum));

//1.Type Coercion
console.log('5'+3); //prints 53
console.log('5'-2); //prints 3
console.log([]+[]); //prints empty string ''
console.log([]+{});
console.log(null == undefined);//true
//2.NaN: NaN (Not-a-Number)
console.log(NaN == NaN);      // false
console.log(isNaN(NaN));      // true
