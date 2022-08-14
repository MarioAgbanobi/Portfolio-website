window.addEventListener('load', init);


//Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

//To change levels
const currentLevel = levels.easy;

//Globals
let time = currentLevel;
let score = 0;
let isPlaying;

//Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//words
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'maro',
  'generator',
  'generate',
  'cocktail',
  'runaway',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'revolver',
  'nutrition'
];

// Initialize Game
function init() {
  //show number of seconds in UI
  seconds.innerHTML = currentLevel;
  //load word from array
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener('input', startMatch);
  //Call countdown every second
  setInterval(countdown, 1000);
  //Check game status
  setInterval(checkStatus, 50);
}

//Start match
function startMatch(){
  if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  //if score is -1, display 0
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }else{
    scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct!!!';
    return true;
  }else{
    message.innerHTML = '';
    return false;
  }
}

//pick & show random word
function showWord(words){
  //Generate random array randIndex
  const randIndex = Math.floor(Math.random()*words.length);
  //Output random word
  currentWord.innerHTML = words[randIndex];
}


//countdown timer
function countdown(){
  //make sure time is not run out
  if(time > 0){
    //Decrement
    time--;
  }else if(time === 0){
    //Game is over
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;
}


//Check game status
function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
