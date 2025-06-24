(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const n=` 
    <div class="container">
      <div class="signup-container">
        <span class="cancel-signup-form" title="Close">✕</span>
        <div class="signup-image">
          <h2 class="brand">Mist<span class="e-word">é</span>va</h2>
          <img src="./cos 1.png" alt="Chair Image" />
        </div>
        <div class="signup-form">
          
          <h1>Sign up</h1>
          <p class="signin-text">
            Already have an account? <a href="#">Sign in</a>
          </p>
          <form>
            <input type="text" placeholder="Your name" required />
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email address" required />
            <div class="password-wrapper">
              <input type="password" id="passwordTog" placeholder="Password" required />
              <span class="toggle-password"><i class="fas fa-eye"></i></span>
            </div>
            <label class="checkbox-wrapper">
              <input type="checkbox" />
              I agree with <a href="#">Privacy Policy</a> and
              <a href="#">Terms of Use</a>
            </label>
            <button class="btn" type="submit">Sign Up</button>
          </form>
        </div>
  
  
      </div>
    </div>
 `,c=document.querySelector(".sign-up-section");c.insertAdjacentHTML("afterbegin",n);const m=` 
        <div class="back-mix-img"><img src="./back-mix-img.avif" alt=""></div>
        <div class="container">
          <div class="logo-img">
            <!-- <img class="img-log" src="" alt="main-logo-image"> -->
            <a href="./index.html">
              <p class="img-log">Mist<span class="e-word">é</span>va</p>
            </a>
          </div>
      
        <nav class="navbar-section">
          <div class="nav-expand">
            <div class="bar5">  
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </div>

          <ul class="nav-changeIt closeShowNav">
            <a href="./index.html"><li class="nav-words">Home</li></a>

            <div class="dropdown nav-words-Shop">
            <a href="./shop.html">
            <li class="nav-words">Shop ▾</li>
            </a>
            <div class="dropdown-content">
              <a href="./shop.html?category=Hair-Care">Hair Care</a>
              <a href="./shop.html?category=Bath-%26-Shower">Bath & Shower</a>
              <a href="./shop.html?category=Make-up">Make-up</a>
              <a href="./shop.html?category=Manicure-%26-Pedicure">Manicure & Pedicure</a>
              <a href="./shop.html?category=Skin-Care">Skin Care</a>
              <a href="./shop.html?category=Fragrance">Fragrance</a>
            </div>
            </div>
            
            <div class="dropdown nav-words-Products">
            <a href="./products.html"><li class="nav-words">Products ▾</li></a>
            <div class="dropdown-content">
              <a href="./person-categories-kids.html">kids's collection</a>
              <a href="./person-categories-men.html">men's collection</a>
              <a href="./person-categories-women.html">women's collection</a>
            </div>
            </div>

            <a href="./contact.html"><li class="nav-words">Contact Us</li></a>
            <li class="navIco sign-in-person person1" ><span class="material-symbols-outlined">
                person
              </span></li>
          </ul>
        </nav>
      
          <div class="other-things">
            <ul>
              <li class="navIco search-ico" ><span class="material-symbols-outlined" >
                  search
                </span></li>
              <li class="navIco sign-in-person person2" ><span class="material-symbols-outlined">
                  person
                </span></li>

                <a href="./add-to-cart.html"><li class="navIco2"><span class="material-symbols-outlined">
                   shopping_bag 
                </span><span class="numCart">0</span></li></a>
            </ul>      
          </div>    
           
        </div>

        <div class="search-bar-main" >
        <div class="container">
        
          <form>
            <input type="text" class="inputValue2" placeholder="search product..." autofocus> 
          </form>
          <span class="icon-close-bar">✕</span>
          <!-- <div class="search-bar-main2" > </div> -->
        </div>
      </div>  `,l=document.querySelector(".section-header");l.insertAdjacentHTML("afterbegin",m);const p=` <div class="container">
          <h2 class="section-subheading">Mist<span class="e-word">é</span>va</h2>
           
        </div> 
      
        <div class="container grid grid-four-template">
          <div class="footer-part part1">
            <h3 class="footer-subheading">Contact Information</h3>
            <ul class="footer-lists">
              <li class="footer-lists-display2"><i class="fa-solid fa-phone"></i><span class="items">+8453476465</span></li>
              <li class="footer-lists-display2"><i class="fa-solid fa-envelope"></i> <span class="items">misteva25@gmail.com</span></li>
              <li class="footer-lists-display2"><i class="fa-solid fa-location-dot"></i><span class="items">HMT, 18th June Rd, Panaji, Goa</span></li>
              <li class="footer-lists-display"><span></span><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-youtube"></i><i class="fa-brands fa-facebook"></i></li>
            </ul>
          </div>
          
          <div class="footer-part part2">
            <h3 class="footer-subheading">My Account</h3>
            <ul class="footer-lists">
             <a href="#Y5"><li class="sign-in-person">sign in</li></a>
              <li>my wishlist</li>
              <li>track my order</li>
            </ul>
          </div>
          
          <div class="footer-part part3">
            <h3 class="footer-subheading">Pages</h3>
            <ul class="footer-lists">
              <a href="./index.html"><li class="nav-words">Home</li></a>
              <a href="./shop.html"><li class="nav-words">Shop</li></a>
              <a href="./products.html"><li class="nav-words">Products</li></a>
              <a href="./contact.html"><li class="nav-words">Contact Us</li></a>
            </ul>
          </div>
          
          <div class="footer-part part4">
            <h3 class="footer-subheading">Information</h3>
            <ul class="footer-lists">
              <li>delivery information</li>
              <li>faq</li>
              <li>blog</li>
            </ul>
          </div> 
        </div>

        <div class="container end-tag">
          <p class="footer-end-tag">Copyright &copy;2025 Mistéva All right reserved<span class="footer-polCon">|</span><span class="footer-polCon">Privacy Policy</span><span class="footer-polCon">Terms & Conditions</span></p>
        </div> `,g=document.querySelector(".section-footer");g.insertAdjacentHTML("afterbegin",p);const u=JSON.parse(`[{"id":1,"tage":"best seller","name":"NIVEA","description":"NIVEA Nourishing Body Milk 600ml Body Lotion | 48 H Moisturization","price":"289.00","stock":"30","rating":"3","img":"https://m.media-amazon.com/images/I/51QtN8cihaL._SL1000_.jpg","typeCategories":"Skin-Care","person":"women"},{"id":2,"tage":"best seller","name":"L'Oreal Paris","description":"L'Oreal Paris Hyaluron Moisture 72HR Moisture Filling Shampoo","price":"257.00","stock":"25","rating":"4","img":"https://m.media-amazon.com/images/I/41jr41E77ZL._SL1000_.jpg","typeCategories":"Hair-Care","person":"men women"},{"id":3,"tage":"best seller","name":"Dot & Key","description":"Dot & Key Watermelon Cooling Sunscreen SPF 50+ PA++++ | With Hyaluronic Acid","price":"386.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/610JZURd5NL._SL1500_.jpg","typeCategories":"Skin-Care","person":"women"},{"id":4,"tage":"best seller","name":"Muuchstac Ocean","description":"Muuchstac Ocean Face Wash for Men | Fight Acne & Pimples, Brighten Skin","price":"245.00","stock":"5","rating":"2","img":"https://m.media-amazon.com/images/I/51FodsevJrL._SY450_.jpg","typeCategories":"Skin-Care","person":"men"},{"id":5,"tage":"best seller","name":"Minimalist","description":"Minimalist Anti-Acne Salicylic Acid 2% Face Wash For Oily & Acne Prone Skin","price":"284.00","stock":"7","rating":"3","img":"https://images-eu.ssl-images-amazon.com/images/I/514PVblwPdL._AC_UL600_SR600,400_.jpg","typeCategories":"Skin-Care","person":"men women"},{"id":6,"tage":"best seller","name":"Maybelline","description":"Maybelline New York Fit Me Compact Powder, Matte + Poreless Compact Powder","price":"150.00","stock":"17","rating":"5","img":"https://images-eu.ssl-images-amazon.com/images/I/61FDV10Re5L._AC_UL300_SR300,200_.jpg","typeCategories":"Make-up","person":"women"},{"id":7,"tage":"best seller","name":"SUGAR","description":"SUGAR Cosmetics Matte as Hell Crayon Lipsticks for Women","price":"359.08","stock":"22","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61yHJGwr-nL._AC_UL600_SR600,400_.jpg","typeCategories":"Make-up","person":"women"},{"id":8,"tage":"best seller","name":"Deconstruct ","description":"Deconstruct Face Gel Sunscreen SPF 50 + and PA+++ ","price":"321.00","stock":"0","rating":"5","img":"https://images-eu.ssl-images-amazon.com/images/I/51qgywShKTL._AC_UL600_SR600,400_.jpg","typeCategories":"Skin-Care","person":"men women"},{"id":9,"tage":"NEW","name":"Park Avenue ","description":"Park Avenue Voyage Signature Collection ","price":"244.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/711eP6dPXeL._AC_UL600_SR600,400_.jpg","typeCategories":"Fragrance","person":"men"},{"id":10,"tage":"NEW","name":"LAKMÉ","description":"LAKMÉ Color Crush Nail Art T2, Multicolor","price":"165.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/51yfnuDsikL._AC_UL600_SR600,400_.jpg","typeCategories":"Manicure-&-Pedicure","person":"women"},{"id":11,"tage":"NEW","name":"Fiama","description":"Fiama Body Wash Shower Gel Blackcurrant & Bearberry","price":"299.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61YZ1vqmglL._AC_UL600_SR600,400_.jpg","typeCategories":"Bath-&-Shower","person":"men women"},{"id":12,"tage":"NEW","name":"Aveeno","description":"Aveeno Baby Daily Moisture Wash & Shampoo","price":"234.77","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/51oyaXx2YSL._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Bath-&-Shower","person":"kids"},{"id":13,"tage":"NEW","name":"Mamaearth","description":"Mamaearth Foaming Face Wash for Kids","price":"197.33","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/51EddYXt1dL._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Skin-Care","person":"kids"},{"id":14,"tage":"NEW","name":"Bare Anatomy","description":"Bare Anatomy Anti Dandruff Shampoo","price":"447.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/51QuF+V4vkL._AC_UL600_SR600,400_.jpg","typeCategories":"Hair-Care","person":"men women"},{"id":15,"tage":"NEW","name":"Parachute","description":"Parachute Coconut Oil 300 ml - Bottle","price":"154.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61dUCXFgN3L._AC_UL600_SR600,400_.jpg","typeCategories":"Hair-Care","person":"men women"},{"id":16,"tage":"NEW","name":"Nat Habit ","description":"Nat Habit - Fresh Ready To Apply Henna Paste","price":"346.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61fL-t6yZuL._AC_UL600_SR600,400_.jpg","typeCategories":"Hair-Care","person":"men women"},{"id":17,"tage":"NEW","name":"L'Oreal Paris","description":"L'Oreal Paris Excellence Creme Hair Color, 3 Dark Brown","price":"₹699.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61wHkCENFtL._AC_UL600_SR600,400_.jpg","typeCategories":"Hair-Care","person":"women"},{"id":18,"tage":"NEW","name":"Dove","description":"Dove Men+Care Thick & Strong 2in1 Shampoo+Conditioner","price":"375.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/415W7qHiG4L._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Hair-Care","person":"men"},{"id":19,"tage":"NEW","name":"Cinthol","description":"Cinthol Original Bath Soap 99.9% Germ Protection","price":"185.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61Err9DzAAL._AC_UL600_SR600,400_.jpg","typeCategories":"Bath-&-Shower","person":"men women"},{"id":20,"tage":"NEW","name":"Savlon ","description":"Savlon Moisture Shield Germ Protection Liquid Handwash","price":"169.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61dLaWyiwGL._AC_UL600_SR600,400_.jpg","typeCategories":"Bath-&-Shower","person":"men women"},{"id":21,"tage":"NEW","name":"Dove","description":"Dove Cream Beauty Bathing Bar","price":"318.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/51RkCnOwVmL._AC_UL300_SR300,200_.jpg","typeCategories":"Bath-&-Shower","person":"men women"},{"id":22,"tage":"NEW","name":"DERMATOUCH","description":"DERMATOUCH Kojic Acid 1% Soap with Glutathione ","price":"153.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61mOhy4Un8L._AC_UL600_SR600,400_.jpg","typeCategories":"Bath-&-Shower","person":"men women"},{"id":23,"tage":"NEW","name":"TuCo®","description":"uCo® Intelligent Kids Mild Body Wash 300ml","price":"395.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/616ddhm9jLL._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Bath-&-Shower","person":"kids"},{"id":24,"tage":"NEW","name":"Mamaearth","description":"Mamaearth Milky Soft Head to Toe Wash With Oats","price":"379.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/51C-cB0qoWL._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Bath-&-Shower","person":"kids"},{"id":25,"tage":"NEW","name":"Lakmé","description":"Lakmé Nail Color Remover","price":"54.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/41Xqew8T5+L._AC_UL600_SR600,400_.jpg","typeCategories":"Manicure-&-Pedicure","person":"women"},{"id":26,"tage":"NEW","name":"Colorbar","description":"Colorbar On the Go Nail Lacquer Remover Wipes","price":"149.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/616tUn21yuL._AC_UL600_SR600,400_.jpg","typeCategories":"Manicure-&-Pedicure","person":"women"},{"id":27,"tage":"NEW","name":"Swiss","description":"Swiss Beauty Professional UV Gel Nail Polish","price":"165.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/51Nj4ET+V6L._AC_UL600_SR600,400_.jpg","typeCategories":"Manicure-&-Pedicure","person":"women"},{"id":28,"tage":"NEW","name":"RENEE ","description":"RENEE Nail Paint Remover Wipes","price":"85.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/51mWGMQACJL._AC_UL600_SR600,400_.jpg","typeCategories":"Manicure-&-Pedicure","person":"women"},{"id":29,"tage":"NEW","name":"POND's","description":"POND's Natural Glow Face Matte Powder","price":"115.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/51pNLVL+DKL._AC_UL600_SR600,400_.jpg","typeCategories":"Make-up","person":"women"},{"id":30,"tage":"NEW","name":"Lakme","description":"Lakme 9 to 5 CC Cream Mini, 01 - Beige, Light Face Makeup","price":"99.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/51IgR2yRK2L._AC_UL600_SR600,400_.jpg","typeCategories":"Make-up","person":"women"},{"id":31,"tage":"NEW","name":"Yaan","description":"Yaan Man Cream Foundation, 30g","price":"735.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/71Vq5OQeB0L._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Make-up","person":"men"},{"id":32,"tage":"NEW","name":"Whimsy","description":"Whimsy 7-Piece Organic Makeup Kit ","price":"1,150.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/71OK7QuOmxL._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Make-up","person":"kids"},{"id":33,"tage":"NEW","name":"Wottagirl","description":"Layer'r Wottagirl Vanilla Twist Body Splash","price":"189.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61AKPyVcBlL._AC_UL600_SR600,400_.jpg","typeCategories":"Fragrance","person":"women"},{"id":34,"tage":"NEW","name":"Beardo","description":"Beardo Whisky Smoke Perfume for Men","price":"528.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/71iYB3wKOYL._AC_UL600_SR600,400_.jpg","typeCategories":"Fragrance","person":"men"},{"id":35,"tage":"NEW","name":"The Man Company","description":"The Man Company Fresh Black Edt Perfume For Men","price":"549.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61P34NndpLL._AC_UL600_SR600,400_.jpg","typeCategories":"Fragrance","person":"men"},{"id":36,"tage":"NEW","name":"Wild Stone","description":"Wild Stone Ultra Sensual Long Lasting Perfume for Men","price":"324.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/51M73SOIdhL._AC_UL600_SR600,400_.jpg","typeCategories":"Fragrance","person":"men"},{"id":37,"tage":"NEW","name":"BELLAVITA","description":"BELLAVITA CEO Man & White Oud Unisex ","price":"198.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/519mdAYKTQL._AC_UL600_SR600,400_.jpg","typeCategories":"Fragrance","person":"men women"},{"id":38,"tage":"NEW","name":"Barbie","description":"Barbie Princess Body Spray Fragrance ","price":"250.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/61gFFOI-wAL._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Fragrance","person":"kids"},{"id":39,"tage":"NEW","name":"Garnier","description":"Garnier Men, Face Wash, Brightening & Anti-Pollution","price":"166.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/615gCt+GzCL._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Skin-Care","person":"men"},{"id":40,"tage":"NEW","name":"Beardo","description":"Beardo Ban the Tan Kit | Grooming kit for men","price":"400.00","stock":"15","rating":"4","img":"https://m.media-amazon.com/images/I/611BisWCNeL._AC_UL480_FMwebp_QL65_.jpg","typeCategories":"Skin-Care","person":"men"},{"id":41,"tage":"NEW","name":"DERMATOUCH","description":"DERMATOUCH Bright & Even Tone Face Wash with Niacinamide","price":"181.00","stock":"15","rating":"4","img":"https://images-eu.ssl-images-amazon.com/images/I/61XJG2lJD0L._AC_UL600_SR600,400_.jpg","typeCategories":"Skin-Care","person":"women"}]`),d=document.querySelector(".numCart"),h=e=>d.innerText=e.length,_=()=>{let e=localStorage.getItem("cardProductsLS");return e?(e=JSON.parse(e),h(e),e):[]},C=(e,a)=>{const t=document.createElement("div");t.classList.add("toast"),e==="add"?t.textContent=`product Name ${a} has been added.`:e==="update"?t.textContent=`product Name ${a} has been updated and added.`:t.textContent=`product Name ${a} has been delete.`,document.body.appendChild(t),setTimeout(()=>{t.remove()},3e3)},y=()=>{document.querySelector(".search-bar-main").classList.toggle("searchExpand"),document.querySelector(".scroll").classList.toggle("no-scroll"),document.querySelector(".search-bar-main").classList.toggle("pointer-events")},L=()=>{document.querySelector(".sign-up-section").classList.toggle("open"),document.querySelector(".scroll").classList.toggle("no-scroll")},f=e=>{e.preventDefault(),e.currentTarget.classList.toggle("change");const a=document.querySelector(".nav-changeIt");a.classList.contains("closeShowNav")?(a.classList.remove("closeShowNav"),a.classList.add("openShowNav")):a.classList.contains("openShowNav")&&(a.classList.remove("openShowNav"),a.classList.add("closeShowNav"))};export{C as a,_ as g,f as o,u as p,L as s,y as t,h as u};
