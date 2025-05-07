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

    if(id == rock.name) {
      document.getElementById('user-selection').innerText = 'rock';
      return rock; 
    }
    if(id == paper.name) {
      document.getElementById('user-selection').innerText = 'paper';
      return paper;
    }
    if(id == scissors.name) {
      document.getElementById('user-selection').innerText = 'scissors';
      return scissors;
    }
    if(id == lizard.name) {
      document.getElementById('user-selection').innerText = 'lizard';
      return lizard;
    }
    if(id == spock.name) {
      document.getElementById('user-selection').innerText = 'spock';
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

