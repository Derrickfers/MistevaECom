// #region footer section s
const footerItems = ` <div class="container">
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
        </div> `

      const footerAll = document.querySelector(".section-footer");
      footerAll.insertAdjacentHTML("afterbegin", footerItems);
// #endregion footer section e