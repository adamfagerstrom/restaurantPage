function initialLoad() {
    const newWrapper = document.createElement("div");
    newWrapper.classList.add("wrapper");

    //Container for heading
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");
    newWrapper.appendChild(logoContainer);

    //Heading
    const heading = document.createElement("h2");
    heading.innerText = "CALM";
    logoContainer.appendChild(heading);

    document.querySelector("#content").appendChild(newWrapper);

    return newWrapper;
}

export default initialLoad;
