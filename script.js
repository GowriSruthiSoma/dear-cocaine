document.getElementById("yes-btn").addEventListener("click", function () {
    window.location.href = "yes_page.html";
});

const noButton = document.getElementById("no-btn");
const noteContainer = document.getElementById("note-container");

const cuteNotes = [
    "Are you sure? 🥺",
    "But I made this with love! 💗",
    "You're breaking my heart! 💔",
    "Give me another chance? 🥹",
    "I promise I'm super fun! 🎉",
    "You're missing out on the best Valentine! 😘"
];

let index = 0;

noButton.addEventListener("click", function () {
    if (index < cuteNotes.length) {
        const note = document.createElement("p");
        note.textContent = cuteNotes[index];
        note.classList.add("note");
        noteContainer.appendChild(note);
        index++;
    } else {
        noButton.textContent = "Okay, I give up... 😭";
        noButton.disabled = true;
    }
});
