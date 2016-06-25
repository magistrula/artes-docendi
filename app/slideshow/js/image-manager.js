var ImageManager = function(imageElementId, imagePaths) {
  this.imageElement = document.getElementById(imageElementId);
  this.imageChooser = new ItemChooser(imagePaths);
};

ImageManager.prototype.setImage = function() {
  this.imageElement.src = this.imageChooser.chooseItem();
}
