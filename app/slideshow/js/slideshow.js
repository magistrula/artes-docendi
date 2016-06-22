let imageManager;

function initialize() {
  $.get('/slideshow_images', (imagePaths) => {
    imageManager = new ImageManager('main-image', imagePaths);
    $('.main-image-button').attr('disabled', false);
  });
}

function setImage() {
  imageManager.setImage();
}
