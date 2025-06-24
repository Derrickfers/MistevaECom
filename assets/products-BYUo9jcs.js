import{o as a,s as e,t as r,g as t,u as s,p as c}from"./openCloseNav-YdXX_SpX.js";import"./shopCatiProductsCard-DrzpLiih.js";import{s as n}from"./featuredProductsCard-D4ivwQ8A.js";("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("no-hover");"ontouchstart"in window||navigator.maxTouchPoints>0?document.querySelectorAll(".dropdown").forEach(o=>{o.addEventListener("click",h=>{o.classList.toggle("dropdownShowTouch")}),o.innerHTML="",o.classList.contains("nav-words-Shop")&&(o.innerHTML=` 
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
            </div>`)}):document.querySelectorAll(".dropdown").forEach(o=>{o.classList.add("dropdownShowHover")});document.querySelector(".bar5").addEventListener("click",o=>{a(o)});document.querySelectorAll(".sign-in-person").forEach(o=>{o.addEventListener("click",e)});document.querySelector(".cancel-signup-form").addEventListener("click",e);document.querySelector(".toggle-password").addEventListener("click",()=>{const o=document.querySelector("#passwordTog");o.type==="password"?o.type="text":o.type="password"});const i=document.querySelector(".search-ico"),d=document.querySelector(".icon-close-bar");i.addEventListener("click",r);d.addEventListener("click",r);let l=t();s(l);n(c);
