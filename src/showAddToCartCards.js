import './style.css' 

import products from "/src/api/products.json";

import { getCartProductsFromLS } from "./getProductsLS";
import { updateNumberCart } from "./updateCartNumberNavbar";
import { toggleSearchBar } from "./searchBar";
import { cartTotalOfAllProducts } from "./cartTotalOfAllProducts";
import { inputValueCoupon } from "./inputValueCoupon";
import { showToast } from "./showToast";
import { signUpFunction } from './signUpFunction';
import { openCloseNav } from './openCloseNav';

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

// #region section cart products s------------------------ 
const cartDisplayIn = document.querySelector("#cartDisplayIn");
const inCartTemplate = document.querySelector("#inCartTemplate");

// Products in LS
let cartProductsLs = getCartProductsFromLS(); 

// #region trigger quantity update price and quantity 
const triggerQuantity = (event, id, price, stock) => {
    
    // get class or id
    const currentCardElement = document.querySelector(`#card${id}`); 
    const productQuantity = currentCardElement.querySelectorAll(`.numAddRemove`); 
    const productPrice = currentCardElement.querySelector(`.subTotalPrice`);
 
// prooducts from LS function
cartProductsLs = getCartProductsFromLS(); 

// mention quantity and price 
 let quantity = parseInt(productQuantity[0].getAttribute("numAddRemove")
 ) || parseInt(productQuantity[0].innerText);

 let localstoragePrice = price;
  
// fnd Existing Product in LS 
let existingProduct = cartProductsLs.find((curProd) => curProd.id === id);
  
// Trigger Quantity btn update
if (event.target.classList.contains("add")) {
    if (quantity  < stock) {
        quantity += 1; 
    } else if (quantity  === stock) {
        quantity = stock; 
    } else if (stock === 0) {
      quantity = 0; 
  }
}  

if (event.target.classList.contains("remove")) {
    if (quantity > 1) {
        quantity -= 1; 
    } else if (stock === 0) {
      quantity = 0;
  } 
}

// check if quantity is 0 or > 0 
if (quantity < 1) {
    price = Number(price);
    localstoragePrice = price; 
  } else if (quantity > 0){
    localstoragePrice = price * quantity; 
  }


// updating in LS
if (existingProduct) {
    quantity = Number(quantity);
    price = Number(localstoragePrice);

   let updateLS = {id, quantity, price};
       updateLS = cartProductsLs.map((curProd) => {
        return curProd.id === id ? updateLS : curProd;  
       });  
localStorage.setItem("cardProductsLS", JSON.stringify(updateLS));
}

  // updating in page DOM
  productQuantity.forEach((el) => {
    el.innerText = quantity; 
    el.setAttribute("numAddRemove", quantity.toString());
  });

  productPrice.innerText = `₹${Number(localstoragePrice).toFixed(2)}`; 

  cartTotalOfAllProducts()
  return quantity;

};

// #endregion trigger quantity update price and quantity 

// #region delete cart items 
const deleteCartItem = (event, id, name) => {

  let curProdId = document.querySelector(`#card${id}`)
  cartProductsLs = getCartProductsFromLS(); 

  let prodRemoveLS = cartProductsLs.filter((curProd) => {
    return curProd.id !== id;
});
localStorage.setItem("cardProductsLS", JSON.stringify(prodRemoveLS));
// console.log(prodRemoveLS);
if (curProdId) {
    curProdId.remove()
}
   
  updateNumberCart(prodRemoveLS);
  cartTotalOfAllProducts()

  showToast("delete", name);
};
// #endregion delete cart items 
 
// #region get price and quantity from LS 
const getPriceFromLS = (price, id) => {
   let existingProd = cartProductsLs.find((curProd) => curProd.id === id);
   let quantity = 1

   if (existingProd) {
    quantity = existingProd.quantity;
    price = existingProd.price;
   }

   return {quantity, price};
}; 
// #endregion get price and quantity from LS 

// #region filter all products and match LS
let filterProducts = products.filter((curProd) => {
     return cartProductsLs.some((curEle) => curEle.id === curProd.id);   
});
// #endregion filter all products and match LS

// #region show products added in cart
const showCartProducts = () => {
    filterProducts.forEach(curprod => {
        const { id, name, img, tage, description, price, stock, rating} = curprod;
        
        // get product Template
        let productClone = document.importNode(inCartTemplate.content, true);

        // add different id numbers for different cards
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        // function get price and quantity from LS
        let priceFromLS = getPriceFromLS(price, id);
 
        // cart items information
        productClone.querySelector(".cardImg").src = img;
        productClone.querySelector(".cardImg").alt = name; 
        productClone.querySelector(".productName").textContent = name;
        
        // display price from LS in cart
        productClone.querySelector(".totalPrice").textContent = `₹${price}`; 
        productClone.querySelector(".subTotalPrice").textContent = `₹${Number(priceFromLS.price).toFixed(2)}`;

        // display quantity part btns
        const quantityItem = productClone.querySelectorAll(".quantity-items").forEach((container) => { 
            container.addEventListener("click", (event) => {
            triggerQuantity(event, id, price, stock);
        });
        });
   
         productClone.querySelectorAll(".numAddRemove").forEach((container) => {
            container.textContent = priceFromLS.quantity;
        });

          

        // remove cart item btn
        const removecartItemBtn = productClone.querySelectorAll(".remove-item");
        
        removecartItemBtn.forEach((container) => {
        container.addEventListener("click", (event) => {
            deleteCartItem(event, id, name);
        });
    });

        // append items in cart 
        cartDisplayIn.append(productClone);
    });
};


showCartProducts(); 
// #endregion show products added in cart

 
// #region total calculate all products 
    cartTotalOfAllProducts()
// #endregion total calculate all products 


// #region get coupon code
 const couponGet = document.querySelector(".couponForm");
 const inputValueCouponCode = document.getElementById("inputType3"); 
 let currentCouponCode = "";
 
 couponGet.addEventListener("click", (e) => { 
  const value = inputValueCoupon(e);
  if (value) {
    currentCouponCode = value;
    cartTotalOfAllProducts(currentCouponCode); 
    console.log(currentCouponCode);
    inputValueCouponCode.value = "";
  }  
 });
 
 // #endregion get coupon code
 
 // #endregion section cart products s
 