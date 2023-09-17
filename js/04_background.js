const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");


function changeBackgroundImage() {
  document.body.style.backgroundImage = `url("img/${chosenImage}")`;
}

document.body.style.backgroundImage = `url("img/${chosenImage}")`;
document.body.style.height = `98.3vh`;
document.body.style.backgroundSize = `cover`;
setInterval(changeBackgroundImage, 1000);