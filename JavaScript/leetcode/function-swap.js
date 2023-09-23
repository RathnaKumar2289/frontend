function swap(array,source,target){
    let temp = array[target];
    array[target]=array[source];
    array[source]=temp;
}

const arr=[1,2,3];
swap(arr,0,2);
console.log(arr);