// const title = document.querySelector('#title');
// const btn = document.querySelector('#btn');
// const body = document.querySelector('body');
// const output = document.querySelector('#output');
// const input = document.querySelector('#username');
// const ul = document.querySelector('ul');
// const card = document.querySelector('.card');
// const head = document.querySelector('.head');
// const box = document.querySelector('.box');
// const cart = document.querySelector('.cart');
// const count = document.querySelector('.count');
// const remove = document.querySelector('.remove');
// let num = Number(0);

// btn.addEventListener("click",()=>{
  // output.textContent = `${input.value}`;
//  const list = document.createElement('li');
//    list.textContent = `${input.value}`;
//     ul.appendChild(list);
    // body.style.backgroundColor = 'lightblue';
  // output.classList.toggle('hide');
    // head.classList.toggle('hide');
    // count.textContent = `${++num}`;

  





// })
// remove.addEventListener("click",()=>{
//   if(num > 0){
//   count.textContent = `${--num}`;
//   }else{
//     count.textContent = `0`;
//   }
// })
// title.textContent = `Welcome to the Javascript`;
const input = document.querySelector('input');
const btn = document.querySelector('#btn');
const para = document.querySelector('p');

btn.addEventListener("click",()=>{
 let count = input.value.length;
  para.textContent = `Character :${count}`;
  
   
   
    

  
})