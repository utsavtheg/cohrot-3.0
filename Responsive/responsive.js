const right = document.querySelector(".right-arrow");
const main = document.querySelector("main");
const nav = document.querySelector('nav');
const text = document.querySelector('.txt');
const container = document.querySelector('#containers');
const contain = document.querySelector('#containers2');

const cards = [
  {
    tittle:"Tea sachets",
    rating: '4.71(84)',
    image:"organic.webp",
    bg:"#c1ee91",
    item:"Organic Tropical Green Tea",
    price:'From $11.95',
    description:'Our Organic Tropical Green is a fruity and fun take on a classic green tea.'
},
{
  tittle:"Matcha",
    rating:'4(1)',
    image:"tin.avif",
    bg:"#c8e892",
    item:"Ceremonial Matcha-1 oz Tin",
    price:'From $34.95',
    description:'Our Ceremonial matcha is organic and ceremonial-grade Japanese matcha.'
},
{
  tittle:"Naked sachets",
    rating:'5(12)',
    image:"peppermint_naked_featured.avif",
    bg:"#b0e8c1",
    item:"Organic Peppermint 50 Naked Tea Sachets",
    price:'From $21.95',
    description:'Our organic Peppermint tea is made from peppermint grown in Washington State.'
},
{
  tittle:"Naked Sachets",
    rating:'4.56(41)',
    image:"Naked_Tea.webp",
    bg:"#cce3ff",
    item:"Organic Earl Grey-50 Naked Tea Sachets",
    price:'From $21.95',
    description:"Earl Grey's distinctive aroma comes from bergamot-a citrus fruit about the size of an orange but yellow-green and slightly pear-shaped.",
},
{
  tittle:"Gifts & Samplers",
    rating:'5(2)',
    image:"bundle-herbal-tea-trio-featured-image.avif",
    bg:"#ffd884",
    item:"Herbal Tea Trio",
    price:'From $33.30',
    description:'A trio of soothing herbal.'
},
{
  tittle:"Gifts & Samplers",
    rating:'4.85(41)',
    image:"Bamboo_Tea_Chest.avif",
    bg:"#c1e4f8",
    item:"Classic Bamboo Tea Chest",
    price:'From $42.95',
    description:'This 6-slot bamboo box offers a sampling of eight sachets of six of our best selling teas.'
},
{
  tittle:"Latte Mix",
    rating:'4.3(23)',
    image:"Latte_Mix.avif",
    bg:"#c0e571",
    item:"Nice Matcha Tea Latte Mix",
    price:'From $12.95',
    description:'Our Nice Matcha is a lightly sweetened powdered mix meant for making tea lattes simple.'
},
{
  tittle:"Latte Mix",
    rating:'4.28(18)',
    image:"Latte_Mix1.avif",
     bg:"#ffcb96",
    item:"Nice Chai Tea latte Mix",
    price:'From $12.95',
    description:'Our Nice chai is not too spicy.powdered latte mix meant for making tea lattes simple.'
},
{
  tittle:"Tea sachets",
    rating:'4.79(108)',
    image:"organic_high_mountain.avif",
    bg:"#ffd1b8",
    item:"Organic Mountain High Chai Tea",
    price:'From $11.95',
    description:'An ode to our Rocky Mountain roots,our organic Mountain High Chai takes your tastebuds down a spice-filled ski slope.'
},
{
  tittle:"Naked sachets",
    rating:'5(6)',
    image:"alpine_berry_naked_featured.avif",
    bg:"#aee0f9",
    item:"Alpine Berry 15 Naked Tea Sachets",
    price:'From $8.95',
    description:'Our signature herbal blend,Alpine Berry is a caffeine-free,naturally sweet and tart tea.'
},

]


right.addEventListener("click",()=>{
  main.classList.add('change');
  text.innerHTML = `<span>A cup that fits the moment.</span>
  <p>From compostable whole leaf tea sachets and iced tea to tea lattes and matcha, we’ve got something for everyone.</p>
  <button>Shop Now</button>`;
  text.classList.add('change-txt');
});

