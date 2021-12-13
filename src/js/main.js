
import "../scss/main.scss";
import "./images.js"



const galleryItems = [
  { 
    src: image1,
    title: 'Мельница у реки',
    type: 'image'
  },
  { 
    src: image2,
    title: 'Горы осенью',
    type: 'image'
  },
  { 
    src: image3,
    title: 'Деревня летом',
    type: 'image'
  },
  { 
    src: image4,
    title: 'Анимированный кот',
    type: 'image'
  },
  { 
    src: sound1,
    title: 'Звук 1',
    type: 'audio'
  },
  { 
    src: sound2,
    title: 'Звук 2',
    type: 'audio'
  },

]


galleryItems.forEach(() => {
  if (type.image) renderImage()
  if (type.audio) renderAudio()
})


function renderImage(item) {
  let result = "<div>" + [item.title, item.src].join(" ") + "</div>";
  return result;
}
function myFunction1() {
  document.getElementById("images-item").innerHTML =
    "<div>" + galleryItems.map(renderImage).join('') + "</div>";
}
  
function renderAudio(item) {
  let result = "<div>" + [item.title, item.src].join(" ") + "</div>";
  return result;
}
function myFunction2() {
  document.getElementById("audio-item").innerHTML =
    "<div>" + galleryItems.map(renderImage).join('') + "</div>";
}
  

