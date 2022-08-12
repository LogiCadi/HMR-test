const app = document.getElementById("app");

let ele = document.getElementById("text");
if (!ele) {
  ele = document.createElement("div");
  ele.id = "text";
  app.appendChild(ele);
}

ele.innerText = "OKsssqqdd";
