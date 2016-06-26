(function(exports) {

  var imageManager;

  function initialize() {
    $.get('/slideshow_images', function(imagePaths) {
      imageManager = new ImageManager('main-image', imagePaths);
      $('.main-image-button').attr('disabled', false);
      setImage();
    });
  }

  function setImage() {
    imageManager.setImage();
  }

  exports.initialize = initialize;
  exports.setImage = setImage;

})(this);
