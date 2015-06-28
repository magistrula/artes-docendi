var allImageNames = [];
var imageElement = document.getElementById('main-image');
var imageNameBank = [];

$.get('/images/main', function (imageNames) {
  allImageNames = imageNames;    
});

var getRandomIndexInArray = function (array) {
    return Math.floor(Math.random() * array.length);
}

var getRandomImageName = function () {
    if (imageNameBank.length === 0) {
        imageNameBank = imageNameBank.concat(allImageNames);
    }
    var index = getRandomIndexInArray(imageNameBank);
    return imageNameBank.splice(index, 1);
}

var setImage = function () {
    var imageName = getRandomImageName();
    imageElement.src = 'img/main/' + imageName;
}