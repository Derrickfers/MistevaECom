export const openCloseNav = (e) => {
    e.preventDefault();
     
        e.currentTarget.classList.toggle("change");

        const navChangeIt = document.querySelector(".nav-changeIt"); 

        if (navChangeIt.classList.contains("closeShowNav")) {
            navChangeIt.classList.remove("closeShowNav")
            navChangeIt.classList.add("openShowNav")
        } else if (navChangeIt.classList.contains("openShowNav")){
            navChangeIt.classList.remove("openShowNav")
            navChangeIt.classList.add("closeShowNav")
        }
 
     
};