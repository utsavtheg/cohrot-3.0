// let person = {
//   name:"Aman",
//   age:25,
//   city:"Bhopal",
//   isStudent:true
// };
// // Dot notation (preferred)
// console.log(person.name);   // "Aman"

// // Bracket notation
// console.log(person["name"]);   // "Aman"

// let key = "age";
// console.log(person[key]);
// console.log(person.key);

// let person = {
//   name: "Aman",
//   age:25
// };


// //Add
// person.city = "Bhopal";
// person["country"] = "India";
// person.course = 'Btech ECE';
// person.year = 2;

// //update
// person.age = 26;

// //delete
// delete person.city;

// delete person.name;

// console.log(person);

// let calculator = {
//   add:function(a,b){
//     return a+b;
//   },
//   subtract:function(a,b){
//     return a-b;
//   },
//   multiply:function(a,b){
//     return a * b;
//   }
// };

// console.log(calculator.add(15,5));
// delete calculator.multiply;
// console.log(calculator);
// calculator.square = function(a){
//     return a * a;
// }
// console.log(calculator.square(9));

// console.log(calculator);


// let calculator = {
//   add(a,b){
//     return a+b;
//   },
//   sub(a,b){
//     return a -b;
//   },
// };
// console.log(calculator);
// console.log(typeof calculator);

// let person = {
//   name: "aman",
//   greet(){
//     console.log("Hello, I am " + this.name);
    
//   }
// };
// person.greet();

// let user = {
//   name:"aman",
//   address:{
//     city:"Bhopal",
//     state:"M P",
//     pincode:205001,
//   },
//   hobbies:["reading","coding"]
// };
// console.log(user.address.city);
// console.log(user.address.pincode);
// console.log(user);
// user.address.mobileNumber = 923455;
// console.log(user.address.mobileNumber);
// delete user.address.city;
// user.name = "Raj"
// console.log(user);


// let person = {
//   name:"Aman",
//   age:33,
//   city:"Bhopal",

// };
// let{name,age} = person;
// console.log(name,age);

// let{
//   name:fullName, age: years
// } = person;
// console.log(fullName,years);

// let{name,country = "India"} = person;
// console.log(country);
// console.log(person);

// let person = {name:"Aman",address:{city:"Bhopal"}};
// let{address:{city}} = person;
// console.log(person);

// let person = {name:"Aman",age:25};
// let copy = {...person};

// let extra = {city:"Bhopal",country:"India"};
// let combined = {...person,...extra};
// console.log(combined);

// let updated = {...person, age:26};
// console.log(combined);
// console.log(updated);

// let person = {name:"Aman",age:35,city:"bhopal"};
// console.log(Object.keys(person));
// console.log(Object.values(person));

// person.country = "India";
// console.log(person);

// console.log(Object.entries(person));

// Object.entries(person).forEach(([key,value]) =>{
//   console.log(`${key}: ${value}`);
  
// })

// let merged = Object.assign({},person,{age:26,country:"India"});
// console.log(merged);

// let frozen = Object.freeze({
//   name:"Aman"
// });
// frozen.name = "Raj";
// console.log(frozen.name);
// let sealed = Object.seal({name:"Aman",age:33});
// sealed.name = "raj";
// console.log(sealed);
// sealed.city = "agra";
// console.log(sealed);

let person = {name:"Aman",age:23,city:"Bhopal"};
// for(let key in person){
//   console.log(key, ":" ,person[key]);
  
// }

// Object.keys(person).forEach(key => {
//   console.log(key,person[key]);
  
// })

// Object.entries(person).forEach(([key,value])=>{
//   console.log(key, ":", value);
  
// })
// for(let [key,value] of Object.entries(person)){
//   console.log(key, ":" ,value);
  
// }

// let users = [
//   {name:"Aman",age:25},
//   {name:"Priya",age:3},
//   {name:"Aditi",age:44}
// ];
// let names = users.map(u => u.name)
// console.log(names);

// let adults = users.filter(u => u.age >= 25);
// console.log(adults);


