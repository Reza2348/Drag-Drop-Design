let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    selected = e.target;
  });
}

[rightBox, leftBox].forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); // اجازه درگ شدن
  });

  box.addEventListener("drop", (e) => {
    if (selected) {
      box.appendChild(selected);
      selected = null;
    }
  });
});
