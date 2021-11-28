const images = ["bg_01.jpeg","bg_02.jpeg","bg_03.jpeg","bg_04.jpeg","bg_05.jpeg"]
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.background = `url(./img/${chosenImage})no-repeat 50% / cover`;