const header = document.createElement("header");
const navBar = document.createElement("nav");

const home = document.createElement("button");
home.id = "home";
home.textContent = "Home";

const menu = document.createElement("button");
menu.id = "menu";
menu.textContent = "Menu";

const about = document.createElement("button");
about.id = "about";
about.textContent = "About";

document.body.appendChild(header);
header.appendChild(navBar);
navBar.appendChild(home);
navBar.appendChild(menu);
navBar.appendChild(about);

export {header};