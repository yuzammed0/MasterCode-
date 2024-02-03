const targetArea = document.querySelector('.green'),
    winsArea = document.querySelector('.wins'),
    losesArea = document.querySelector('.loses'),
    oneArea = document.querySelector('.one'),
    twoArea = document.querySelector('.two'),
    threeArea = document.querySelector('.three'),
    fourArea = document.querySelector('.four'),
    scoreArea = document.querySelector('.point');

let [one,two,three,four,target,point,loses,wins] = [0,0,0,0,0,0,0,0];

const generateTarget = ()=>{
    let x = Math.floor((Math.random() * 120) + 1);
    if(x>=19){
        return x
    }else{
        return generateTarget()
    }
}

const generateNum = ()=>{
    let x = Math.floor((Math.random() * 12) + 1);
    return x
}

const startGame = ()=>{
    target = generateTarget();
    one = generateNum();
    two = generateNum();
    three = generateNum();
    four = generateNum();
    point = 0;
    targetArea.innerHTML = target;
    scoreArea.innerHTML = point;
}

const youWon = ()=>{
    wins++;
    alert('You Wonn');
    winsArea.innerHTML = 'Wins: '+wins;
    startGame();
}

const youLose = ()=>{
    loses++;
    alert('You Lose');
    losesArea.innerHTML = 'Loses: '+loses;
    startGame();
}



const calculateScore = (element)=>{
    point+=element;
    scoreArea.innerHTML = point;
    if (target==point){
        youWon();
    }else if(point >= target){
        youLose()
    }
}

oneArea.addEventListener('click',()=>{calculateScore(one)});
twoArea.addEventListener('click',()=>{calculateScore(two)});
threeArea.addEventListener('click',()=>{calculateScore(three)});
fourArea.addEventListener('click',()=>{calculateScore(four)});
window.addEventListener('DOMContentLoaded',()=>{
    startGame()
})

