import { getCartProductsFromLS } from "./getProductsLS";
import { showToast } from "./showToast";
import { updateNumberCart } from "./updateCartNumberNavbar";

const productContainer = document.querySelector("#productContainer");

const productTemplate = document.querySelector("#productTemplate");

 
//#region add to cart 
 getCartProductsFromLS();

export const addToCart = (event, id, stock, name) => {

  let arrLocalStorageProduct = getCartProductsFromLS();

  const currenntProductElement = document.querySelector(`#card${id}`);
 
  let quantity = currenntProductElement.querySelector(`.numAddRemove`).innerText;

  let rawHTML = currenntProductElement.querySelector('.price');
  
  // Remove the span completely to get only the base price part
  let price = rawHTML.childNodes[0].textContent.trim();
  // Remove ₹   
  price = price.replace('₹', '').trim(); 
  
  // to to find existing product
  let existingProduct = arrLocalStorageProduct.find((curProd) =>  curProd.id === id );


  // console.log(existingProduct.quantity);
  
  if (existingProduct && quantity >= 1) {
if (Number(existingProduct.quantity) >= stock) {
  quantity = Number(existingProduct.quantity);
  price = Number(price * quantity);
} else {
  quantity = Number(existingProduct.quantity) + Number(quantity);
    price = Number(price * quantity);   
}

    
    
   let updateLS = {id, quantity, price};
   updateLS = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateLS : curProd;  
   }); 
     
localStorage.setItem("cardProductsLS", JSON.stringify(updateLS));

showToast("update", name);
  } if (existingProduct) {
    // alert(`This Product Exists In The Cart`)
    return false;
  }

  // update price when quantity updates
  quantity = Number(quantity)
  
  if (quantity < 1) {
    price = Number(price);
  } else if (quantity > 0){
    price = Number(price * quantity);
  }
   

  arrLocalStorageProduct.push({id, quantity, price});
localStorage.setItem("cardProductsLS", JSON.stringify(arrLocalStorageProduct))

// console.log(arrLocalStorageProduct);

updateNumberCart(arrLocalStorageProduct);



showToast("add", name);
 

};
//#endregion add to cart
 
//#region Product Quantity Toggle
export const homeQuantityToggle = (event, id, stock) => {
const currentCardElement = document.querySelector(`#card${id}`);

const productQuantity = currentCardElement.querySelector(`.numAddRemove`);


  
let quantity = parseInt(productQuantity.getAttribute("numAddRemove")
) || parseInt(productQuantity.innerText);


// let quantity = parseInt(productQuantity.innerText);

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
 
  productQuantity.innerText = quantity;
  productQuantity.setAttribute("numAddRemove", quantity.toString());

  
  return quantity;
};
//#endregion Product Quantity Toggle
   
//#region card Out Of stock
export const cardOutOfstock = (getCardOutOfstock, id, stock) => {
   
  if (stock <= 0) {
    getCardOutOfstock.innerText = 0;
  } else {
  getCardOutOfstock.innerText = 1;
  }
  return getCardOutOfstock;
};
//#endregion card Out Of stock

//#region stock Information  
export const stockInformation = (stockInformationDefine, stock) => {
  if (stock <= 0) {
    stockInformationDefine.textContent = `Out Of Stock`;
    stockInformationDefine.classList.add("out-of-stock");
  } else {
    stockInformationDefine.textContent = `In Stock`;
    stockInformationDefine.classList.remove("out-of-stock");
  }
  return stockInformationDefine;
};
//#endregion stock Information    


//#region showProductContainer 
export const showProductContainer = (products) => {
if (!products || products.length === 0) {
    return false;  
}

// Limit to first 6 products
const limitedProducts = products.slice(0, 9);

limitedProducts.forEach(curProduct => {
  const { id, name, img, tage, description, price, stock, rating} = curProduct;

  // get product Template
  const productClone = document.importNode(productTemplate.content, true);

  // add different id numbers for different cards
  productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

  // card information
  productClone.querySelector(".tage").textContent = tage;
  productClone.querySelector(".productName").textContent = name;
  productClone.querySelector(".para-card").textContent = description;

  // price define information
  productClone.querySelector(".price").innerHTML = `₹${price} <span class="sec-rate">₹${price * 2}</span>`;


  // rating information
  const ratingStar = productClone.querySelector(".rating-star");

  const stars = ratingStar.querySelectorAll(".fa-star");

  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("checked");
    } else {
      star.classList.remove("checked");
    }
  }); 

  // stock in or out information-----
  // stock short method
  // const isInStock = stock > 0;
  // productClone.querySelector(".in-stock").textContent = isInStock ? "In Stock" : "Out Of Stock";
  // productClone.querySelector(".in-stock").classList.toggle("out-of-stock", !isInStock);

  // stock long method
  const stockInformationDefine = productClone.querySelector(".in-stock");
  stockInformation(stockInformationDefine, stock);

  // add img information
  productClone.querySelector(".cardImg").src = img;
  productClone.querySelector(".cardImg").alt = name;

  // quantity-items stock information 
  const getCardOutOfstock = productClone.querySelector(".numAddRemove"); 
  cardOutOfstock(getCardOutOfstock, id, stock);
     
  // quantity-items add remove information
  productClone.querySelector(".quantity-items").addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

   // add to cart
   productClone.querySelector(".add-cart-btn").addEventListener("click", (event) => {
    addToCart(event, id, stock, name);
  });

  //append in product Container  
  productContainer.append(productClone);
});
};
//#endregion showProductContainer 