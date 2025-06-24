import{o as l,s as c,t as i,g as u,u as h,p}from"./openCloseNav-YdXX_SpX.js";import{s as w}from"./shopCatiProductsCard-DrzpLiih.js";("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("no-hover");"ontouchstart"in window||navigator.maxTouchPoints>0?document.querySelectorAll(".dropdown").forEach(e=>{e.addEventListener("click",t=>{e.classList.toggle("dropdownShowTouch")}),e.innerHTML="",e.classList.contains("nav-words-Shop")&&(e.innerHTML=` 
            <li class="nav-words">Shop ▾</li>
             
            <div class="dropdown-content">
              <a href="./shop.html"> Shop all</a>
              <a href="./shop.html?category=Hair-Care">Hair Care</a>
              <a href="./shop.html?category=Bath-%26-Shower">Bath & Shower</a>
              <a href="./shop.html?category=Make-up">Make-up</a>
              <a href="./shop.html?category=Manicure-%26-Pedicure">Manicure & Pedicure</a>
              <a href="./shop.html?category=Skin-Care">Skin Care</a>
              <a href="./shop.html?category=Fragrance">Fragrance</a>
            </div>`),e.classList.contains("nav-words-Products")&&(e.innerHTML=` <li class="nav-words">Products ▾</li> 
            <div class="dropdown-content">
              <a href="./products.html">all Products </a>
              <a href="./person-categories-kids.html">kids's collection</a>
              <a href="./person-categories-men.html">men's collection</a>
              <a href="./person-categories-women.html">women's collection</a>
            </div>`)}):document.querySelectorAll(".dropdown").forEach(e=>{e.classList.add("dropdownShowHover")});document.querySelector(".bar5").addEventListener("click",e=>{l(e)});document.querySelectorAll(".sign-in-person").forEach(e=>{e.addEventListener("click",c)});document.querySelector(".cancel-signup-form").addEventListener("click",c);document.querySelector(".toggle-password").addEventListener("click",()=>{const e=document.querySelector("#passwordTog");e.type==="password"?e.type="text":e.type="password"});const g=document.querySelector(".search-ico"),v=document.querySelector(".icon-close-bar");g.addEventListener("click",i);v.addEventListener("click",i);let f=u();h(f);w(p);const o=document.querySelector(".categories-btns"),m=document.querySelectorAll(".columnCard");o.addEventListener("click",e=>{if(e.preventDefault(),e.target.classList.contains("btn-shop1")){const t=o.querySelector(".active");t&&t.classList.remove("active"),e.target.classList.add("active");const s=e.target.getAttribute("data-id");n(s)}});function n(e){m.forEach(t=>{t.classList.contains(e)||e==="all"?(t.classList.remove("hide"),t.classList.add("show")):(t.classList.remove("show"),t.classList.add("hide"))})}window.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search);console.log(e);const t=e.get("category");t&&o.querySelectorAll(".btn-shop1").forEach((r,d)=>{if(r.getAttribute("data-id")===t){const a=o.querySelector(".active");a&&a.classList.remove("active"),r.classList.add("active"),n(t),L.slideTo(d,300)}})});const L=new Swiper(".categories-btns",{effect:"slide",speed:500,freeMode:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:"auto",spaceBetween:10,breakpoints:{320:{slidesPerView:1},580:{slidesPerView:2},805:{slidesPerView:3},1210:{slidesPerView:4},1475:{slidesPerView:5},1740:{slidesPerView:6},2003:{slidesPerView:7}}});
