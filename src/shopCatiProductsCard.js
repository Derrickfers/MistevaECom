import { addToCart, cardOutOfstock, homeQuantityToggle, stockInformation } from "./featuredProductsCard";

const shopProductTemplate = document.querySelector("#shopProductTemplate");

const productShopContainer = document.querySelector("#productShopContainer");

// #region add products in categories s
export const showProductContainer2 = (products) => {
if (!products || products.length === 0) {
    return false;  
}

// Limit to first 6 products
const limitedProducts = products.slice(0, 1000);

limitedProducts.forEach(curProduct => {
  const { id, name, img, tage, description, price, stock, rating, typeCategories, person} = curProduct;

  // get product Template
  const productClone = document.importNode(shopProductTemplate.content, true);

  // add different id numbers for different cards
  productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

  productClone.querySelector("#columnType").setAttribute("class", `columnCard ${typeCategories} ${person}`);

   

  // card information
  productClone.querySelector(".tage").textContent = tage;
  productClone.querySelector(".productName").textContent = name;
   

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
  productShopContainer.append(productClone);
});
};

// #endregion add products in categories s