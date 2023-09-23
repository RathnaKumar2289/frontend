// in number, 0 is false, non zero is true
// in string, empty string is false, non empty string is true
// in object, null is false, non null is true
// in array & Block, Both empty & Non empty array/block is true

//Non - Empty String are truthy
if ("Hello") {
    console.log("Non Empty String");//Executed
}

//Non-zero numbers are truthy
if(0){
    console.log("Zero");
}else if(12){
    console.log("Non Zero");//Executed
}

if([]){
    console.log("Empty Array"); //Executed
}
 if([1]){
    console.log("Non Empty Array");//Executed
}

if({}){
    console.log("Empty Block"); //Executed
}

const x = null;
if(x){
    console.log("Null object");
}