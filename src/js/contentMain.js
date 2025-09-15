import { specialsCard } from "./specials";
import heroImg from "../assets/00.jpeg";

const divContent = document.createElement("div");
divContent.id = "content";

const heading = document.createElement("h1");
heading.textContent = "Welcome To Our Restaurant !!"

const img = document.createElement("img");
img.src = heroImg;

const divSpecials = document.createElement("div");
divSpecials.id = "specialsCard";

const headingThree = document.createElement("h3");
headingThree.textContent = "Specials";

//appending to content div
divContent.appendChild(heading);
divContent.appendChild(img);
divContent.appendChild(divSpecials);

//appending to Special cards div
divSpecials.appendChild(headingThree);
divSpecials.appendChild(specialsCard);

export {divContent};