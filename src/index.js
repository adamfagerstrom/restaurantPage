import _ from "lodash";
import "./style.scss";
import initialLoad from "./components/initial_load.js";
import navBarComp from "./components/navbar.js";
import createMenu from "./components/menu_page.js";

if (module.hot) {
    module.hot.accept("./print.js", function () {
        console.log("Accepting the updated printMe module!");
        printMe();
    });
}

navBarComp();
initialLoad();
createMenu();
