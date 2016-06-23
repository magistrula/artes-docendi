var imageManager;

function initialize() {
  $.get('/slideshow_images', function(imagePaths) {
    imageManager = new ImageManager('main-image', imagePaths);
    $('.main-image-button').attr('disabled', false);
  });
}

function setImage() {
  imageManager.setImage();
}
