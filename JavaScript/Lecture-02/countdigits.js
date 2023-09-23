function countfunction(num){
let count=0;
while(num>0){
    num = Math.floor(num/10);
    count++;
}

return count;
}

const count=countfunction(456213);
console.log(count);