var ImageChooser = function (imageSubfolder, elementId, readyCallback) {
  this.imageSubfolder = imageSubfolder;
  this.imageElement = document.getElementById(elementId);
  this.allImageNames = [];
  this.imageNameBank = [];

  this._getImages(readyCallback);
}

ImageChooser.prototype._getImages = function (callback) {
  var self = this;
  $.get('/images/' + this.imageSubfolder, function (imageNames) {
    self.allImageNames = imageNames;
    if (callback) callback();
  });
}

ImageChooser.prototype._getRandomImageName = function () {
  if (this.imageNameBank.length === 0) {
    this.imageNameBank = this.imageNameBank.concat(this.allImageNames);
  }
  var index = getRandomIndexInArray(this.imageNameBank);
  return this.imageNameBank.splice(index, 1)[0];
}

ImageChooser.prototype.setImage = function () {
  var imageName = this._getRandomImageName();
  this.imageElement.src = 'img/' + this.imageSubfolder + '/' + imageName;
}

var getRandomIndexInArray = function (array) {
  return Math.floor(Math.random() * array.length);
}
