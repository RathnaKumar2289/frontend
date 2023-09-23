let a = 100;
let b = 200;

console.log("Outside block:", a);//100
console.log("Outside block:", b);//200

{
    // block scop value doesn't change the outer scop variable with same name
    let a = 10;
    let b = 20;
    console.log("Inside block:", a);//10
    console.log("Inside block:", b);//20

}
console.log("Outside block:", a);//100
console.log("Outside block:", b);//200
{
    a = 10;
    b = 20;
}
console.log("Outside block:", a);//10
console.log("Outside block:", b);//20
