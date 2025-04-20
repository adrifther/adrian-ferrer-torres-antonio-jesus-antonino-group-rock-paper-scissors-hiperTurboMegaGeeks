import "bootstrap";
import "./style.css";



import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");
// const lizard = document.getElementById("lizard");
// const spock = document.getElementById("spock");

const randomize = (anArray) => {
  const randomNumber = Math.floor(Math.random()*anArray.length);
    const wordInstance = anArray[randomNumber];//[Math.floor(Math.random()*word.length)];
    console.log(`${wordInstance}`);
  
  return wordInstance;
};

const gameArray = ['rock', 'paper', 'scisors', 'lizard', 'spock'];  
const pcSelection = randomize(gameArray);
console.log(`pc selection with randomize array was:${pcSelection}`);

const button = document.getElementsByClassName('myButton');
 


const userSelects = () => {
  const userSelection = button.id;
  if(userSelection == "rock") {
    console.log('user chose rock');
    document.getElementById('user-selection').innerText = 'rock';
    return 'rock'; 
  }
  if(userSelection == "paper") {
    console.log('user chose paper');
    document.getElementById('user-selection').innerText = 'paper';
    return 'paper';
  }
  if(userSelection == "scissors") {
    console.log('user chose scissors');
    document.getElementById('user-selection').innerText = 'scissors';
    return 'scissors';
  }
  if(userSelection == "lizard") {
    console.log('user chose lizard');
    document.getElementById('user-selection').innerText = 'lizard';
    return 'lizard';
  }
  if(userSelection == "spock") {
    console.log('user chose spock');
    document.getElementById('user-selection').innerText = 'spock';
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

  
  
  const playGame =  (pcSelectedOption, userSelectedOption) => {
    pcSelectedOption = pcSelects();
    userSelectedOption = userSelects();
    let insertText = document.getElementById('result').innerText;
    if(pcSelectedOption === userSelectedOption) {
      console.log('draw');
      insertText = 'Draw';
      return insertText;
    }
    if(pcSelectedOption === 'rock' && userSelectedOption === 'scissors') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'rock' && userSelectedOption === 'lizard') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'paper' && userSelectedOption === 'rock') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'paper' && userSelectedOption === 'spock') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'scissors' && userSelectedOption === 'paper') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'scissors' && userSelectedOption === 'lizard') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'lizard' && userSelectedOption === 'paper') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'lizard' && userSelectedOption === 'spock') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'spock' && userSelectedOption === 'rock') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'spock' && userSelectedOption === 'scissors') {
      console.log('pc wins');
      insertText = 'PC Wins';
      return insertText;
    }
    if(pcSelectedOption === 'rock' && userSelectedOption === 'paper') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'rock' && userSelectedOption === 'spock') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'paper' && userSelectedOption === 'scissors') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'paper' && userSelectedOption === 'lizard') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'scissors' && userSelectedOption === 'rock') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'scissors' && userSelectedOption === 'spock') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'lizard' && userSelectedOption === 'rock') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'lizard' && userSelectedOption === 'scissors') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'spock' && userSelectedOption === 'paper') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
    if(pcSelectedOption === 'spock' && userSelectedOption === 'lizard') {
      console.log('user wins');
      insertText = 'User Wins';
      return insertText;
    }
  };

  
  // here is the problem .at the end I try : !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //button.addEventListener('click', playGame);


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


     
  

