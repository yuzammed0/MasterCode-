const isPalinodrome = (str)=>{
    let reversed =''
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i]
    }

    return reversed == str
}

console.log(isPalinodrome('ses'))