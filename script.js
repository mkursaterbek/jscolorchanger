let colors = [];

const click = document.querySelector("#click");
const info = document.querySelector("#info");
const buttons = document.querySelector("#buttons");
const btn = document.createElement("button");
buttons.appendChild(btn);
btn.innerHTML = "Add Color";
btn.classList.add("clickStyle");

click.addEventListener("click", function () {
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
  info.textContent = "Background-Color: " + colors[random].toUpperCase();
});

btn.addEventListener("click", function addColor() {
  const textbox = document.querySelector("#textbox");
  if (textbox.value != "") {
    colors.push(textbox.value);
    textbox.value = "";
  }
  console.log(colors);
});
