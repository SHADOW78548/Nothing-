const messages = [
    "You are stronger than you think.",
    "Everything will be okay in the end.",
    "Just breathe. You've got this.",
    "You're amazing, don't forget that.",
    "Take it one step at a time.",
    "You are very Special for ME!!"
];

const images = [
    "images1.jpeg",
    "images2.jpeg",
    "images3.jpeg",
    "images4.jpeg",
    "images5.jpeg",
    "images6.jpeg"
];

function changeMessage() {
    const messageElement = document.getElementById('message');
    const imageElement = document.getElementById('calmImage');

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    messageElement.textContent = randomMessage;
    imageElement.src = randomImage;
}
