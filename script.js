const blueSound = new Audio('blue.mp3');
const redSound = new Audio('red.mp3');

document.getElementById('blueBtn').onclick = () => blueSound.play();
document.getElementById('redBtn').onclick = () => redSound.play();