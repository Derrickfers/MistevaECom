

//#region update cart number navbar
const updateNumber = document.querySelector(".numCart"); 
 
export const updateNumberCart = (arrLocalStorageProduct) => {
  return updateNumber.innerText = (arrLocalStorageProduct.length);
};

 
//#endregion update cart number navbar