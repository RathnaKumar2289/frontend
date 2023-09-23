function division(a,b){
    if(b===0) throw new Error("Divide by zero");
    return a/b;
}

try{
    const c = division(1,0);
    console.log(c);
}catch(e){
    console.log(e.message);
}