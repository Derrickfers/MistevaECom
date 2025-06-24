// #region header section s
const headerItems = ` 
        <div class="back-mix-img"><img src="/images/back-mix-img.avif" alt=""></div>
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
      </div>  `;

      const headerAll = document.querySelector(".section-header");
      headerAll.insertAdjacentHTML("afterbegin", headerItems);
// #endregion header section e