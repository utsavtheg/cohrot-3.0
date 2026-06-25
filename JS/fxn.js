// let str = [];
// function reverseString(name,callback){
//   for(let i = 0;i<name.length;i++){
//     let add = name[i];
//      str.push(add);  
//   }

 
//   let j = str.length-1;
//   while(j >= 0){
//     console.log(str[j]);
//     j--;
//   }
//    callback(name);
  
// }


  


// function palindrome(name){
//     let lower = name.toLowerCase();
//     let result = '';
//     for(let i = name.length-1;i >= 0;i--){
//        result += lower[i];
      
       
//     }
//     if(result === lower){
//       console.log(`${lower} is a Palindrome`);
      
//     }else{
//       console.log(`${lower} is not a Palindrome`);
      
//     }
        
    
    
    
    
// }
// reverseString("Raj",palindrome);



// let str = [];
// function reverseString(name,){
//   for(let i = 0;i<name.length;i++){
//     let add = name[i];
//      str.push(add);  
//   }

//  let reverse = str.reverse();
//  for(let char of reverse){
//   console.log(char);
  
//  }
 
  
// }

// reverseString("Mainpuri");



// const multiply = function multiplication(a,b){
//   return a * b;
// }
// console.log(multiply(5,10));
// function add(a,b){
//   return a + b;
// }
// const addition = add(23,12);
// console.log(addition);
// const add = (c,b) => {
//   return c + b;
// }
// console.log(add(12,13));

// function Sum(...num) {
//   let total =  num.reduce((acc,n) => acc+n,0);
//   console.log(total); 
// }
// Sum(12,20,30,38);

// function countVowels(name){
//   let lower = name.toLowerCase();
//   let count = 0;
//   for(let char of lower)
//   if(char === 'a' ||char ===  'e'||char === 'i'||char === 'o'||char === 'u'){
//     count++;  
//   }
//    console.log(`Vowels in ${name} is ${count} `); 
// }
// countVowels('education');

// function call(name){
//   console.log(`Hello ${name} i was call from setTimeout`);
  
// }
// setTimeout(() => {
//   call('Raj');
// },1000);
// function backChod(){
//   return function raviChaurasiya(age){
//     console.log("kya umar ho gyi:" +age +" saal");
//     return function kyaHua(name){
//      console.log(`kaise hooo ${name}!`);
//      ;
//     }
//   }
// }
// const fxn = backChod();
// const inner = fxn(2);
// inner('raj');

// function add(a,b){
//   console.log(a+b);
//   return function multiply(c,d){
//     return c * d;
//   }
  
// }
// const check = add(10,15);
// let result = check(10,10);
// console.log(result);

// function add(c,d){
//   return c+d;
// }
// let multiple = 8;
// function check(b){
//   console.log(multiple * b);
  

// }
// check(10);


// function factorial(n){
//   if(n <= 1) return 1;
//   return n * factorial(n-1);
  
  
// }
// let check =  factorial(5);
// console.log(check);


// function fibonacci(n){
//   if(n === 0) return 0;
//   if(n === 1) return 1;
  
//   return fibonacci(n-1) + fibonacci(n-2);

// }
// let check = fibonacci(6);
// console.log(check);


// (function(){
//   console.log(`Executed!`);
  
// })();
// function power(num,pow){
//   if(pow === 0) return 1;
//   return num * power(num*(pow-1));
// }
// let check = power(2,10);
// console.log(check);

// function myMap(arr,callback){
//      let result = [];
//      let element;
//      let newValue;
//      for(let i = 0;i < arr.length;i++){
//       element = arr[i];
//        newValue = callback(element);
//       result.push(newValue);
      
//      }
//      return result;
// }
// let arr = [];

// let x = arr.push(10);

// // console.log(arr);
// console.log(x);

// function checkMap(element){
//   return element * 5;
// }
// console.log(myMap([2,4,6,8],checkMap));

// function myFilter(arr,callback){
//   let result = [];
//   let element;
//   let newValue;
//   for(let i = 0;i<arr.length;i++){
//     element = arr[i];
//     newValue = callback(element);
//     if(newValue === true)
//       result.push(element);

//   }
//   return result;
// }
// function checkFilter(element){
//    return element % 2 === 0;
// }
// console.log(myFilter([1,2,3,4,5,6,78,99],checkFilter));


// function myReduce(arr,callback,initialValue){
//   let accumulator;
//   if(initialValue !== undefined){
//     accumulator = initialValue;
//     let currentValue;
//     for(let i = 0;i < arr.length;i++){
//       currentValue = arr[i];
//        accumulator = callback(accumulator,currentValue);
//     }
//   }else{
//      accumulator = arr[0]
//     for(let i = 1;i<arr.length;i++){

//     accumulator = callback(accumulator,currentValue);
//   }
//   }
//    return accumulator;
// }

// function checkReduce(accumulator,currentValue){
//     return accumulator+currentValue;
// }
// console.log(myReduce([1,2,3,4],checkReduce,0));

// function myForEach(arr,callback){
//   let element;
//   for(let i = 0;i<arr.length;i++){
//     element = arr[i];
//     callback(element);
    
