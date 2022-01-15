const rock= document.getElementById('rock');
const paper= document.getElementById('paper');
const scissors= document.getElementById('scissors');
const score = document.querySelector('.score');
const mainDiv = document.querySelector('main');

let scoreCount=0;




const outputDivOne= document.getElementById('outputDivOne');
const outputDivTwo= document.getElementById('outputDivTwo');
const divComputerChoice= document.querySelector('.divComputerChoice');
divComputerChoice.style.display='none';
const imgComputerChoice= document.querySelector('.imgComputerChoice');
let btnPlayAgain = document.querySelectorAll('.playAgain')

const divPlayerChoice = document.querySelector('.divPlayerChoice');
const imgPlayerChoice= document.querySelector('.imgPlayerChoice');
const  roundResultDiv = document.getElementById('roundResultDiv');
const result= document.getElementById('result');
const emptyCircle= document.getElementById('emptyCircle')
let playerWin= document.createTextNode('YOU WIN');
let computerWin= document.createTextNode('YOU LOSE');
let draw= document.createTextNode('DRAW');
let desktopPlayerWin= document.createTextNode('YOU WIN');
let desktopComputerWin= document.createTextNode('YOU LOSE');
let desktopDraw= document.createTextNode('DRAW');

const desktopRoundResultDiv = document.getElementById('desktopRoundResultDiv');

const desktopResult= document.getElementById('desktopResult');

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if(width>768)
{
   
}
function playCallback() {
    let childrenNodeList= mainDiv.children;
    for(let eachChild of childrenNodeList)
    {
        eachChild.style.display='none';
    }
    outputDivOne.style.display='flex';
    outputDivTwo.style.display='flex';
   
    

    const computerChoice= computerPlay();
    divComputerChoice.id= computerChoice;
    const computerImgSrc= computerChoice==='paper'?'/images/icon-paper.svg' :computerChoice==='scissors'? "/images/icon-scissors.svg" :"/images/icon-rock.svg";

    imgComputerChoice.src= computerImgSrc;

    if(document.getElementById('emptyCircle')) 
    {setTimeout(()=>{
       emptyCircle.style.display='none';
       divComputerChoice.style.display='flex';
    }, 300);}

    setTimeout(()=>{
        roundResultDiv.style.display='flex';
        if(width>768)
     {
         roundResultDiv.style.display='none';
         desktopRoundResultDiv.style.display='flex'
         mainDiv.style.width= '768px';
         mainDiv.style.marginLeft ='-3.5rem';
 }
     }, 400);
    return computerChoice;
}

function displayResult(resultCode){
    if(resultCode===1)
    {   
        result.appendChild(playerWin);
        desktopResult.appendChild(desktopPlayerWin);
        score.textContent= ++scoreCount;
    }
    else if(resultCode===-1)
    {
        result.appendChild(computerWin);
        desktopResult.appendChild(desktopComputerWin);
    }
    else
    {
        result.appendChild(draw);
        desktopResult.appendChild(desktopDraw);
    }
}

//PLAYER CHOSE ROCK
rock.addEventListener('click', ()=>{
   
     let computerChoice = playCallback();
    divPlayerChoice.id= 'rock';
    imgPlayerChoice.src="./images/icon-rock.svg";
    let resultCode = playRound('rock', computerChoice);
    result.textContent='';
    desktopResult.textContent='';
    displayResult(resultCode);
})

// PLAYER CHOSE PAPER

paper.addEventListener('click', ()=>{
    let computerChoice = playCallback();
    divPlayerChoice.id= 'paper';
    imgPlayerChoice.src="/images/icon-paper.svg";
    let resultCode = playRound('paper', computerChoice);
    result.textContent='';
    desktopResult.textContent='';
    displayResult(resultCode);
})


// PLAYER CHOSE SCISSORS
scissors.addEventListener('click', ()=>{
    let computerChoice = playCallback();
    divPlayerChoice.id= 'scissors';
    imgPlayerChoice.src="/images/icon-scissors.svg";
    let resultCode = playRound('scissors', computerChoice);
    result.textContent='';
    desktopResult.textContent='';
    displayResult(resultCode);
})



