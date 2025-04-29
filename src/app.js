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

const pcSelection = () => _randomize(gameArray);

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

  const _getIsListInclude = ([],reference) => {
    gameArray.reduce( (accumulator, element)=> { 
      if (reference == element){ accumulator = true; return accumulator };
      accumulator = false ; return accumulator; 
    }
     , false)
    };
  
  
  const playGame =  (userSelects()) => {
    
    const pcSelection = () => _randomize(gameArray);

    console.log(`Playing pc selected option: ${pcSelection} vs user selected option: ${userSelection}`);

    document.getElementById('pc-selection').innerText = `${pcSelection}`;
    if(pcSelection === userSelection) {
      console.log('draw');
      return document.getElementById('result').innerText = 'DRAW';
      
    }

    const userSelectionEnemyList = userSelection.enemyList;
    const  {enemyList : userSelectionEnemyList} = userSelection;

    if(_getIsListInclude( userSelectionEnemyList, pcSelection.name)){
        return document.getElementById('result').innerText = 'PC WINS you lose ';
    }
    {
        return document.getElementById('result').innerText = 'USER WINS';
        }

    }
      
    

 
  
  // here is the problem .at the end I try : !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Those don't work for me: 
  document.getElementById('rock').addEventListener('click', () => {playGame(pcSelection(), userSelects('rock'))});
  document.getElementById('paper').addEventListener('click', () => {playGame(pcSelection(), userSelects('paper'))});
  document.getElementById('scissors').addEventListener('click', () => {playGame(pcSelection(), userSelects('scissors'))});
  document.getElementById('lizard').addEventListener('click', () => {playGame(pcSelection(), userSelects('lizard'))});
  document.getElementById('spock').addEventListener('click', () => {playGame(pcSelection(), userSelects('spock'))});

