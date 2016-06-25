var ImageManager = function(imageElementId, imagePaths) {
  this.imageElement = document.getElementById(imageElementId);
  this.imageChooser = new ItemChooser(imagePaths);
  _loadImages(imagePaths);
};

ImageManager.prototype.setImage = function() {
  this.imageElement.src = this.imageChooser.chooseItem();
}

function _loadImages(imagePaths) {
  imagePaths.forEach(function(path) {
    $.get(path);
  });
}