// let avgAge = users.reduce((sum,u) => sum + u.age, 0/users.length);
// console.log(avgAge);


// Project 1 Library Management;
// let library = {
//   books:[],
//   addBook(tittle,author){
//     this.books.push({
//       id:this.books.length+1,
//       tittle,author,
//       borrowed:false,
//     });
//   },

//   borrowBook(id){
//     let book = this.books.find(b => b.id === id);
//     if(!book) return 'Book not found';
//     if(book.borrowed) return 'Already Borrowed';
//     book.borrowed = true;
//     return 'You borrowed ${book.tittle}';
//   },
//   returnBook(id){
//     let book = this.books.find(b => b.id === id);
//     if(!book) return 'Book not found';
//     book.borrowed = false;
//     return 'You returned ${book.tittle}';
//   },
//   availableBooks(){
//     return this.books.find(b => !b.borrowed);
//   }

// };

// library.addBook('Atomic Habits','James Clear');
// library.addBook('Deep work','Cal Newport');
// console.log(library.borrowBook(1));
// console.log(library.availableBooks());








// Project 2 Shopping cart

// let cart = [];
// function addItem(name, price, qty = 1){
//   let existing = cart.find(item => item.name === name);
//   if(existing){
//     existing.qty += qty;

//   }else{
//     cart.push({name,price,qty});
//   }
// }

// function removeItem(name){
//   cart = cart.filter(item => item.name !== name);
// }
// function getTotal(){
//   return cart.reduce((sum,item) => sum + item.price * item.qty,0);
// }
// function showCart(){
//   cart.forEach(item =>{
//     console.log(`${item.name} x ${item.qty} = ₹${getTotal()}`);
    
//   });
//   console.log(`Total: ₹${getTotal()}`);
  
// }
// addItem('Notebook', 100, 5);
// addItem("Bottle",120, 6);
// // addItem("Biscuit",35,12);
// showCart()


// let todos = [];
// function addTodo(task){
//   todos.push({id:todos.length+1,task,done:false});
// }
// function completeTodo(id){
//   let todo = todo.find(t => t.id === id);
//   if(todo)todo.done = true;
// }
// function removeTodo(id){
//   todos = todos.filter(t =>t.id !== id);
// }

// function showTodos(){
//   todos.forEach(t => {
//     console.log(`${t.id}.[${t.done?"x":" "}] ${t.task}`);
    
//   });
// }

// addTodo("Learn Js");
// console.log(todos);
// removeTodo(1);
// console.log(todos);

// let students = [
//   {name:"Aman",marks:[80,90,75]},
//   {name:"Priya",marks:[95,85,92]},
//   {name:"Raj",marks:[60,55,70]},
// ];

// function getAverage(marks){
//   return marks.reduce((sum, m) =>
//    sum+m,0)/marks.length;
//   }

//   function getGrade(avg){
//     if(avg >= 90) return 'A';
//     if(avg >= 75) return 'B';
//     if(avg >= 60) return 'C';
//     return 'F';
//   }

//   students.forEach(s => {
//     let avg = getAverage(s.marks);
//     console.log(`${s.name}: Avg = ${avg.toFixed(2)}, Grade = ${getGrade(avg)}`);
    
//   })


// let cart = [];
// function addItem(name,price,qty = 1){
//   let existing = cart.find(item => item.name === name);
//   if(existing){
//     existing.qty += qty;
//   }else{
//     cart.push({name,price,qty});
//   }
// }

// function removeItem(name){
//   cart = cart.filter(item => item.name !== name);
// }

// function getTotal(){
//   return cart.reduce((sum,item) => sum+item.price * item.qty,0);
// }
// function showCart(){
//   cart.forEach(item => {
//     console.log(`${item.name} x ${item.qty} = ₹${item.price * item.qty}`);
    
//   });
//   console.log(`Total: ₹${getTotal()}` );
  
// }

// addItem('Sugar',45,50);
// addItem('Thumpsup',95,10);
// addItem('Crispelo',10,25);
// addItem('DairyMilk',50,45);
// console.log(cart);

// removeItem('Thumpsup');
// console.log(cart)
// showCart();

