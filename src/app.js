import "bootstrap";
import "./style.css";



import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

const randomize = (anArray) => {
  const randomNumber = Math.floor(Math.random()*anArray.length);
    const wordInstance = anArray[randomNumber];//[Math.floor(Math.random()*word.length)];
    console.log(`${wordInstance}`);
  
  return wordInstance;
};

const gameArray = ['rock', 'paper', 'scisors', 'lizard', 'spock'];  
const pcSelection = randomize(gameArray);

// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");
// const lizard = document.getElementById("lizard");
// const spock = document.getElementById("spock");


const button = document.getElementsByClassName('myButton');
 
// here is the problem .at the end I try : !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  button.addEventListener('click', playGame());

const userSelects = () => {
  const userSelection = button.id;
  if(userSelection == "rock") {
    console.log('user chose rock');
    document.getElementById('user-selection').innerText = 'rock';
    return 'rock'; 
  }
  if(userSelection == "paper") {
    console.log('user chose paper');
    return 'paper';
  }
  if(userSelection == "scissors") {
    console.log('user chose scissors');
    return 'scissors';
  }
  if(userSelection == "lizard") {
    console.log('user chose lizard');
    return 'lizard';
  }
  if(userSelection == "spock") {
    console.log('user chose spock');
    return 'spock';
  }
}; 


const pcSelects = () => { 
    console.log(pcSelection);
    if (pcSelection === 'rock') {
        console.log('pc chose rock');
        document.getElementById('pc-selection').innerText = 'rock';
        return 'rock';
      }
    if (pcSelection === 'paper') {
      console.log('pc chose paper');
      document.getElementById('pc-selection').innerText = 'paper';
        return 'paper';
    }
    if (pcSelection === 'scissors') {
      console.log('pc chose scissors');
      document.getElementById('pc-selection').innerText = 'scissors';
      return 'scissors';
    }
    if (pcSelection === 'lizard') {
      console.log('pc chose lizard');
      document.getElementById('pc-selection').innerText = 'lizard';
      return 'lizard';
    }
    if (pcSelection === 'spock') {
      console.log('pc chose spock');
      document.getElementById('pc-selection').innerText = 'spock';
      return 'spock';
    }
  };

  
  const playGame = () => {
    const insertText = document.getElementById('result').innerText;
    if(pcSelects === userSelects) {
      console.log('draw');
      insertText = 'Draw';
      return insertText;
    }
    if(pcSelects === 'rock' && userSelects === 'scissors') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'rock' && userSelects === 'lizard') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'paper' && userSelects === 'rock') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'paper' && userSelects === 'spock') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'scissors' && userSelects === 'paper') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'scissors' && userSelects === 'lizard') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'lizard' && userSelects === 'paper') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'lizard' && userSelects === 'spock') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'spock' && userSelects === 'rock') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'spock' && userSelects === 'scissors') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelects === 'rock' && userSelects === 'paper') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'rock' && userSelects === 'spock') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'paper' && userSelects === 'scissors') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'paper' && userSelects === 'lizard') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'scissors' && userSelects === 'rock') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'scissors' && userSelects === 'spock') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'lizard' && userSelects === 'rock') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'lizard' && userSelects === 'scissors') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'spock' && userSelects === 'paper') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelects === 'spock' && userSelects === 'lizard') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
  };


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


     
  

