let fruits = ['apple','mango','orange','papaya','banana'];
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);
// console.log(fruits.push('grapes'));
// console.log(fruits.pop());
// console.log(fruits.unshift('watermelon'));
// console.log(fruits.shift());
// console.log(fruits.reverse());
// console.log(fruits.sort((a,b) => a.localeCompare(b)));
// console.log(fruits.sort((a,b)=> b.localeCompare(a)));
// let spliceRemove = fruits.splice(1,2);
// console.log(spliceRemove);
// console.log(fruits);
// let spliceAdd = fruits.splice(2,0,"muskmelon","peach");
// console.log(spliceAdd);
// console.log(fruits);
// let copy = fruits.slice(0,5);
// console.log(copy);
// console.log(fruits);
// let index = fruits.indexOf('papaya');
// console.log(index);
// let check = fruits.includes('apple');
// console.log(check);
// let veggies = ['potato','onion','ladyfinger','lemon'];
// console.log(fruits.join(','));
// let merge = [...fruits,...veggies];
// console.log(merge);
// let copy = [...fruits];
// console.log(copy);
// let max = Math.max(...[89,4567,9999,2334567]);
// console.log(Math.max(...[45,56,78,90]));
// console.log(max);
// let [x , y,z,p] = fruits;
// console.log(x,y,p);
// let num = [21,33,4,55,66,99];
// num.forEach((num) => {
//   console.log(num*2);
  
// })
// let result = num.map((num) => {
//   return num * num;
// })
// console.log(result);

// let check = num.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(check);
// let check = num.reduce((acc,n) => {
//   return acc + n;
// },0)
// console.log(check);
// let findMax = num.reduce((acc, n) => {
//   return acc > n ? acc : n;
// }, num[0])
// console.log(findMax);
// let findEven = num.find((num) =>{
//   return num % 2 === 0;
// })
// console.log(findEven);
// let findIndex = num.findIndex((num) => {
//   return num > 98
//   ;

// });
// console.log(findIndex);

// let someCheck = num.some((num)=>{
//   return num < 98;
// });
// console.log(someCheck);
// let checkEvery = num.every((num) => {
//   return num > 0;

// });
// console.log(checkEvery);

// let covertUpperCase = fruits.map((fruit)=>{
//   return fruit.toUpperCase();
// })
// console.log(covertUpperCase);

let marks = [78,99,59,39,89,49];
// let check = marks.filter((mark)=>{
//   return mark > 80;
// });
// console.log(check);
// let checkAvg = marks.reduce((acc,n)=>{
//   return acc+n;
// },0);
// let avgMarks = checkAvg/marks.length;
// console.log(avgMarks);

// let occurrence = [1,1,1,1,1,1,2,3,4,4,4,1,5,6,7,7,7,7,7,7,7,7];
// let count = {};
// function checkCount(){
// occurrence.forEach((n)=>{
//        if(count[n]){
//         count[n] = count[n]+1
//        }else{
//         count[n] = 1;
//        }
// });
//  console.log(count);
//  let max = 0;
//  let key;
//  for(let k in count){
//      if(count[k] > max){
//        max = count[k];
//        key = k;
//      }
    
     
//  }
//  console.log(key,max);
// }
// checkCount();


// let age = [22,34,65,12,45,98,75,99,105,2];
// let ageSort = age.sort((a,b)=> a-b);
// ageSort.forEach((n)=>{
//   console.log(n);
  
// })
// let cart = [1200,450,890,1230,5690];
// let cartPrice = cart.reduce((acc,n)=>{
// return acc + n;
// },0)
// console.log(cartPrice);
// let users = [
//   { name: "Rahul", age: 20 },
//   { name: "Amit", age: 21 },
//   { name: "Priya", age: 20 },
//   { name: "Neha", age: 22 },
//   { name: "Riya", age: 21 }
// ];
// let group = {};
// function sortAge(){
//   let maxAge = 0;
//  users.forEach((n)=>{
//   if(n.age > maxAge){
//     maxAge = n.age;
//   }
//   console.log(maxAge);
  
//  })
 
 
// }
// sortAge();




















