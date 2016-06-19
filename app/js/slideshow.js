let imageManager;

function initialize() {
  $.get('/images/slideshow', (imagePaths) => {
    imageManager = new ImageManager('main-image', imagePaths);
    $('.main-image-button').attr('disabled', false);
  });
}

function setImage() {
  imageManager.setImage();
}
