let content = document.querySelector("#content");

let html = "";

window.addEventListener("load", () => {
  createElemenstHtml();
});

function createElemenstHtml() {
  for (let i = 1; i <= 10; i++) {
    let divGroup = document.createElement("div");
    divGroup.className = "group";
    divGroup.id = "group" + i;

    let labelAge = document.createElement("label");
    labelAge.setAttribute("for", "age" + i);
    labelAge.textContent = "Edad #" + i;

    let inputAge = document.createElement("input");
    inputAge.className = "input-age";
    inputAge.id = "inputAge" + i;
    inputAge.setAttribute("placeholder", 0);
    inputAge.setAttribute("type", "number");
    inputAge.setAttribute("min", 1);
    inputAge.setAttribute("max", 120);
    inputAge.setAttribute("step", 1);

    divGroup.appendChild(labelAge);
    divGroup.appendChild(inputAge);
    content.appendChild(divGroup);
  }
}
