let user = prompt("Enter your login:");
let paswd = 'admin';

if(user == 'admin'){
    let passwdInput = prompt('Enter your password');
    if(paswd == passwdInput){
        alert("Welcome!");
    }else if(passwdInput == null){
        alert('Cancled')
    }else{
        alert("wrong password")
    }
}else if(user == null){
    alert('Cancled')
}else{
    alert('I dont know you')
}