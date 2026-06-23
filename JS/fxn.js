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