const header = document.createElement("header");
const navBar = document.createElement("nav");

const home = document.createElement("button");
home.id = "homeBtn";
home.textContent = "Home";

const menu = document.createElement("button");
menu.id = "menuBtn";
menu.textContent = "Menu";

const about = document.createElement("button");
about.id = "aboutBtn";
about.textContent = "About";

document.body.appendChild(header);
header.appendChild(navBar);
navBar.appendChild(home);
navBar.appendChild(menu);
navBar.appendChild(about);

export {header};