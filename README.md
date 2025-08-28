# Projects

  ### logic code 
 
## Colour changer

```javascript
const buttons= document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click', (e)=>{
    console.log(e)
    console.log(e.target)
    if (e.target.id ==='grey'){
      body.style.backgroundColor= e.target.id;
    }
    if (e.target.id ==='yellow'){
      body.style.backgroundColor= e.target.id;
    }
    if (e.target.id ==='blue'){
      body.style.backgroundColor= e.target.id;
    }
    if (e.target.id ==='white'){
      body.style.backgroundColor= e.target.id;
    }
    if (e.target.id ==='purple'){
      body.style.backgroundColor= e.target.id;
    }

  })
})
```

## BMI calculator 

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight/(height*height/10000)).toFixed(2);
    //show the result
    let category ;
    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal weight';
    } else {
      category = 'Overweight';
    }
    
    results.innerHTML= `<span>${bmi} - ${category}</span>`
  }
});
```

## Digital clock

```javascript
const clock= document.getElementById("clock")
// const clock= document.documentElement("#clock")


setInterval(()=>{
  let date= new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerText= date.toLocaleTimeString();
}, 1000)
```

## Guess Number


``` javascript
let randomNumber= parseInt(Math.random()*100 +1);

const submit= document.querySelector('#subt')
const userInput= document.querySelector('#guessField')
const guessSlot= document.querySelector('.guesses')
const remaining= document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p')


let prevGuess= []
let numGuess = 1
let playGame= true

if (playGame){
  submit.addEventListener('click', function (e){
    e.preventDefault()
    const guess= parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if (isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess<1){
    alert('Please enter a number above 0')
  } else if(guess>100){
    alert('Please enter a number less than 100')
  } else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game ended. Random number was
      ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)

    }
  }  
}
function checkGuess(guess){
  if (guess === randomNumber){
    displayMessage(`Correct Guess`)
    endGame()
  } else if(guess<= randomNumber){
    displayMessage("Number is too low")
  } else if(guess >= randomNumber){
    displayMessage("Number is too High")
  }

}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML += `${guess},`
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}` 
}

function displayMessage(message){
  lowOrHi.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id= "newGame"> Start New Game</h2>'
  startOver.appendChild(p);
  playGame= false
  newGame()
}
function newGame(){
  const newGamebutt= document.querySelector('#newGame')
  newGamebutt.addEventListener('click', function (e){
    randomNumber= parseInt(Math.random()*100 +1);
    prevGuess=[]
    numGuess=1
    remaining.innerHTML= ''
    guessSlot.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame= true
  })
}
```


## KeyBoard

```javascript
const insert= document.getElementById("insert")

window.addEventListener('keydown',function(e){
  insert.innerHTML= `
  <div class= 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? 'Space': e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  
  </tr>
 
</table>
  </div>
  `
})

```


## Unlimited Colors

```javascript
//generate a random color

const randomColor= function(){
  const hex= '0123456789ABCDEF'
  let color= '#'
  for (i=0; i<6; i++){
    color+= hex[Math.floor(Math.random() * 16)]
  }
  return color
};
let intervalId;
const startChangingColor= function(){
 
  function changeBgColor () {document.body.style.backgroundColor= randomColor();}
  if (!intervalId){
    intervalId=  setInterval(changeBgColor, 1000)
  }

};

const stopChangingColor= function (){
  clearInterval(intervalId)
  intervalId=null;
};

document.querySelector('#start').addEventListener('click',startChangingColor)


document.querySelector('#stop').addEventListener('click',stopChangingColor)
```