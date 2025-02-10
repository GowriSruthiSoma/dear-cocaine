document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const noteContainer = document.getElementById("noteContainer");

    let yesSize = 2.2; // Initial size for YES button
    const notes = [
        "Are you sure? 🥺",
        "Think again... 😢",
        "What if I cry? 😭",
        "You're breaking my heart 💔",
        "Last chance! 😭",
        "Fine! I'll go eat chocolates alone! 🍫"
    ];
    let noteIndex = 0;

    noButton.addEventListener("click", function () {
        if (noteIndex < notes.length) {
            noteContainer.innerText = notes[noteIndex];
            noteContainer.style.display = "block";
            noteContainer.style.left = `${noButton.offsetLeft}px`;
            noteContainer.style.top = `${noButton.offsetTop + 50}px`;
            noteIndex++;
        }
        
        // Increase YES button size
        yesSize += 0.5;
        yesButton.style.fontSize = `${yesSize}em`;
        yesButton.style.padding = `${yesSize * 8}px ${yesSize * 20}px`;
    });

    yesButton.addEventListener("click", function () {
        document.body.innerHTML = `
            <div class="yes-container">
                <h1 class="yes-message">YAY! 💖</h1>
                <p>You made my day! 🥰</p>
            </div>
        `;
    });
});
