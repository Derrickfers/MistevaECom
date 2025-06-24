import{o as r,s as e,t,g as i,u as n,p as d}from"./openCloseNav-YdXX_SpX.js";import{s as l}from"./shopCatiProductsCard-DrzpLiih.js";("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("no-hover");"ontouchstart"in window||navigator.maxTouchPoints>0?document.querySelectorAll(".dropdown").forEach(o=>{o.addEventListener("click",a=>{o.classList.toggle("dropdownShowTouch")}),o.innerHTML="",o.classList.contains("nav-words-Shop")&&(o.innerHTML=` 
            <li class="nav-words">Shop ▾</li>
             
            <div class="dropdown-content">
              <a href="./shop.html"> Shop all</a>
              <a href="./shop.html?category=Hair-Care">Hair Care</a>
              <a href="./shop.html?category=Bath-%26-Shower">Bath & Shower</a>
              <a href="./shop.html?category=Make-up">Make-up</a>
              <a href="./shop.html?category=Manicure-%26-Pedicure">Manicure & Pedicure</a>
              <a href="./shop.html?category=Skin-Care">Skin Care</a>
              <a href="./shop.html?category=Fragrance">Fragrance</a>
            </div>`),o.classList.contains("nav-words-Products")&&(o.innerHTML=` <li class="nav-words">Products ▾</li> 
            <div class="dropdown-content">
              <a href="./products.html">all Products </a>
              <a href="./person-categories-kids.html">kids's collection</a>
              <a href="./person-categories-men.html">men's collection</a>
              <a href="./person-categories-women.html">women's collection</a>
            </div>`)}):document.querySelectorAll(".dropdown").forEach(o=>{o.classList.add("dropdownShowHover")});document.querySelector(".bar5").addEventListener("click",o=>{r(o)});document.querySelectorAll(".sign-in-person").forEach(o=>{o.addEventListener("click",e)});document.querySelector(".cancel-signup-form").addEventListener("click",e);document.querySelector(".toggle-password").addEventListener("click",()=>{const o=document.querySelector("#passwordTog");o.type==="password"?o.type="text":o.type="password"});const u=document.querySelector(".search-ico"),h=document.querySelector(".icon-close-bar");u.addEventListener("click",t);h.addEventListener("click",t);let p=i();n(p);const v=window.location.pathname,c=v.split("-").pop().replace(".html",""),m=document.querySelector(".btn-shopClick"),s=document.querySelector(".btn-shop5");s.addEventListener("click",()=>{document.querySelectorAll(".btn-shop1").forEach(o=>{o.classList.remove("plusInActive"),o.classList.add("plusActive"),o.getAttribute("data-id")===c&&o.classList.add("active2")}),s.classList.add("plusInActive"),s.classList.remove("plusActive")});m.addEventListener("click",()=>{document.querySelectorAll(".btn-shop1").forEach(o=>{o.classList.add("plusInActive"),o.classList.remove("plusActive")}),s.classList.add("plusActive"),s.classList.remove("plusInActive")});l(d);document.querySelector(".categories-btns");const L=document.querySelectorAll(".columnCard");L.forEach(o=>{o.classList.contains(c)?(o.classList.remove("hide"),o.classList.add("show")):(o.classList.remove("show"),o.classList.add("hide"))});
