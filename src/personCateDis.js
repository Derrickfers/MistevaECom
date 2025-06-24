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

// main header menu cart icon number update
let cartProductsLs = getCartProductsFromLS(); 
updateNumberCart(cartProductsLs);


// get page person type name
const currentPage = window.location.pathname;
const filterValue = currentPage.split("-").pop().replace(".html", ""); 
 

// #region person btns types function section s
const btnShopClick = document.querySelector(".btn-shopClick"); 
const btnShop5 = document.querySelector(".btn-shop5"); 

btnShop5.addEventListener("click", () => { 
    document.querySelectorAll(".btn-shop1").forEach(element => {
        element.classList.remove("plusInActive");
        element.classList.add("plusActive")

         
        const dataId = element.getAttribute("data-id");
         
if (dataId === filterValue) {
    element.classList.add("active2") 

}
    });  
    btnShop5.classList.add("plusInActive")
    btnShop5.classList.remove("plusActive")
});

btnShopClick.addEventListener("click", () => {  
    document.querySelectorAll(".btn-shop1").forEach(element => {
        element.classList.add("plusInActive")
        element.classList.remove("plusActive"); 
     

    }); 
    btnShop5.classList.add("plusActive")
    btnShop5.classList.remove("plusInActive")
});
// #endregion person btns types function section e



// displaying all products 
showProductContainer2(products);;

 
// #region display person type products s
const categoriesBtnsContainer = document.querySelector(".categories-btns"); 
const columnCard = document.querySelectorAll(".columnCard");
 


columnCard.forEach((element) => {
    if (element.classList.contains(filterValue) ) {
        element.classList.remove("hide");
        element.classList.add("show");
      } else {
        element.classList.remove("show");
        element.classList.add("hide");
      };
       
  }); 

  // #endregion display person type products e


    


