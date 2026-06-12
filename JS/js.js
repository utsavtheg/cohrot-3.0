// console.log("Hello World!");

// string methods
// let str = " Raj Kapoor";
// str = str.toLowerCase();
// console.log(str);
// str = str.toLocaleUpperCase();

// console.log(str);
// // str = str.includes("k");
// str = str.includes("K")
// console.log(str);
// console.log(str.length);
// //access last element
// console.log(str[str.length-1]);
// console.log(str.slice(-6));
// console.log(str.substring(5,1));
// console.log(str.trim());
// console.log(str.charAt(5));
// console.log(str.indexOf('R'));
// console.log(str.repeat(3));
// console.log(str.replace("Raj" , "Shyam"));
// console.log(str.startsWith(" "));
// console.log(str.endsWith("r"));
// console.log(str[10]);


// methods in number 
// check integer,NaN,convert by parseFloat,parseInt,toFixed

// let num = 34.5;
// console.log(isNaN(122));
// console.log(num.toFixed(2));
// console.log(parseFloat(34));
// console.log(parseInt(34.5));
// console.log(Number.isInteger(45.67));

// console.log(Math.round(34.65));
// console.log(Math.abs(-90));
// console.log(Math.max(32,45,89,22));
// console.log(Math.min(10,23,56,89,-1));
// console.log(Math.random(100*1-1));
// console.log(Math.ceil(2.1));
// console.log(Math.floor(5.67));
// let a  = Math.floor((Math.random()*400 - 1+1)+1);
// console.log(a);


// for(i = 1;i<= 10;i++){
//  let  i = "Ram JI Akr Bhlaa Krenge";
//  console.log(i);
 
  
// }

// let n = prompt("Enter the number:");
//  let sum = 0;
// for(let i = 1;i <= n;i++){
//   sum += i;
//   console.log(sum);
  
// }
// for(let i=1;i<=5;i++){
//   let pattern = "";
//   for(let j=1;j<=i;j++){
//     pattern += j;
    
//   }
//   console.log(pattern);
// }

// let i = 1;
// while(i<= 5){
//   let pattern = "";
//    let j = 1;
//   while(j <= i){
//   pattern += "*";
  
//   j++;
// }
//   console.log(pattern);
//   i++;
  
  
// }\

// let n = 6;
// let  i = 1;
// while(i <= 10){
//   console.log(`${n} X 1 = ${i*n} `);
//   i++;
  
// }
// let  n = 5;
// let  i = 1;
// do{
//   console.log(`${n} X 1 = ${i*n} `);
//   i++;
  
// }while(i<= 10);

// for(let i = 1;i<= 5;i++){
//   console.log(i);
// }
// let i = 1;
// while(i<= 10){
//   console.log(i);
//   i++;
// }   
   
// let i = 10;
// do{
//   console.log(i);
//   i--;
  
// }while(i>=1)


// let i = 1;
// let sum = 0;
// while(i <= 10){
// sum += i; 
//  i++;
   
// }
// console.log(sum);

// let i = 1;
// let fact = 1;
// while(i <= 5){
//   fact *= i;
//   i++;
// }
// console.log(fact);





// let digit = 0;
// let count = 0;
// let i = 123495;
// while(i > 0){
//  i = Math.floor(i/10);
//   count++;
// }
// console.log(count);

// let i = 1234;
// let rev = 0;
// while(i > 0){
//   let digit = i%10;
//   rev = rev*10+digit;
//   i = Math.floor(i/10);
// }
// console.log(rev);
// let i = 1235;
// let sum = 0;
// while(i > 0){
//   let digit = i % 10;
//   sum += digit;
//   i = Math.floor(i/10);
  
// }
// console.log(sum);


// let secret = Math.floor(Math.random()*(100)+1);
// let attempts = 0;
// let guess;
// console.log(secret);

// while(guess !== secret){
//   guess = Number(prompt(`Guess your number`));
//   attempts++;
//   if(guess > secret){
//     console.log(`Too High!`);
    
//   }else if(guess < secret){
//     console.log(`Too Low!`);
    
//   }
// }
// console.log(`You got it in ${attempts} attempts`);

// function calculateArea(){
//   let length = Number(prompt(`Enter your Length:`));
//   let breadth = Number(prompt(`Enter your Breadth:`));
//   return length * breadth;
  
// }
// console.log(calculateArea());


// function greet(name){
//   console.log(`Hello ${name}!`);
  
// }
// let name = prompt(`enter name:`);
// greet(name);

