function swap(array,source,target){
    let temp = array[target];
    array[target]=array[source];
    array[source]=temp;
}
const array = [1,2,3,4,5];
let index=0;
while(index<(array.length/2)){
swap(array,index,array.length-1-index);
index++;
}

console.log(array);