const funnybutton = document.getElementById("funnybutton");

funnybutton.addEventListener("click", function () {
  console.log("something");
});

function changeBG() {
  document.body.style.backgroundColor = "red";
}

function changeBGwhite() {
  document.body.style.backgroundColor = "blue";
}
const bg = document.getElementById("bg");

bg.addEventListener("click", changeBG);

const bg2 = document.getElementById("whitebackground");

bg2.addEventListener = ("click", changeBGwhite);
