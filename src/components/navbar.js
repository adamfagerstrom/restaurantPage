function navBarComp() {
    //Create header
    const siteHeader = document.createElement("header");
    siteHeader.classList.add("siteheader");

    const navElement = document.createElement("nav");
    siteHeader.appendChild(navElement);

    const createUl = document.createElement("ul");
    createUl.classList.add("navUL");
    navElement.appendChild(createUl);

    //NavLinks w. labels
    const startLink = navLinks("Start");
    createUl.appendChild(startLink);
    const menuLink = navLinks("Menu");
    createUl.appendChild(menuLink);
    const aboutLink = navLinks("About");
    createUl.appendChild(aboutLink);
    const contactLink = navLinks("Contact");
    createUl.appendChild(contactLink);

    document.body.prepend(siteHeader);
}

function navLinks(str) {
    const createLi = document.createElement("li");

    const createAlink = document.createElement("a");
    createAlink.classList.add("navlink");
    createAlink.innerText = str;
    createLi.appendChild(createAlink);

    return createLi;
}

export default navBarComp;
