(function(exports) {
  var ALL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var numberCollection = new Collection(ALL_NUMBERS);
  var imagePathCollection;

  function initialize() {
    $.get('/numeralia_images', function(imagePaths) {
      imagePathCollection = new Collection(imagePaths);
      generateQuestion();
    });
  }

  function generateQuestion() {
    var randomImagePath = imagePathCollection.chooseRandom();
    var randomQuantity = numberCollection.chooseRandom();

    _setImage(randomImagePath);
    _setImageVocabLabel(randomImagePath);
    _setQuantityLabel(randomQuantity);
  }

  function _setImage(imagePath) {
    document.getElementById('image').src = imagePath;
  }

  function _setImageVocabLabel(imagePath) {
    document.getElementById('vocab').innerHTML = _getFileNameWithoutExtension(imagePath);
  }

  function _setQuantityLabel(quantity) {
    document.getElementById('quantity').innerHTML = quantity;
  }

  function _getFileNameWithoutExtension(filePath) {
    return filePath.match(/([^/]+)\.\w{2,3}$/)[1].replace(/(\w)\(/g, '$1 (');
  }

  exports.initialize = initialize;
  exports.generateQuestion = generateQuestion;

})(this);
