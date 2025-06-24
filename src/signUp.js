// #region signUp section s
const signUpItems = ` 
    <div class="container">
      <div class="signup-container">
        <span class="cancel-signup-form" title="Close">✕</span>
        <div class="signup-image">
          <h2 class="brand">Mist<span class="e-word">é</span>va</h2>
          <img src="/images/cos 1.png" alt="Chair Image" />
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
 `

      const signUpAll = document.querySelector(".sign-up-section");
      signUpAll.insertAdjacentHTML("afterbegin", signUpItems);
// #endregion signUp section e