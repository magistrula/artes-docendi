var allImageNames = ['achilles.jpg','minerva.jpg','caesar.jpg','alexander.jpg','atlas.jpg','scipio.jpg','hercules.jpg'];
var imageElement = document.getElementById('main-image');
var imageNameBank = [];

var setImage = function () {
  if (imageNameBank.length === 0) {
      imageNameBank = imageNameBank.concat(allImageNames);
  }

  var index = Math.floor(Math.random() * imageNameBank.length);
  var imageName = imageNameBank.splice(index, 1);

  imageElement.src = 'img/' + imageName;
}