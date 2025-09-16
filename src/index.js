import { header } from "./js/header.js";
import { divContent } from "./js/contentMain.js";
import { divMenu, divmenu } from "./js/menu.js";
import "./styles.css";

document.body.appendChild(header);
document.body.appendChild(divContent);

//Home button
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", ()=> {
    divMenu.remove();
    document.body.appendChild(divContent);
});

//Menu button 
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", ()=> {
    divContent.remove();
    document.body.appendChild(divMenu);
});