const trigger = main.offsetTop + window.innerHeight * 0.3;
window.addEventListener("scroll",()=>{
  if(window.scrollY >= trigger){
    nav.classList.add('fixed');
  }else{
     nav.classList.remove('fixed');
  }
})


function buildSlide(card){
  const div = document.createElement('div');
  div.classList.add('swiper-slide');
  div.innerHTML = `
  <div class="card">
        <div class="top">
          <div class="heading">
            <h5>${card.tittle}</h5>
          </div>
          <div class="right-top-card">
            <i class="ri-star-fill"></i>
            <p>${card.rating}</p>
          </div>
        </div>
        <img src="${card.image}" alt="">
        <div class="card-btm">
          <div class="empty"></div>
          <div class="add">
            <i class="ri-add-line"></i>
            Add</div>
        </div>
      </div>
      <div class="description">
        <div class="name">
        <h4>${card.item}</h4>
        </div>
        <div class="price">
         <h5>${card.price}</h5>
        </div>
        <div class="describe">
          <p>${card.description}</p>
        </div>
      </div>`;
  div.querySelector('.card').style.background = card.bg;
  return div;
}

cards.forEach(card => {
  container.appendChild(buildSlide(card));
});

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
   breakpoints: {
    0: {
      slidesPerView: 1.1,  
    },

    480: {
      slidesPerView: 1.3,   
    },

    768: {
      slidesPerView: 2.2,   
    },

    1024: {
      slidesPerView: 3.3,     
    },

    1440: {
      slidesPerView: 4,     
    }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const tea = ['chai tea','herbal tea','iced tea','black tea','green tea'];
const input = document.querySelector('input');

let index = 0;
  setInterval(()=>{
    input.placeholder = tea[index];

    index++;

    if (index >= tea.length) {
        index = 0;
    }
  },2000);


const reviews = [
    {
      opinion:"The right amount of spice.",
      customerName:'Angelina R.',
      image:"organic_high_mountain.avif",
      product:'Organic mountain high chai',
      bg:"#ffd1b8",
      btmBg:"#fff4ec",
    },
    {
      opinion:"This drink is incredibly refreshing, especially when served over ice.It's light,crisp,and instantly cooling, making it perfect for a quick refresh any time of day.",
      customerName:'Jacob K.',
      image:"Latte_Mix.avif",
      product:"organic matcha mint",
      bg:"#c0e571",
      btmBg:"#eef7df",
    },
    {
      opinion:"One sip and you can feel the difference—clean energy, rich flavor, and all the good stuff your body loves. Literally liquid GOLD.",
      customerName:"Harrison G.",
      image:"Naked_Tea.webp",
      product:"Two Roots Golden Latte Mix",
      bg:"#cce3ff",
      btmBg:"#eaf3ff",
    },
    {
      opinion:"Soo tasty and energizing.",
      customerName:"Gracie M.",
      image:"organic.webp",
      product:"Organic Tropical Green Tea",
      bg:"#c1ee91",
      btmBg:"#edfadd",
    },
    {
      opinion:"The perfect start to my day.",
      customerName:"Jorge F.",
      image:"alpine_berry_naked_featured.avif",
      product:"Jasmine Petal",
      bg:"#aee0f9",
      btmBg:"#e8f7fe",
    }
  ]

function buildSlide1(review){
  const div = document.createElement('div');
  div.classList.add('swiper-slide');
  div.innerHTML = `<div class="cards">
  <h3>${review.opinion}</h3>
  <p>${review.customerName}</p>
  <div class="btm-review">
    <div class="img">
      <img src="${review.image}">
    </div>
    <div class="name">
      ${review.product}
    </div>
    <div class="shop">Shop</div>

  </div>
</div>`;
  div.querySelector('.cards').style.background = review.bg;
  div.querySelector('.btm-review').style.background = review.btmBg;
  return div;
}

reviews.forEach(review => {
  contain.appendChild(buildSlide1(review));
});

const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    480: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3.3,
    },
    1440: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
