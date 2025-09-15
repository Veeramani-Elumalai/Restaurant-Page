const ulList = document.createElement("ul");

const biriyani = document.createElement("li");
biriyani.textContent = "Biriyani";

const parotta = document.createElement("li");
parotta.textContent = "Parotta";

const dosa = document.createElement("li");
dosa.textContent = "Dosa";

const payasam = document.createElement("li");
payasam.textContent = "Payasam";

const brownie = document.createElement("li");
brownie.textContent = "Brownie";  

ulList.appendChild(biriyani);
ulList.appendChild(parotta);
ulList.appendChild(dosa);
ulList.appendChild(payasam);
ulList.appendChild(brownie);

export {ulList as specialsCard};