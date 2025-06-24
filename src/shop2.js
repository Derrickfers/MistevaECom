// #region part import export s
import './style.css' 
import { getCartProductsFromLS } from './getProductsLS';
import { toggleSearchBar } from './searchBar'; 
import { updateNumberCart } from './updateCartNumberNavbar';
import products from "/src/api/products.json";
import { showProductContainer2 } from './shopCatiProductsCard';
import { signUpFunction } from './signUpFunction';
import { openCloseNav } from './openCloseNav';

// #endregion part import export e


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
// navbar open / close
document.querySelector(".bar5").addEventListener("click", (e) => {  
  openCloseNav(e); 
});

// #region header section s
 
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

// main hearde menu cart icon number update
let cartProductsLs = getCartProductsFromLS(); 
updateNumberCart(cartProductsLs);


// #region shop categories products section s

// displaying all products 
showProductContainer2(products);

 
// #region filter gallery cards tackel s
const categoriesBtnsContainer = document.querySelector(".categories-btns"); 
const columnCard = document.querySelectorAll(".columnCard");


// click filer btns
categoriesBtnsContainer.addEventListener("click", (e)=> {
e.preventDefault();

if (e.target.classList.contains("btn-shop1")) {
    // Remove 'active' from the current button
    const activeBtn = categoriesBtnsContainer.querySelector(".active");
    if (activeBtn) activeBtn.classList.remove("active");

    // Add 'active' to the clicked button
    e.target.classList.add("active");


    const filterValue = e.target.getAttribute("data-id");
    filterCards(filterValue);
  } 
});

// filter cards
function filterCards(filterValue) {
  columnCard.forEach((element) => {
    if (element.classList.contains(filterValue) || filterValue === "all") {
      element.classList.remove("hide");
      element.classList.add("show");
    } else {
      element.classList.remove("show");
      element.classList.add("hide");
    }
  });
};

// Auto-trigger filter from URL on page load
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  console.log(params);
  
  const filterFromURL = params.get("category");

  if (filterFromURL) {
    const buttons = categoriesBtnsContainer.querySelectorAll(".btn-shop1");

    buttons.forEach((btn, index) => {
      if (btn.getAttribute("data-id") === filterFromURL) {
        // Remove previous active if any
        const activeBtn = categoriesBtnsContainer.querySelector(".active");
        if (activeBtn) activeBtn.classList.remove("active");

        // Highlight the matched button
        btn.classList.add("active");

        // Filter the cards
        filterCards(filterFromURL);

        // Scroll swiper to that button
        swiper3.slideTo(index, 300); // 300ms for smooth slide
      }
    });
  }
});
// #endregion filter gallery cards tackel e
 

// Define filter gallery cards Swiper
const swiper3 = new Swiper('.categories-btns', {
   
  // loop: true,
  effect: 'slide', 
  speed:500,  
 
  freeMode: true,
  grabCursor: true,

  
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
 
  // Default parameters 
  slidesPerView: 'auto',
  spaceBetween: 10,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1, 
    },
    // when window width is >= 480px
    580: { 
      slidesPerView: 2,
    },
    // when window width is >= 640px
    805: {
      slidesPerView: 3, 
    },

    // when window width is >= 640px
    1210: {
      slidesPerView: 4, 
    },

    // when window width is >= 640px
    1475: {
      slidesPerView: 5, 
    },
    // when window width is >= 640px
    1740 : {
      slidesPerView: 6, 
    },
    // when window width is >= 640px
    2003: {
      slidesPerView: 7, 
    },
    
    
  }
}); 
// #endregion shop categories products section e



