const mainPageAppend = document.querySelector("#mainPageAppend");

const mainPageTemplate = document.querySelector("#mainPageTemplate");

// show main page information
export const showMainPage = (mainPage) => {
    if (!mainPage) {
        return false;  
    }
    mainPage.forEach(curPage => {
        const {id, img, heading, description, backgroundImg, alt} = curPage;
        const pageClone = document.importNode(mainPageTemplate.content, true);

        // add different id numbers for different page
        pageClone.querySelector("#mainPageValue").setAttribute("id", `mainPage${id}`);

        // main page information
        pageClone.querySelector(".main-heading").textContent = heading;
        pageClone.querySelector(".main-para").textContent = description;
        pageClone.querySelector(".img-main1").src = img;
        pageClone.querySelector(".img-main1").alt = alt;
        pageClone.querySelector(".back-mix-img-assign").src = backgroundImg;
        pageClone.querySelector(".back-mix-img-assign").alt = alt;

        // main page information append
        mainPageAppend.append(pageClone);
    }); 
};