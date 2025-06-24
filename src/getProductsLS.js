import { updateNumberCart } from "./updateCartNumberNavbar";

 
export const getCartProductsFromLS = () => {
let cartProducts = localStorage.getItem("cardProductsLS");

if (!cartProducts) {
    return [];
} 

cartProducts = JSON.parse(cartProducts);

 updateNumberCart(cartProducts);

return cartProducts;
};