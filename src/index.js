import _ from "lodash";
import "./style.scss";
import initialLoad from "./components/initial_load.js";

if (module.hot) {
    module.hot.accept("./print.js", function () {
        console.log("Accepting the updated printMe module!");
        printMe();
    });
}

initialLoad();
