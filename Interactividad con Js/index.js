/*Name this external file gallery.js*/

function upDate(previewPic){
  // 1) Cambiar la URL de la imagen de fondo del div con id = "image"
  document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';

  // 2) Cambiar el texto del div con id = "image" al alt del previewPic
  document.getElementById('image').innerText = previewPic.alt;
}

function unDo(){
                           document.getElementById('image').style.backgroundImage = 'url(' + image.src + ')';

  
  document.getElementById('image').innerText;
  
}