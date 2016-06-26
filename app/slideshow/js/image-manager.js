var ImageManager = function(imageElementId, imagePaths) {
  this.imageElement = document.getElementById(imageElementId);
  this.imageCollection = new Collection(imagePaths);
};

ImageManager.prototype.setImage = function() {
  this.imageElement.src = this.imageCollection.chooseRandom();
}
