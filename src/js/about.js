const divAbout = document.createElement("div");
divAbout.id = "about";

const h2About = document.createElement("h2");
h2About.textContent = "About";

const pAbout = document.createElement("p");
pAbout.textContent = "Looking for comfort food that hits the spot? Look no further. Our menu is all about satisfying your cravings with the classics you love. From our legendary biriyani and crispy dosa to the comforting layers of our parotta, every dish is made with care. Don't forget to save room for our delicious desserts, including a classic payasam or a warm, fudgy brownie.";


//Appending h2 and p to the div
divAbout.append(h2About, pAbout);

export {divAbout}