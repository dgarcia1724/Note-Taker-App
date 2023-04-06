// HTML References
const input = document.querySelector(".container > textarea");
const btnAddNote = document.querySelector(".addNote");
const notes = document.querySelector(".notes");

// Modal
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const showMessage = document.querySelector(".showMessage");

let count = 0;

btnAddNote.addEventListener("click", function () {
  count++;
  const text = input.value;
  if (text != "") {
    notes.innerHTML += `
      <div class='item'>
        <h1>Note ${count}</h1>
        <p>${text}</p>
        <button class='viewDetail'>View Detail</button>
      </div>
    `;
    input.value = "";

    // click on View Detail Btn
    const item = document.querySelectorAll(".item");
    for (let i = 0; i < item.length; i++) {
      item[i]
        .querySelector(".viewDetail")
        .addEventListener("click", function () {
          modal.style.display = "block";
          showMessage.innerHTML = item[i].querySelector("p").innerHTML;
        });
    }
  }
});

// Exit Modal
close.addEventListener("click", function () {
  modal.style.display = "none";
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
