function unshift(array,...values){
const shift = values.length;
let index = array.length-1;
while(index>=0){
    array[index+shift]=array[index];
    index--;
}
index=0;
while(index<shift){
    array[index]=values[index];
    index++;
}
}

let fruits = ["A","B","C"];
unshift(fruits,"D","E");
console.log(fruits);