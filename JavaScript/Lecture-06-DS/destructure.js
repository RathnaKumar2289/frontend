// const arr=[10,20];
// const [a,b,c]=arr;
// console.log(a,b,c);

function getNames(...names){
console.log(names);
}

//getNames("John","David","Kumar");

getNames("John",10,new Date());

const arr=[10,20,30];
const copy = [...arr,90,100];
arr[0]=1000;
console.log(arr);
console.log(copy);