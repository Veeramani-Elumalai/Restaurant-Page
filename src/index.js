import { header } from "./js/header.js";
import { divContent } from "./js/contentMain.js";
import { divMenu, divmenu } from "./js/menu.js";
import { divAbout } from "./js/about.js";
import "./styles.css";

document.body.appendChild(header);
document.body.appendChild(divContent);

//Home button
const homeButton = document.querySelector("#homeBtn");
homeButton.addEventListener("click", ()=> {
    divMenu.remove();
    divAbout.remove();
    document.body.appendChild(divContent);
});

//Menu button 
const menuButton = document.querySelector("#menuBtn");
menuButton.addEventListener("click", ()=> {
    divContent.remove();
    divAbout.remove();
    document.body.appendChild(divMenu);
});

//About button
const aboutButton = document.querySelector("#aboutBtn");
aboutButton.addEventListener("click", ()=> {
    divContent.remove();
    divMenu.remove();
    document.body.appendChild(divAbout);
});
