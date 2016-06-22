(function(exports) {
  var IMAGE_FILE_NAMES = [
    'diva.png', 'draco.png', 'extraterrestris.png', 'genius.png', 'gnomus.png',
    'magus.png', 'monstrum.png', 'pirata.png', 'robotum.png', 'sanguisuga.png',
    'striga.png', 'trollum.png', 'unicornis.png', 'versipellis.png'
  ];

  var CASES = ['NOM', 'GEN', 'DAT', 'ACC', 'ABL'];

  var IMAGE_ELEMENT_ID = 'image';
  var IMAGE_LABEL_ELEMENT_ID = 'image-label';
  var CASE_LABEL_ELEMENT_ID = 'case-label';
  var IMAGES_FOLDER = '/nomina/images/';

  var caseChooser = new RandomChooser(CASES);
  var fileNameChooser = new RandomChooser(IMAGE_FILE_NAMES);

  function generateQuestion() {
    var randomCase = caseChooser.choose();
    var randomFileName = fileNameChooser.choose();
    var pathToImage = IMAGES_FOLDER + randomFileName;
    var imageFileNameWithoutExtension = withoutExtension(randomFileName);

    setImage(IMAGE_ELEMENT_ID, pathToImage);
    setText(IMAGE_LABEL_ELEMENT_ID, imageFileNameWithoutExtension);
    setText(CASE_LABEL_ELEMENT_ID, randomCase);
  }

  function getRandomIndex(items) {
    return Math.floor(Math.random() * items.length);
  }

  function withoutExtension(fileName) {
    return fileName.replace(/\.\w{3,}$/, '');
  }

  function setImage(imageId, fileName) {
    document.getElementById(imageId).src = fileName;
  }

  function setText(elementId, text) {
    document.getElementById(elementId).innerHTML = text;
  }

  function RandomChooser(allItems) {
    this.allItems = allItems;
    this.availableItems = [];
  }

  /**
   * RandomChooser
   */

  RandomChooser.prototype.isEmpty = function() {
    return this.availableItems.length === 0;
  }

  RandomChooser.prototype.refill = function() {
    this.availableItems = this.allItems.slice();
  }

  RandomChooser.prototype.choose = function() {
    if (this.isEmpty()) {
      this.refill();
    }

    var randomIndex = getRandomIndex(this.availableItems);
    return this.availableItems.splice(randomIndex, 1)[0];
  }

  exports.generateQuestion = generateQuestion;
})(window);
