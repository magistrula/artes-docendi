var allImageNames = [];
var imageNameBank = [];
var imageElement = document.getElementById('main-image');

$.get('/images/main', function (imageNames) {
  allImageNames = imageNames;    
});

var setImage = function () {
  var imageName = getRandomImageName();
  imageElement.src = 'img/main/' + imageName;
}

var getRandomImageName = function () {
  if (imageNameBank.length === 0) {
    imageNameBank = imageNameBank.concat(allImageNames);
  }
  var index = getRandomIndexInArray(imageNameBank);
  return imageNameBank.splice(index, 1)[0];
}

var getRandomIndexInArray = function (array) {
  return Math.floor(Math.random() * array.length);
}
