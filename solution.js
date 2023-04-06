// HTML References
const input = document.querySelector(".input");
const btnAddNote = document.querySelector(".addNote");
const notes = document.querySelector(".notes");
let currentNoteNumber = 0;

const modal = document.querySelector(".modal");
const showMessage = document.querySelector(".showMessage");
const close = document.querySelector(".close");

// Practice Work
btnAddNote.addEventListener("click", function () {
  const message = input.value;
  currentNoteNumber++;
  if (message != "") {
    notes.innerHTML += `
    <div class='item'>
      <h1>Note ${currentNoteNumber}</h1>
      <p>${message}</p>
      <button class='viewDetail'>View Detail</button>
    </div>
    `;
    input.value = "";

    const item = document.querySelectorAll(".item");

    for (let i = 0; i < item.length; i++) {
      item[i]
        .querySelector(".viewDetail")
        .addEventListener("click", function () {
          let takeOldMessage = item[i].querySelector("p").innerHTML;
          showMessage.innerHTML = takeOldMessage;
          modal.style.display = "block";

          // EXIT MODAL
        });
    }
  }
});

// EXIT MODAL
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
