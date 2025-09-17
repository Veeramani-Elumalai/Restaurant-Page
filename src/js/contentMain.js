import { specialsCard } from "./specials";
import heroImg from "../assets/home.jpg";

const divContent = document.createElement("div");
divContent.id = "content";

const heading = document.createElement("h1");
heading.textContent = "The Comfort Corner"

const img = document.createElement("img");
img.width = "400";
img.height = "250";
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