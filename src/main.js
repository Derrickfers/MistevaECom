
// #region part import export s
import './style.css' 
import products from "/src/api/products.json";
import mainPage from "/src/api/mainPage.json";
import { showProductContainer } from './featuredProductsCard'; 
import { showMainPage } from './mainBannerPage';
import { toggleSearchBar } from './searchBar';
import { signUpFunction } from './signUpFunction';
import { openCloseNav } from './openCloseNav';

// #endregion part import export e


// #region part get class or id s
 
// #endregion part get class or id e
 
// Detect touch device
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.body.classList.add('no-hover');
}


if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
  document.querySelectorAll(".dropdown").forEach((element) => {
    element.addEventListener("click", (e) => {
      element.classList.toggle("dropdownShowTouch");
    });
    element.innerHTML = "";
    if (element.classList.contains("nav-words-Shop")) {
      element.innerHTML = ` 
            <li class="nav-words">Shop ▾</li>
             
            <div class="dropdown-content">
              <a href="./shop.html"> Shop all</a>
              <a href="./shop.html?category=Hair-Care">Hair Care</a>
              <a href="./shop.html?category=Bath-%26-Shower">Bath & Shower</a>
              <a href="./shop.html?category=Make-up">Make-up</a>
              <a href="./shop.html?category=Manicure-%26-Pedicure">Manicure & Pedicure</a>
              <a href="./shop.html?category=Skin-Care">Skin Care</a>
              <a href="./shop.html?category=Fragrance">Fragrance</a>
            </div>`;
    }

    if (element.classList.contains("nav-words-Products")) {
      element.innerHTML = ` <li class="nav-words">Products ▾</li> 
            <div class="dropdown-content">
              <a href="./products.html">all Products </a>
              <a href="./person-categories-kids.html">kids's collection</a>
              <a href="./person-categories-men.html">men's collection</a>
              <a href="./person-categories-women.html">women's collection</a>
            </div>`;
    }
  });
} else {
  document.querySelectorAll(".dropdown").forEach((element) => {
    element.classList.add("dropdownShowHover");
  });
}




//#region section-ad s
const sectioAd = document.querySelector(".section-ad");
const cancelItems = document.querySelector(".cancel");

const itemAddCancel = () => {
  sectioAd.classList.toggle("canceled")

  setTimeout(() => {
    sectioAd.classList.toggle("canceled")
  }, 20000);
};

cancelItems.addEventListener("click", itemAddCancel);

//#endregion section-ad e


// #region header section s 
// navbar open / close
document.querySelector(".bar5").addEventListener("click", (e) => {  
  openCloseNav(e); 
}); 


// Sign up 
// toggle open / close Sign up page
document.querySelectorAll(".sign-in-person").forEach((ele) => {
  ele.addEventListener("click", signUpFunction);
}); 
document.querySelector(".cancel-signup-form").addEventListener("click", signUpFunction);

// password toggle show / hide
document.querySelector(".toggle-password").addEventListener("click", () => {
  const passwordTog = document.querySelector("#passwordTog");
  if (passwordTog.type === "password") {
    passwordTog.type = "text";
  } else {
    passwordTog.type = "password";
  }
  } );
 
// search bar
const searchIco = document.querySelector(".search-ico");
const searchIco2 = document.querySelector(".icon-close-bar");

searchIco.addEventListener("click", toggleSearchBar);
searchIco2.addEventListener("click", toggleSearchBar);
 
// #endregion header section e

// #region main section s 
// Define swiper 
  const swiper = new Swiper('.main-container', {
   
  loop: true,
  effect: 'slide', 
  speed:500, 

  // autoplay
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    
  }, 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-main',
    prevEl: '.swiper-button-prev-main',
  }, 
});   

// Define function information of mainPage
showMainPage(mainPage);

// #endregion main section e
 

//#region section featured-things
// Define featured-things Swiper
const swiper2 = new Swiper('.featured-things', {
   
  // loop: true,
  effect: 'slide', 
  speed:500, 
 

  freeMode: true,
  grabCursor: true,


  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    
  }, 

  // Navigation arrows
  navigation: {
    nextEl: '.featured-next',
    prevEl: '.featured-prev',
  }, 
  
  // Default parameters 
  slidesPerView: 'auto',
  spaceBetween: 15,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1, 
    },
    600: {
      slidesPerView: 2, 
    },
    // when window width is >= 640px
    850: {
      slidesPerView: 3, 
    },

    // when window width is >= 640px
    980: {
      slidesPerView: 2, 
    },

    // when window width is >= 640px
    1150: {
      slidesPerView: 3, 
    },

    // when window width is >= 640px
    1550: {
      slidesPerView: 4, 
    },

    

    // when window width is >= 640px
    // 1200: {
    //   slidesPerView: 4, 
    // }
  }
});   

// Define a function show product 
showProductContainer(products);

//#endregion section featured-things


//#region faq-section s
 
  const items = document.querySelectorAll(".faq-item");
 
  items.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      items.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
          i.querySelector(".faq-answer").classList.remove("show");
          i.querySelector(".toggle-icon").textContent = "+";
        }
      });

      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      const icon = item.querySelector(".toggle-icon");

      if (item.classList.contains("active")) {
        answer.classList.add("show");
        icon.textContent = "✕";
      } else {
        answer.classList.remove("show");
        icon.textContent = "+";
      }
    });
  });
 
//#endregion faq-section e







