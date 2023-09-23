/**
 * 
 * @param {number[]} nums 
 * @returns number[]
 */
var buildArray = function(nums) {
    let out = new Array(nums.length);
    let i=0;
    while(i<nums.length){
        out[i]=nums[nums[i]];
        i++;
    }
    return out;
};

let arr = [1,2,3,0];
let newArr = buildArray(arr);
console.log(arr);
console.log(newArr);