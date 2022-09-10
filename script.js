let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "grey",
  "pink",
  "purple",
  "aqua",
];

const click = document.querySelector("#click");
const info = document.querySelector("#info");

click.addEventListener("click", function () {
  const random = Math.floor(Math.random() * colors.length);
  //   info.innerHTML = "background-color:" + colors[random];
  document.body.style.backgroundColor = colors[random];
  info.textContent = "Background-Color: " + colors[random].toUpperCase();
});
