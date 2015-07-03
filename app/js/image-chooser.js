var allImageNames = ['achilles.jpg','minerva.jpg','caesar.jpg','alexander.jpg',
                     'atlas.jpg','scipio.jpg','hercules.jpg'];
var imageNameBank = [];
var imageElement = document.getElementById('main-image');

var setImage = function () {
  if (imageNameBank.length === 0) {
    imageNameBank = imageNameBank.concat(allImageNames);
  }

  var index = Math.floor(Math.random() * imageNameBank.length);
  var imageName = imageNameBank.splice(index, 1)[0];

  imageElement.src = 'img/' + imageName;
}