//PLAY AGAIN FUNCTION
console.log(btnPlayAgain)
 btnPlayAgain.forEach(btn=> btn.addEventListener('click', ()=>{
    
    mainDiv.style.width= '375px';
    mainDiv.style.marginLeft ='auto';
    let childrenNodeList= mainDiv.children;
     for(let eachChild of childrenNodeList)
     {

         if(eachChild.style.display==='none')
            eachChild.style.display='block';
     }
     outputDivOne.style.display='none';
     outputDivTwo.style.display='none';
     roundResultDiv.style.display='none';
     desktopRoundResultDiv.style.display='none';
     emptyCircle.style.display='block';
     divComputerChoice.style.display='none';
  
    
}))

// console.log(result)

//RULES

const ruleBtn= document.getElementById('rule-btn');
const cancelBtn = document.getElementById('btn-rules-cancel');
const mainWrapper=  document.getElementById('outer-wrapper');
const rulesWrapper=  document.getElementById('hidden-wrapper');


ruleBtn.addEventListener('click', ()=> {
    console.log()
    Array.from(document.body.children).map(childNode=>{
        childNode.style.display = 'none';
    })
    //mainWrapper.style.display = 'none';

    rulesWrapper.style.display= 'flex';
    document.body.style.backgroundImage='none';
})

cancelBtn.addEventListener('click', ()=> {

    Array.from(document.body.children).map(childNode=>{
        if(childNode!= document.body.lastElementChild)
            childNode.style.display = 'block';
    })
    mainWrapper.style.display = 'flex';
    rulesWrapper.style.display= 'none';
    document.body.style.backgroundImage='linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))';
})

// funcition to generate a random number between min and max (both included). We're only using it for number between 1 and 3

function random(min,max) 
{ return Math.floor(Math.random() * max-min+1)+ min}


// function that returns either rock, paper or scissors based on the value returned by the random function

function computerPlay(){
    return (
        random(1,3)===1 ? 'rock': 
        random(1,3)===2? 'paper' :
        'scissors')
}


//function where the player's selection and the computer's selection are checked and the output is return in the form of an array.
//The first element of the array is either -1,0,1 which represents whether the player lost, had a draw, or won, respectively.
//The second element of the returning array has the string that delcares who won and why. Eg : "You Win! Rock beats Scissors!"

function playRound(playerSelection, computerSelection)
{
    if(playerSelection===computerSelection)
        return 0;

    else if(playerSelection==='rock')
    {
        if(computerSelection ==='scissors')
            return 1;
        else
            return -1;
    }

    else if(playerSelection==='paper')
    {
        if(computerSelection ==='rock')
            return 1
        else
            return -1
    }

    else {
        if(computerSelection ==='rock')
            return -1
        else
            return 1
    }

}



//the player choice output  
// const outputDivOne= document.createElement('div')
// outputDivOne.id='outputDivOne';
// const divPlayerChoice= document.createElement('div');
// const imgPlayerChoice= document.createElement('img');
// divPlayerChoice.appendChild(imgPlayerChoice);
// const playerText= document.createTextNode('YOU PICKED');
// outputDivOne.appendChild(divPlayerChoice);
// outputDivOne.appendChild(playerText);

//for desktop
// const mediaQuery= window.matchMedia('(min-width: 768px');
// if(mediaQuery.matches)
// {
//     const ResultDiv= document.createElement('div');
//     ResultDiv.id=('roundResultDiv');
//     ResultDiv.appendChild(result);
//     ResultDiv.appendChild(btnPlayAgain);
//     outputDivOne.insertAdjacentElement(ResultDiv);
// }


//computer choice output
// const outputDivTwo= document.createElement('div');
// outputDivTwo.id='outputDivTwo';
// const divComputerChoice= document.createElement('div');
// const imgComputerChoice= document.createElement('img');
// divComputerChoice.appendChild(imgComputerChoice);
// const emptyCircle= document.createElement('div');
// emptyCircle.id= 'emptyCircle';
// const computerText = document.createTextNode('THE HOUSE PICKED');

//outputDivTwo.appendChild(emptyCircle); //by default there is empty circle, when round is played, computer result is added and this is removed
// outputDivTwo.appendChild(computerText);


// output of each round (the actual result i.e YOU WIN or YOU LOSE will be added in the respective fns of the three event listeners)
// const roundResultDiv= document.createElement('div');
// roundResultDiv.id=('roundResultDiv')
// let result= document.createElement('div');
// roundResultDiv.appendChild(result);

// let btnPlayAgain= document.createElement('button');
// btnPlayAgain.textContent= 'PLAY AGAIN';
// btnPlayAgain.id='playAgain';
// roundResultDiv.appendChild(btnPlayAgain);



        // mainDiv.insertAdjacentElement("afterend", roundResultDiv);