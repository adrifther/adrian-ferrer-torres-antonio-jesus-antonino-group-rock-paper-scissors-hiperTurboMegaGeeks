import "bootstrap";
import "./style.css";



import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";


const _randomize = (anArray) => {
  const randomNumber = Math.floor(Math.random()*anArray.length);
    const wordInstance = anArray[randomNumber];
  return wordInstance;
};

const gameArray = ['rock', 'paper', 'scisors', 'lizard', 'spock']; 
const rock = {name : 'rock', enemyList : ['paper', 'spock']};
const paper = {name : 'paper', enemyList : ['scissors', 'lizard']}; 
const scissors = {name : 'scissors', enemyList : ['rock', 'spock']}; 
const lizard = {name : 'lizard', enemyList : ['scissors', 'rock']}; 
const spock = {name : 'spock', enemyList : ['paper', 'lizard']}; 
const pcSelection = () => randomize(gameArray);
//console.log(`pc selection with randomize array was:${pcSelection}`);

const button = document.getElementsByClassName('myButton');
 


const userSelects = (id) => {
  //Podemos mirar refactor
    if(id == "rock") {
      console.log('user chose rock');
      document.getElementById('user-selection').innerText = 'rock';
      return 'rock'; 
    }
    if(id == "paper") {
      console.log('user chose paper');
      document.getElementById('user-selection').innerText = 'paper';
      return 'paper';
    }
    if(id == "scissors") {
      console.log('user chose scissors');
      document.getElementById('user-selection').innerText = 'scissors';
      return 'scissors';
    }
    if(id == "lizard") {
      console.log('user chose lizard');
      document.getElementById('user-selection').innerText = 'lizard';
      return 'lizard';
    }
    if(id == "spock") {
      console.log('user chose spock');
      document.getElementById('user-selection').innerText = 'spock';
      return 'spock';
    };

}; 



  
  
  const playGame =  (userSelectedOption) => {
    console.log(`Playing pc selected option: ${pcSelectedOption} vs user selected option: ${userSelectedOption}`);
    const pcSelection = () => _randomize(gameArray);
    document.getElementById('pc-selection').innerText = `${pcSelectedOption}`;
    if(pcSelectedOption === userSelectedOption) {
      console.log('draw');
      return document.getElementById('result').innerText = 'DRAW';
      
    }

    const userSelectionEnemyList = userSelectedOption.enemyList;
    const {enemyList : userSelectionEnemyList} = userSelectedOption;
    if(){

    }
   /* else if(pcSelectedOption === 'rock' && userSelectedOption === 'scissors' ||
      pcSelectedOption === 'rock' && userSelectedOption === 'lizard' || 
      pcSelectedOption === 'paper' && userSelectedOption === 'rock' || 
      pcSelectedOption === 'paper' && userSelectedOption === 'spock' ||
      pcSelectedOption === 'scissors' && userSelectedOption === 'paper' || 
      pcSelectedOption === 'scissors' && userSelectedOption === 'lizard' ||
      pcSelectedOption === 'lizard' && userSelectedOption === 'spock' ||
      pcSelectedOption === 'lizard' && userSelectedOption === 'paper' ||
      pcSelectedOption === 'spock' && userSelectedOption === 'scissors' ||
      pcSelectedOption === 'spock' && userSelectedOption === 'rock') {
      console.log('pc wins');*/
      return document.getElementById('result').innerText = 'PC WINS';
      
    }/*
    else if(pcSelectedOption === 'rock' && userSelectedOption === 'paper' ||
      pcSelectedOption === 'rock' && userSelectedOption === 'spock' ||
      pcSelectedOption === 'paper' && userSelectedOption === 'scissors' ||
      pcSelectedOption === 'paper' && userSelectedOption === 'lizard' ||
      pcSelectedOption === 'scissors' && userSelectedOption === 'rock' ||
      pcSelectedOption === 'scissors' && userSelectedOption === 'spock' ||
      pcSelectedOption === 'lizard' && userSelectedOption === 'rock' ||
      pcSelectedOption === 'lizard' && userSelectedOption === 'scissors' ||
      pcSelectedOption === 'spock' && userSelectedOption === 'paper' ||
      pcSelectedOption === 'spock' && userSelectedOption === 'lizard') {
      console.log('user wins');*/
      return document.getElementById('result').innerText = 'USER WINS';
      
    }
    else{
      console.log('error');
      insertText = 'Error';
      return insertText;  
    }
  };


  const _getIsListInclude = ([],reference) => {
    gameArray.reduce()
  }
  
  // here is the problem .at the end I try : !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Those don't work for me: 
  document.getElementById('rock').addEventListener('click', () => {playGame(pcSelection(), userSelects('rock'))});
  document.getElementById('paper').addEventListener('click', () => {playGame(pcSelection(), userSelects('paper'))});
  document.getElementById('scissors').addEventListener('click', () => {playGame(pcSelection(), userSelects('scissors'))});
  document.getElementById('lizard').addEventListener('click', () => {playGame(pcSelection(), userSelects('lizard'))});
  document.getElementById('spock').addEventListener('click', () => {playGame(pcSelection(), userSelects('spock'))});
  // getElementById('paper').addEventListener('click', pcSelection());
  // getElementById('scissors').addEventListener('click', pcSelection());
  // getElementById('lizard').addEventListener('click', pcSelection());
  // getElementById('spock').addEventListener('click', pcSelection());
  
  // NO FUNCIONA PARA CLASES. HAY QUE PONER EL ID
  //button.addEventListener('click', userSelects());
  
  // const gameButtons = [document.getElementById('rock').id, 
  //   document.getElementById('rock').id,
  //   document.getElementById('paper').id,
  //   document.getElementById('scissors').id,
  //   document.getElementById('lizard').id,
  //   document.getElementById('spock').id
  //  ]
  // console.log(gameButtons);
  // for (let gameButton of gameButtons ) {
  //     console.log(gameButton);
  //     document.getElementById('result').innerText = playGame(pcSelection, userSelects(this.id));
  // };

  window.onload = function() {
  //write your code here
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const whoRandom = randomize(who);
  const whatRandom = randomize(what);
  const actionRandom = randomize(action);
  const whenRandom = randomize(when);

  const sentence = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}` ;

  console.log(sentence); 
  document.getElementById('excuse').innerText = sentence;
   
  };
