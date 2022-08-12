const app = document.getElementById("app");

let ele = document.getElementById("input");
if (!ele) {
  ele = document.createElement("input");
  ele.id = "input";
  app.appendChild(ele);
}

ele.placeholder = "abbc";
