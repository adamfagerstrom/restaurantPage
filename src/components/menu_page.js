import img from "/Users/adamfagerstrom/Documents/VS Code/The Odin Project/restaurantPage/src/img/food1.jpg";

function createMenu() {
    const newWrapper = document.createElement("div");
    newWrapper.classList.add("siteContainer");

    document.querySelector(".wrapper").appendChild(newWrapper);

    const newImageCont = document.createElement("aside");
    newImageCont.classList.add("imgContainer");
    const myImage = new Image();
    myImage.src = img;
    newImageCont.appendChild(myImage);
    newWrapper.appendChild(newImageCont);

    const newTextCont = document.createElement("article");
    newTextCont.classList.add("textContainer");
    newWrapper.appendChild(newTextCont);
}

export default createMenu;