// let time = new Date();
// let name = prompt(`Enter your name:`);

// greet(name);
// function greet(name){
//   if(time >12){
//     console.log(`Good Afternoon ${name}!`);
    
//   }else if(time<17){
//     console.log(`Good Evening ${name}!`);
    
//   }else if(time>22){
//     console.log(`Good Night ${name}!`);
    
//   }else{
//     console.log(`Good Morning ${name}`);
    
//   }
// }


// greet2();
// let greet2 = function(){
//   console.log(`Hii Everyone!`);
  
// }

// const SayHii = function(){
//   console.log("hii!");
  
// }
// SayHii();

// let add = (a,b) => {
//   return a+b;
// };
// console.log(add(5,5));
// let area = (l,b) => {
//   return l * b;
// };

// let add = (a,b) => a+b;
// let subtract = (c,d) => c-d;
// let multiply = (e,f) => e*f;

// let add = (a=5,b=6) => a+b;
// console.log(add(15,5));


// let naturalNumberSum = (...numbers) => {
//   let total = 0;
//   for(let n of numbers){
    
//     total += n;
//   }
//   return total;
// } 

// // let numbers = (prompt('Enter numbers:'))
// console.log(naturalNumberSum(1,2,3,4,5,6,7));

// function checkAge(age){
//   if(age < 0){
//     return 'Invalid Age!';
//   }else if(age >= 18){
//     return "Adult";
//   }else{
//     return 'Minor';
//   }
// }
// console.log(checkAge(-4));
// console.log(checkAge(14));
// console.log(checkAge(92));

// const sayHii = function(){
//   console.log("Hii!");
  
// };


// let greet = function(){
//   console.log("Hello!");
  
// }

// function callTwice(fn){
//   fn();
//   fn();
// }

// function makeGreeter(greeting){
//   return function(name){
//     console.log(greeting+" ," + name + "!");
    
//   };
// }
// const helloGreeter = makeGreeter("Hello");
// helloGreeter('ram');

// function addA(a){
//   return function(b){
//     console.log(a+b);
    
//   };
// }

// const sum = addA(5);
// sum(10);

// function processUser(name, callback){
//   console.log('Processing user:'+name);
//   callback(name);
  
// }
// function welcome(name){
//   console.log("Welcome, " + name);
  
// }
// processUser("Aman",welcome);


// function runTask(callback){
//   callback();
// }
// function Task(task){
//   console.log('Task Completed');
  
// }
// runTask(Task);

// function greetUser(name, callback){
//   console.log("Good Morning:" +  name);
//   callback(name);
  
// }
// function greet(name){
//   console.log(`Hello `+name);
  
// }
// greetUser("Ram",greet);


// function calculateSum(a,b,callback){
//   callback(a,b);
// }

// function sum(a,b){
//   console.log(a+b);
// }

// calculateSum(10,20,sum);

// function checkEvenOdd(num,callback){
//   (num % 2 === 0)?console.log('Num is Even!'):console.log('Num is odd');
//   callback(num);
// }
// function evenOrOdd(num){
//   (num % 2 === 0)?console.log( 'Even'):console.log('Odd');
  
  
// }
// checkEvenOdd(33,evenOrOdd);

// function sayHello(){
//   console.log(`Hello!`);
  
// }
// function callTwice(fn){
//   fn();
//   fn();
// }
// callTwice(sayHello);

// setTimeout(function(){
//   console.log('Jay hoo!');
  
// },5000)


// function greeting(){
//   return function greetUser(){
//     console.log(`Hello Everyone!`);
//   };
// }
// const user = greeting();
// user();


// (function(){
//   console.log('I run immediately!');
  
// })();


// let fruits = ["apple","banana","mango","peach","grapes","papaya"];
// let numbers = [1,2,3,4,5,6];
// let mixed = ["Aman",25,true,null];
// let empty = [];
// let fruits = ["apple","banana","mango"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// console.log(fruits[fruits.length-1]);
// console.log(fruits.at(-1));
// let arr = [10,20,30,40];
// console.log(arr.length);


// let arr = [2,3,4];
// let push = arr.push(5);
// console.log(arr);


// arr.unshift(1);
// console.log(arr);

// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.reverse();
// console.log(arr);
// arr.sort()
// console.log(arr);
// arr.splice(0, 3);
// console.log(arr);
// arr.splice(1,0,4050,3050,7090,90);
// console.log(arr);
// arr.sort((a,b) => a - b);
// console.log(arr);
// arr.sort((a,b) => b - a);
// console.log(arr);

