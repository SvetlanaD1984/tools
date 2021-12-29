import "../scss/main.scss";
import "./images.js"

const galleryItems = [
  { 
    src:  "http://localhost:8080/29f7cfef27abba0e723ddd4d8f1d8f84.jpg",
    title: 'Мельница у реки',
    type: 'image',
    id: '1'
  },
  { 
    src: "http://localhost:8080/6b154291e565321a8d8f5aa7626f115f.jpg",
    title: 'Горы осенью',
    type: 'image',
    id: '2'
  },
  { 
    src: "http://localhost:8080/d2e08f326079af6cd0ea0eaf2af76a58.jpg",
    title: 'Деревня летом',
    type: 'image',
    id: '3'
  },
  { 
    src: "http://localhost:8080/6cfd38545df0a6b826795a261bab82ab.gif" ,
    title: 'Анимированный кот',
    type: 'image',
    id: '4'
  },
  { 
    src: "http://localhost:8080/c0d87f795d89a32833f16255fb1e374c.mp3",
    title: 'Звук 1',
    type: 'audio',
    id: '5'
  },
  { 
    src: "http://localhost:8080/8b0ef9c31c5261aa12003aa18662707d.mp3",
    title: 'Звук 2',
    type: 'audio',
    id: '6'
  },
  { 
    src: "http://localhost:8080/2741a0c07e31d8938346a489976f4597.mp3",
    title: 'Звук 3',
    type: 'audio',
    id: '7'
  },
  { 
    src: "http://localhost:8080/bd1f40dc31d71b852dc2c5155b68eaf4.mp4",
    title: 'Видео 1',
    type: 'video',
    id: '8'
  },
  { 
    src: "http://localhost:8080/6d2cb4526da74e1dba62578634cb9257.mp4",
    title: 'Видео 2',
    type: 'video',
    id: '9'
  },

];


let gallery = document.getElementById('gallery');
    
galleryItems.forEach(function(item, array){
  
  if (item.type == 'image') {
   
    let newImg = document.createElement("img");
    newImg.classList.add('gallery_img');
    newImg.src = item.src;
    newImg.title = item.title;
    newImg.id = item.id;
    newImg.innerHTML = item.title;
    gallery.appendChild(newImg);
    newImg.insertAdjacentHTML('beforebegin', item.title);
      
  } else if (item.type == 'audio') {
 
    let newAudio = document.createElement("audio");
    newAudio.classList.add('gallery_img');
    newAudio.setAttribute('controls', 'controls'); 
    newAudio.src = item.src;
    newAudio.title = item.title;
    newAudio.id = item.id;
    newAudio.innerText = item.title;
    gallery.appendChild(newAudio);
    newAudio.insertAdjacentHTML('beforebegin', item.title);

} else {
  
  let newVideo = document.createElement("video");
    newVideo.classList.add('gallery_img');
    newVideo.setAttribute('controls', 'controls'); 
    newVideo.src = item.src;
    newVideo.title = item.title;
    newVideo.id = item.id;
    newVideo.innerText = item.title;
    gallery.appendChild(newVideo);
    newVideo.insertAdjacentHTML('beforebegin', item.title);
  }
})
