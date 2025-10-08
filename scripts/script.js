const form = document.getElementById("taskList");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);

  const content = document.getElementById("cose-da-fare");
  const valore = content.value;
  console.log("quello che devi fare è?", valore);
  content.value = "";

  const li = document.createElement("li");
  li.innerText = valore;
  contenitore.appendChild(li);
  const buttons = document.createElement("button");
  buttons.innerText = "elimina";
  li.appendChild(buttons);

  buttons.addEventListener("click", function () {
    li.remove(); 
  });
});
