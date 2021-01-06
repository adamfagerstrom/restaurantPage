function initialLoad() {
    const newWrapper = document.createElement("div");
    newWrapper.classList.add("wrapper");

    //Container for heading
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");
    newWrapper.appendChild(contentContainer);

    //Heading
    const heading = document.createElement("h2");
    heading.innerText = "CALM";
    contentContainer.appendChild(heading);

    document.querySelector("#content").appendChild(newWrapper);

    return newWrapper;
}

export default initialLoad;