// let arr = [1,2,3,4,5];

// let arr1 = arr.slice(1,4);
// console.log(arr1);

// let arr2 = arr.concat([6,7,8,9,10]);
// console.log(arr2);

// let arr3 = arr.includes(11);
// console.log(arr3);

// let arr4 = arr2.indexOf(9);
// console.log(arr4);

// let arr5 = arr.join("-");
// console.log(arr5);

// arr.forEach(function(n){
//   console.log(n*3);
  
// })

// console.log(arr);


// arr.forEach(n => console.log(n*5)
// );


// arr.forEach((value,index,array) => {
//    console.log((index,value));
   
// })


// let arr = [10,20,30,40];
// arr.forEach((value) =>{
//   console.log(value);
  
// })

// let arr1 = [1, 2, 3, 4, 5];
// arr1.forEach((value)=>{
//    console.log(value * value);
    
// });

// let fruits = ["Apple","Banana","Mango"];
// fruits.forEach((value,index) => {
//   console.log(index ,value);
  
// })


// let arr3 = [12, 15, 18, 21, 24];
// arr3.forEach((value) => {
//   (value%2===0)?console.log(value):console.log("no even number");
  
// })


// let arr4 = [-2, 5, -1, 10, 7];
// let count = 0;
// arr4.forEach((value) => {
//   if(value > 0){
//     count++;
//   }
// });
// console.log(count);



// let arr5 = [10,20,30,40];
// let sum  = 0;
// arr5.forEach((value)=>{
//    sum += value;
 
// })
// console.log(sum);


// let names = ["ram", "shyam", "mohan"];
// names.forEach((value) =>{
//   console.log(value.toUpperCase());
  
// })


// let students = ["Ram","Shyam","Mohan"];
// students.forEach((value,index) =>{
//   console.log(`Student ${index}: ${value}`);
  
// })


// let arr = [10,55,23,89,12];
// let high = [];
// arr.forEach((value) =>{
//   high = arr.sort((a,b) => b-a);
  
  
// });
// console.log(high[0]);


// let words = ["apple","orange","banana"];
// let count = 0;
// let vowels = 'aeiou';
// words.forEach((value) =>{
//  for(let char of word){
//   if(vowels.includes(char)){
//     count++;
//   }
//  }
// })
// console.log(count);

// let prices = [100,200,300,400];
// let sum1 = 0;
// prices.forEach((value) => {
//   sum1 += value;
// })
// console.log(`Total Price is ${sum1}`);

// let nums = [1,2,3,4];
// let doubled = nums.map(n => n *2);
// console.log(doubled);

// let nums = [1,2,3,4,5,6];
// let evens = nums.filter(n => n % 2 === 0);
// console.log(evens);

// let nums = [1,2,3,4];
// let sum = nums.reduce((acc,n) => acc + n, 0);
// console.log(sum);

// let users = [{name:'A',age:20},{name:'B',age:30},{name:'C',age:28}];
// let user = users.find( u => u.age > 25);
// console.log(user);


// let nums = [10, 20 , 30, 40];
// let idx = nums.findIndex(n => n > 25);
// console.log(idx);

// let nums = [1,2,3];
// console.log(nums.some(n => n > 2));
// let nums = [1, -2, 3];
// console.log(nums.every(n => n > 0));


// let arr = [10, 20, 30];
// let a = arr[0];
// let b = arr[1];

// let [x, y, z] = arr;
// console.log(x,y,z);

// let[first, ,third] = [1,2,3];
// console.log(first,third);

// let[a = 10,b = 20] = [5];
// console.log(a,b);

// let x = 1, y = 2;
// [x,y] = [y,x];
// console.log(x,y);

// let nums = [1, 2, 3];
// let more = [0, ...nums, 4];
// console.log(more);

// let copy = [...nums];
// console.log(copy);


// let combined = [...[1,2],...[3,4]];
// console.log(combined);

// console.log(Math.max(...[5,3,9,1]));

// function sum(...nums){
//   return nums.reduce((a,b) => a+b, 0);

// }
// console.log(sum(1,2,3,4));


// let matrix =  [
//   [1,2,3],[4,5,6],[7,8,9]
// ];

// console.log(matrix[1][2]);
// console.log(matrix[2][1]);

// for(let row of matrix){
//   for(let val of row){
//     console.log(val);
    
//   }
// }

let person = {
  name:"Aman",
  age:25,
  city:"Bhopal",
  isStudent:true
},





























