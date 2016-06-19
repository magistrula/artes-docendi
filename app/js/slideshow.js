let slideshowManager;

function initialize() {
  $.get('/images/slideshow', (imagePaths) => {
    slideshowManager = new SlideshowManager('main-image', imagePaths);
    $('.main-image-button').attr('disabled', false);
  });
}

function setImage() {
  slideshowManager.setImage();
}