//   }
// }
// function checkForEach(element){
//   console.log(element*5);
  
// }
// myForEach([1,2,3,4,5],checkForEach);

// function outer(){
//   let flag = false;
//   return function inner(){
//     if(!flag){
//       console.log("Hello");
//       flag = true;
//     }
//   }
// }

// const fn = outer();
// fn();
// fn();
// fn();

// 1
// console.log(x);
// var x = 5;

// // 2
// foo();
// function foo() { console.log("called"); }

// // 3
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// // 4
// function make() {
//   let secret = "hidden";
//   return () => secret;
// }
// const reveal = make();
// console.log(reveal());

// this keyword kaise call kiya babu!
// console.log(this);

// 'use strict'
// function show(){
//   console.log(this);
  
// }
// show();

// const user = {
//   name:"Rahul",
//   greet(){
//     console.log("Hi, "+this.name);
    
//   }
// };
// // user.greet();
// const fn = user.greet;
// fn();

// const user = {
//   name:"Rahul",
//   greet:()=>{
//     console.log(this.name);
    
//   }
// }
// user.greet();
// const user = {
//   name:"Rahul",
//   hobbies:["coding","gaming"],
//   show(){
//     this.hobbies.forEach((hobby) =>{
//       console.log(this.name + " likes " + hobby);
      
//     });
//   }
// }
// user.show();
// function introduce(city,country){
//   console.log(`Main ${this.name} hoon ${city}, ${country} se`);

  
// }
// const person  = {name:"Rahul"};
// introduce.call(person,'Moscow','Rajasthan');

// let user = prompt('enter your name:');
// let userAge = prompt('enter your age:');
// let person = {name:user,age:userAge};


//  function useOfThisByCall(country = "India"){
//   return `Hii ${this.name} you are ${this.age} years old and ${country}`;
// }
// console.log(useOfThisByCall.call(person));

// function tripPlan(destination, days){
//   console.log(`Let's go to ${destination} guy's our budget is ${this.budget} and no of days ${days}`);
// }
// let check = {budget:12000};
// tripPlan.apply(check,['Udaipur',5]);

// function bdayTreat(spot,date){
//   console.log(`Every one come at ${this.time} location is ${spot} and date is ${date}`);
// }
// let check = {time:"5 am"};

// const treat = bdayTreat.bind(check);
// treat('NMB',25);

// function Person(name){
//   this.name = name;
// }
// const p = new Person('Rahul');
// console.log(p.__proto__ === Person.prototype);


// const animal = {
//   eats:true,
//   walk(){console.log('Animal chal rha hai');
//   }
// };

// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.barks);
// console.log(dog.eats);
// dog.walk();

// const Shopping = {
//   budget:11000,
//   wants:"Outfit",
//   location:"Delhi",
//   kisKisKoLayJaaRhaHai:"4",
//   letGo(){console.log(`Guy's Chalte hai Shopping par`)},
// };
// const friends = Object.create(Shopping);
// friends.go = console.log(`Kab chl rhe hai lela!`);
// console.log(friends.wants);
// console.log(friends.location);
// friends.letGo();
// const protoTypeCreate = {
//   identity:"Prototype",
//   id(){console.log(`I am a prototype of ${this.user}`);
//   },
// };
// const checkProto = Object.create(protoTypeCreate);
// checkProto.user = "check";
// checkProto.id();
// console.log(checkProto.identity);

// Class
// class Person {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   greet(){
//     console.log(`Hii,main ${this.name}`);
    
//   }
// }
// const p = new Person('Rahul',25);
// p.greet();

// class CheckClass{
//   constructor(brand,price){
//      this.brand = brand;
//      this.price = price;
//   }

//   mobile(){console.log(`Hii i have ${this.brand} smartphone and price is ${this.price}.`);
//   };
// };
// const c = new CheckClass('Realme',15000);
// c.mobile();

// class Animal{
//   constructor(name){
//     this.name = name;
//   }
//   eat(){console.log(`${this.name} kha rha hai.`);
//   }
// };

// class Dog extends Animal{
//   constructor(name,breed){
//     super(name);
//     this.breed = breed;
//   }
//   bark(){console.log(`Hii i am ${this.name} i can bark.`);
//   };
// }
// const d = new Dog('Tommy','labrador');
// d.eat();
// d.bark();

// class City{
//   constructor(name,state){
//     this.name = name;
//     this.state = state;
//   }
//   spot(){
//     console.log(`Hii my city is ${this.name} and it is located in ${this.state}`);
    
//   };
// }

// class ChiefMinister extends City{
//  constructor(name,state,cm){
//   super(name,state);
//   this.cm = cm;
  
//  }
//  chiefMinister(){
//   console.log(`Hii i am ${this.cm} cm of ${this.state}`);
  
//  }
// }

// const c = new ChiefMinister('Rishikesh','UttraKhand','Pushkar Singh');
// c.spot();
// c.chiefMinister();

// class MathHelper {
//   static PI = 3.14159;
//   static add(a,b){return a + b;}//static method
// }
// console.log(MathHelper.add(45,90));
// console.log(MathHelper.PI.toFixed(2));

