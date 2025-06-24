import { getCartProductsFromLS } from "./getProductsLS";
import { inputValueCoupon } from "./inputValueCoupon";

const endSubtotal = document.querySelector(".endSubtotal");
const endTotal = document.querySelector(".endTotal");
const shippingInputs = document.querySelectorAll('input[name="shipping-type-price"]');
const selectedInput = document.querySelector('input[name="shipping-type-price"]:checked');

 
// #region total calculate all products -------------
export const cartTotalOfAllProducts = (currentCouponCode = "") => {

// products from LS    
let cartProductsLs = getCartProductsFromLS();

// calculate full total
let initialValue = 0; 
// calculate full total function 
let TotalProductPrice = cartProductsLs.reduce((acum, curProd) => {
  let allPrice = parseInt(curProd.price) || 0;
  let quantity = parseInt(curProd.quantity);

  if (quantity === 0) {
    allPrice = 0;
  } else if (quantity > 0) {
    allPrice = allPrice;
  }
  return acum + allPrice;
}, initialValue);

 
// state values 
let shippingCost = 0;
let couponDiscount = 0; 
let couponMatch = currentCouponCode; 
 
// check if coupon code match is correct
  if (couponMatch === "#dcp50") {
    couponDiscount = 50;
  } else {
    couponDiscount = 0;
  }

 // get class for coupon code from html 
 const endTax = document.querySelector(".endTax");

// check which radio btn is selected default 
if (selectedInput) {
  shippingCost = parseFloat(selectedInput.value);
}

// function to add all total in page dom
 const updateTotal = () => {
   // Subtotal 
   let Subtotal = TotalProductPrice + shippingCost;
   endSubtotal.innerText = `₹${Subtotal.toFixed(2)}`;

   // coupon
   endTax.innerText = `${couponDiscount}%`;

   // Total
   let discountAmount = (couponDiscount / 100) * Subtotal;
   let finalTotal = Subtotal - discountAmount;  
   endTotal.innerText = `₹${finalTotal.toFixed(2)}`;
 };
 
// radio btn which seleted event   
shippingInputs.forEach((input) => {
  input.addEventListener("change", () => {
    let selectedValue = input.value;

    shippingCost = parseFloat(selectedValue);
    updateTotal();
  });
});

updateTotal();

};
// #endregion total calculate all products -------------
 