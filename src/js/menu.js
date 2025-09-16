import biriyani from "..assets/biriyani.png";
import parotta from "..assets/parotta.png";
import dosa from "..assets/dosa.png";
import payasam from "..assets/payasam.png";
import brownie from "..assets/brownie.png";

const divMenu = document.createElement("div");
divMenu.id = "divMenu";

//food containers
const divBiriyani = document.createElement("div");
divBiriyani.className = "divFoodItem";
const divParotta = document.createElement("div");
divParotta.className = "divFoodItem"
const divDosa = document.createElement("div");
divDosa.className = "divFoodItem";
const divPayasam = document.createElement("div");
divPayasam.className = "divFoodItem"
const divBrownie = document.createElement("div");
divBrownie.className = "divFoodItem"

//food images
const imgBiriyani = document.createElement("img");
imgBiriyani.src = biriyani;
const imgParotta = document.createElement("img");
imgParotta.src = parotta;
const imgDosa = document.createElement("img");
imgDosa.src = dosa;
const imgPayasam = document.createElement("img");
imgPayasam.src = payasam;
const imgBrownie = document.createElement("img");
imgBrownie.src = brownie;

//food description
const disBiriyani = document.createElement("p");
disBiriyani.textContent = "Biriyani - Rs.180";
const disParotta = document.createElement("p");
disParotta.textContent = "Parotta - Rs.30";
const disDosa = document.createElement("p");
disDosa.textContent = "Dosa - Rs.50";
const disPayasam = document.createElement("p");
disPayasam.textContent = "Payasam - Rs.80";
const disBrownie = document.createElement("p");
disBrownie.textContent = "Brownie - Rs.200";

//appending food decription and image to the food container
divBiriyani.append(imgBiriyani, disBiriyani);
divParotta.append(imgParotta, disParotta);
divDosa.append(imgDosa, disDosa);
divPayasam.append(imgPayasam, disPayasam);
divBrownie.append(imgBrownie, disBrownie);

//appending food containers to the main div of menu
divMenu.append(divBiriyani, divParotta, divDosa, divPayasam, divBrownie);


export {divMenu};



