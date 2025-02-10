function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    const messages = [
        "Are you sure?",
        "Really sure??",
        "Are you positive?",
        "Pookie please...",
        "Just think about it!",
        "If you say no, I will be really sad...",
        "I will be very sad...",
        "I will be very very very sad...",
        "Ok fine, I will stop asking...",
        "Just kidding, say yes please! ❤️"
    ];

    let messageIndex = Math.floor(Math.random() * messages.length);
    noButton.textContent = messages[messageIndex];

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}
