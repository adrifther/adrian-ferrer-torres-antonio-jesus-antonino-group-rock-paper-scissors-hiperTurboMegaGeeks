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


//console.log(`pc selection with randomize array was:${pcSelection}`);

const button = document.getElementsByClassName('myButton');
 


const userSelects = (id) => {
  //Podemos mirar refactor
  let selectedId = '';
    if(id == rock.name) {
      console.log('user chose rock');
      document.getElementById('user-selection').innerText = 'rock';
      selectedId = 'rock';
      return rock.name; 
    }
    if(id == paper.name) {
      console.log('user chose paper');
      document.getElementById('user-selection').innerText = 'paper';
      selectedId = 'paper';
      return paper.name;
    }
    if(id == scissors.name) {
      console.log('user chose scissors');
      document.getElementById('user-selection').innerText = 'scissors';
      selectedId = 'scissors';
      return scissors.name;
    }
    if(id == lizard.name) {
      console.log('user chose lizard');
      document.getElementById('user-selection').innerText = 'lizard';
      selectedId = 'lizard';
      return lizard.name;
    }
    if(id == spock.name) {
      console.log('user chose spock');
      document.getElementById('user-selection').innerText = 'spock';
      selectedId = 'spock';
      return spock.name;
    };

}; 

  // const _getIsListInclude = ( gameArray , reference ) => {
  //   gameArray.reduce( (accumulator, element)=> { 
  //     if (reference == element){ accumulator = true; return accumulator };
  //     accumulator = false ; return accumulator; 
  //   }
  //    , false)
  //   };

  
  const isInEnemyList = (enemyList, chosenOption) =>{
    for(let enemy of enemyList){
    if(chosenOption === enemy) {return true}; 
    return false; 
    }
  } ; 
  
    // const pcOptions = {
    //   nameList : ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    // };
    
    const nameList = ['rock', 'paper', 'scissors', 'lizard', 'spock']; 

    const pcSelector = () => {_randomize(nameList)};
    const pcSelection = pcSelector(); 
    // let seleccion = userSelects(id); 

function playGame(userSelection){
    
    console.log(`Playing pc selected option: ${pcSelection} vs user selected option: ${userSelection}`);

    
    document.getElementById('pc-selection').innerText = `${pcSelection}`;
    if(pcSelection === userSelection) {
      console.log('draw');
      return document.getElementById('result').innerText = 'DRAW';
      
    }

    //const userSelectionEnemyList = userSelection.enemyList;
    //const  {enemyList : userSelectionEnemyList} = userSelection;

    const userSelectionEnemyList = userSelection.enemyList;
    console.log(userSelection.enemyList);

    if(isInEnemyList(userSelectionEnemyList, pcSelection)){
        return document.getElementById('result').innerText = 'PC WINS you lose ';
    }
    {
        return document.getElementById('result').innerText = 'USER WINS';
        }

    }
      
  // here is the problem .at the end I try : !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Those don't work for me: 
  document.getElementById('rock').addEventListener('click', () => {playGame( userSelects('rock'))});
  document.getElementById('paper').addEventListener('click', () => {playGame( userSelects('paper'))});
  document.getElementById('scissors').addEventListener('click', () => {playGame( userSelects('scissors'))});
  document.getElementById('lizard').addEventListener('click', () => {playGame(userSelects('lizard'))});
  document.getElementById('spock').addEventListener('click', () => {playGame(userSelects('spock'))});

