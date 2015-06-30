var allImageNames = [];
var imageNameBank = [];
var imageElement = document.getElementById('main-image');

$.get('/images/main', function (imageNames) {
  allImageNames = imageNames;    
});

var setImage = function () {
  if (imageNameBank.length === 0) {
      imageNameBank = imageNameBank.concat(allImageNames);
  }

  var index = Math.floor(Math.random() * imageNameBank.length);
  var imageName = imageNameBank.splice(index, 1);

  imageElement.src = 'img/main/' + imageName;
}