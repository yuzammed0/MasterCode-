let str ="dunen bazardan iki manata utu aldim. hemen utunu ana chox beyendi. kicik hediyye olmasina baxmayaraq bu hediyye cox ses saldi";

const addObj = (str)=>{
    let obj = {};
    let arr = str.split(' ');

    for(let i = 0;i<arr.length;i++){
        if(isPalinodrome(arr[i])){
            obj[arr[i]]=str.indexOf(arr[i]);
        }
    }
    
    return obj;
}

const isPalinodrome = (e)=>{
    let reversed ='';
    for(let i=e.length-1;i>=0;i--){
        reversed+=e[i];
    }

    return reversed == e;
}

console.log(addObj(str));

