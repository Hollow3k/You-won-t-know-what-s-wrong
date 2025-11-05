const passwordInput = document.getElementById('passIn');

function getR(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const upR = getR(3,6);
const lowR = getR(5,7);
const numR = getR(2,5);
const symR = getR(3,6);

// console.log(upR,lowR,numR,symR);

passwordInput.addEventListener('input', (event) => {

    let lenDiv = document.getElementById('c1');
    let upperDiv = document.getElementById('c2');
    let lowerDiv = document.getElementById('c3');
    let numDiv = document.getElementById('c4');
    let symDiv = document.getElementById('c5');

    const enteredCharacter = event.data;
    const currentValue = event.target.value; 

    console.log('Character entered:', enteredCharacter);
    console.log('Current password value:', currentValue);

    let UpperCount = 0;
    let LowerCount = 0;
    let SymbolCount = 0;
    let NumCount = 0;

    for(let i = 0 ; i<currentValue.length ;i++){
        if (/[A-Z]/.test(currentValue[i])) {
            UpperCount++;
        }
        else if (/[a-z]/.test(currentValue[i])) {
            LowerCount++;
        }
        else if (/[0-9]/.test(currentValue[i])) {
            NumCount++;
        }
        else {
            SymbolCount++;
        }
        console.log(UpperCount,LowerCount,NumCount,SymbolCount);
    }

    if(UpperCount>upR){
        upperDiv.style.backgroundColor = 'green'; 
    }
    else{
        upperDiv.style.backgroundColor = 'red'; 
    }

    if(currentValue.length>15){
        lenDiv.style.backgroundColor = 'green'; 
    }
    else{
        lenDiv.style.backgroundColor = 'red'; 
    }
        
    if(LowerCount>lowR){
        lowerDiv.style.backgroundColor = 'green'; 
    }
    else{
        lowerDiv.style.backgroundColor = 'red'; 
    }

    if(NumCount>numR){
        numDiv.style.backgroundColor = 'green'; 
    }
    else{
        numDiv.style.backgroundColor = 'red'; 
    }

    if(SymbolCount>symR){
        symDiv.style.backgroundColor = 'green'; 
    }
    else{
        symDiv.style.backgroundColor = 'red'; 
    }
});