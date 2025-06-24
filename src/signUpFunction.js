export const signUpFunction = () => {
    document.querySelector(".sign-up-section").classList.toggle("open");

    const bodyScroll = document.querySelector(".scroll");  
       bodyScroll.classList.toggle("no-scroll");
};