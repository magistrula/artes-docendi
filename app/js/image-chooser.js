var allImageNames = ['achilles.jpg','minerva.jpg','caesar.jpg','alexander.jpg','atlas.jpg','scipio.jpg','hercules.jpg'];
var imageElement = document.getElementById('main-image');
var imageNameBank = [];

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
    imageElement.src = 'img/' + imageName;
}