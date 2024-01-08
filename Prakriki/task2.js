const isPalinodrome = (str)=>{
    let reversed ='';
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }

    return reversed == str;
}


const isPalinodrome2 = (str)=>{
    return str.split('').reverse().join('') == str;
}

console.log(isPalinodrome('ses'))
console.log(isPalinodrome2('ses'))

