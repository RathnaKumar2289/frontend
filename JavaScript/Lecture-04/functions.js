// it's just a named block of code that can be called later
//In JavaScript, you can define functions using the function keyword, 
//and these functions can be called anywhere in your code, 
//even before their actual declaration in the code. This behavior is known as "hoisting."
//JavaScript engines automatically move function declarations to the top of their containing scope during compilation
sayHello("Admin");
function sayHello(name){
console.log("Hello ",name);
}

sayHello("User");