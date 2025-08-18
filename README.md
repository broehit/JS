# Projects

### Colour changer

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