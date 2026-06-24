// CHECK EVEN OR Odd!

// const input = document.querySelector('input');
// const box = document.querySelector('.box');
// const para = document.querySelector('.para');
// const button = document.querySelector('button');

// button.addEventListener('click',()=>{
// let number;
// number = Number(input.value);
// para.style.display = 'flex';
// if(isNaN(number)){
//     para.textContent = 'Please Enter a valid number!';
//   }else if(input.value === ''){
//     para.textContent = 'Enter number!';
//   }
//   else if(number % 2 === 0){
//     para.textContent = 'Even!';
//   }
//   else{
//     para.textContent = `Odd!`;
//   }

  
// })

  
// GREETINGS
// const name = document.querySelector('.name');
// const age = document.querySelector('.age');
// const box = document.querySelector('.box');
// const para = document.querySelector('.para');
// const button = document.querySelector('button');


// button.addEventListener("click",()=>{

//   let greet = function(){
//   let time = new Date();
//   let hours = time.getHours();
//   if(hours < 12){
//     return "Good Morning!";
    
//   }else if(hours< 17){
//     return "Good Afternoon!";
    
//   }else if(hours < 22){
//   return "Good Evening";
//   }else{
//     return 'Good Night!';
    
//   }

// }
// let greetings = greet();

// para.textContent = `Hello sir ${greetings} Your name is ${name.value} and Your age is ${age.value} `;
//   para.style.display = 'flex';
// })

// Area Calculator

// const length = document.querySelector('.length');
// const breadth = document.querySelector('.breadth');
// const box = document.querySelector('.box');
// const para = document.querySelector('.para');
// const button = document.querySelector('button');

// button.addEventListener('click',()=>{
//   let number1 = Number(length.value);
//   let number2 = Number(breadth.value);
//   para.textContent = `Area of Rectangle is ${number1*number2}!`;
//   para.style.display = 'flex';  
  
// })

// Private COUNTER
// const box = document.querySelector('.box');
// const para = document.querySelector('.para');
// const button = document.querySelector('button');

// function outer(){
//   let count = 0;
//   return function inner(){
//     count++;
//     return count;
//   }
// }
// let result = outer();

// button.addEventListener('click',()=>{
 
  

//   para.textContent = `Count = ${result()}!`;
//   para.style.display = 'flex';
// })
//  const box = document.querySelector('.box');
// const para = document.querySelector('.para');
// const button = document.querySelector('button');
// let input = document.querySelector('.number');

// function findLargest(array){
//   let largest = array[0];
//  let arr ;
//  for(let j = 1;j<array.length;j++){
//      arr = array[j];
//      if(arr > largest){
//       largest = arr;
//      }
//  }
//  return largest;
// }
// button.addEventListener('click',()=>{
//  let convert = input.value.split(',');
//  let num;
//  let array = [];
//  for(let i = 0;i < convert.length;i++){
//   num = Number(convert[i]);
//   array.push(num);
//  }
 
// let large = findLargest(array);
//  para.textContent = `Largest Number :${large}`;
//   para.style.display = 'flex';
// })

 

 
 
  
  
