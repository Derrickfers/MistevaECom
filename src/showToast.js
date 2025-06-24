
export const showToast = (operation, name) => {

 const toast = document.createElement("div"); 

toast.classList.add("toast");
 
if (operation === "add") {
    toast.textContent = `product Name ${name} has been added.`;
}else if (operation === "update") {
    toast.textContent = `product Name ${name} has been updated and added.`;
} else {
    toast.textContent = `product Name ${name} has been delete.`;
}

document.body.appendChild(toast);

setTimeout(() => {
    toast.remove();
}, 3000);

}; 