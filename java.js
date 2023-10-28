const saburgere = document.getElementById('burger')
const saburgere2 = document.querySelector('.burgermenu')

saburgere.addEventListener('click' , function(){
    saburgere2.classList.toggle('active')
})



console.log('Homework')

console.log('Num1')
function calculate(n = 1) {
    if (n > 10) {
        return;
    }
    console.log(3 * n);
    calculate(n + 1);
}

calculate();

console.log('Num2')
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

console.log('Num3')
let n = 1;
let answer = 0;
while (n <= 100) {
    answer+= n;
    n++;
}
console.log(answer);


console.log('ფიზბაზი')
let num= 1;
while (num <= 20) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
  num++;
}