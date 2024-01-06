let str ="sdfg546cv5fgs9szdf3sSzP4dsf7sdf032ghj5dfgh8Qrrghfj1fdQEdrh5902fgh89YM";

const sumStr = (str)=>{
    let sum=0;
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>48 && str.charCodeAt(i)<57){
            sum+=Number(str[i]);
        }
    }

    return sum;
}

console.log(sumStr(str));