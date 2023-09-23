function countfive(num){
    let count=0;
    while(num>0){
        const rem = num%10;
        num = Math.floor(num/10);
        if(rem==5){
            count++;
        }        
    }
    
    return count;
    }
    
    const count=countfive(550055);
    console.log(count);