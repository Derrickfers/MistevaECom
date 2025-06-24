import { cartTotalOfAllProducts } from "./cartTotalOfAllProducts";


export const inputValueCoupon = (e) => {
  e.preventDefault();
  const inputValueCouponCode = document.getElementById("inputType3");

  const inputValue = inputValueCouponCode.value.trim();

  if (e.key === "Enter" || e.target.classList.contains("couponCodeApply")) {
    return inputValue;
  } else {
    return null;
  }
};