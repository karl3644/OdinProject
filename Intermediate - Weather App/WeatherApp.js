import { api } from "./Util.js";

function logger(){
    console.log(api);
    console.log('logger');
}

const submitButton = document.getElementById("apiButton")
submitButton.addEventListener("click", (e) => console.log("clicked"))

export { logger }