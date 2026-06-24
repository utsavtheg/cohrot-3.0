const main = document.querySelector("main");
const box = document.createElement("div");
const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const overlay = document.querySelector('#overlay');
const score = document.querySelector('#score');
box.classList.add("box");
let time = 0;
let interval;
const randomColor = ()=>{
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);

  return `rgb(${r},${g},${b})`;
}
const randomBox = ()=>{
   box.style.backgroundColor = randomColor();
    main.append(box);

    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;
    let topShift = Math.random() * mainH;
    let leftShift = Math.random() * mainW;
    box.style.top = `${topShift}px`;
    box.style.left = `${leftShift}px`;
}
btn.addEventListener("click", () => {
  main.append(box);
  randomBox();
   clearInterval(interval);
   interval = setInterval(() => {
    randomBox();
     time += 1;
     timer.textContent = time;
  }, 1000)

  setTimeout(() => {
    clearInterval(interval);
    overlay.style.display = 'flex';
  }, 10000);

});
let scoreInc = 0;
box.addEventListener("click", (e) => {
  scoreInc += 1;
  score.textContent = scoreInc;
}); 