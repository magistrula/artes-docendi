class SlideshowManager {
  constructor(elementId, imagePaths) {
    this.imageElement = document.getElementById(elementId);
    this.imageChooser = new ItemChooser(imagePaths);
  }

  setImage() {
    this.imageElement.src = this.imageChooser.chooseItem();
  }
}
