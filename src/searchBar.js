


export const toggleSearchBar = () => {
  const searchBarMain = document.querySelector(".search-bar-main");

   searchBarMain.classList.toggle("searchExpand");

   const bodyScroll = document.querySelector(".scroll"); 
      
   bodyScroll.classList.toggle("no-scroll");

   document.querySelector(".search-bar-main").classList.toggle("pointer-events"); 
};

