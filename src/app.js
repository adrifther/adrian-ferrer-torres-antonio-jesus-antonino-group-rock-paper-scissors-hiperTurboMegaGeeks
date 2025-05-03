import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

  
const _randomize = (anArray) => {
  const randomNumber = Math.floor(Math.random()*anArray.length);
    const wordInstance = anArray[randomNumber];
  return wordInstance;
};

const rock = {name : 'rock', enemyList : ['paper', 'spock']};
const paper = {name : 'paper', enemyList : ['scissors', 'lizard']}; 
const scissors = {name : 'scissors', enemyList : ['rock', 'spock']}; 
const lizard = {name : 'lizard', enemyList : ['scissors', 'rock']}; 
const spock = {name : 'spock', enemyList : ['paper', 'lizard']}; 

const userSelects = (id) => {
  //Podemos mirar refactor
  let selectedId = '';
    if(id == rock.name) {
      console.log('user chose rock');
      document.getElementById('user-selection').innerText = 'rock';
      selectedId = 'rock';
      return rock; 
    }
    if(id == paper.name) {
      console.log('user chose paper');
      document.getElementById('user-selection').innerText = 'paper';
      selectedId = 'paper';
      return paper;
    }
    if(id == scissors.name) {
      console.log('user chose scissors');
      document.getElementById('user-selection').innerText = 'scissors';
      selectedId = 'scissors';
      return scissors;
    }
    if(id == lizard.name) {
      console.log('user chose lizard');
      document.getElementById('user-selection').innerText = 'lizard';
      selectedId = 'lizard';
      return lizard;
    }
    if(id == spock.name) {
      console.log('user chose spock');
      document.getElementById('user-selection').innerText = 'spock';
      selectedId = 'spock';
      return spock;
    };
}; 
  
function playGame(userSelection){
  
  const possibleSelections = [ rock , paper , scissors , lizard , spock];
  const pcSelector = () =>  _randomize(possibleSelections);
  const pcSelection = pcSelector().name;

  let isInEnemyList = function(userSelects){
    let enemyList =  userSelects.enemyList;
      for(let enemy of enemyList){
        if(pcSelection === enemy) {return true}; 
        
      }
      return false; 
  } ; 
  
    document.getElementById('pc-selection').innerText = `${pcSelection}`;
    if(pcSelection === userSelection) {
      console.log('draw');
      return document.getElementById('result').innerText = 'DRAW';
      
    }

    const userSelectionEnemyList = userSelection.enemyList;
    console.log(userSelection.enemyList);

    if(isInEnemyList(userSelection)){
        return document.getElementById('result').innerText = 'PC WINS you lose ';
    }
    {
        return document.getElementById('result').innerText = 'USER WINS';
        }

    }
        
  document.getElementById('rock').addEventListener('click', () => {playGame( userSelects('rock'))});
  document.getElementById('paper').addEventListener('click', () => {playGame( userSelects('paper'))});
  document.getElementById('scissors').addEventListener('click', () => {playGame( userSelects('scissors'))});
  document.getElementById('lizard').addEventListener('click', () => {playGame(userSelects('lizard'))});
  document.getElementById('spock').addEventListener('click', () => {playGame(userSelects('spock'))});

