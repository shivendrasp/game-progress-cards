const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");

let text = [
  "Demon's Souls",
  "Ratchet and Clank",
  "Spider Man Miles",
  "Horizon Forbidden West",
  "Returnal",
  "Sackboy Big Adventure",
  "Resident Evil Village",
  "Final Fantasy XVI",
  "Astro's Playroom",
  "Godfall",
  "Gran Turismo 7",
  "Call of Duty",
  "Elden Ring",
  "Deathloop",
  "Forspoken",
  "Kena Bridge Spirits",
  "Ghostwire Tokyo",
  "Destruction AllStars",
  "Chivalry Two",
  "Far Cry Six",
  "NBA 2K24",
  "Cyberpunk 2077",
  "FIFA 23",
  "Stray",
  "Bugsnax",
  "Callisto Protocol",
  "Tiny Tina’s Wonderland",
  "Scarlet Nexus",
  "Marvel Midnight Suns"
];

cards.forEach((card, index) => {
  let p = document.createElement("p");
  let num = Math.floor(Math.random() * 200);
  num > 100 ? (p.textContent = `${num}%`) : (p.textContent = `${num}%`);
  num > 100 && p.classList.add("green");
  card.appendChild(p);

  let h3 = document.createElement("h3");
  h3.textContent = text[Math.floor(Math.random() * text.length)];
  card.appendChild(h3);
});

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.style.cursor = "grabbing";
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.style.cursor = "grab";
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.style.cursor = "grab";
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 0.4;
  container.scrollLeft = scrollLeft - walk;
});
