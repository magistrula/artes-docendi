(function(exports) {

  function Collection(allItems) {
    this._allItems = allItems;
    this._availableItems = [];
    this._refillAvailableItems();
  }

  Collection.prototype.chooseRandom = function() {
    if (this._isEmpty()) {
      this._refillAvailableItems();
    }

    var randomIndex = Math.floor(Math.random() * this._availableItems.length);
    return this._availableItems.splice(randomIndex, 1)[0];
  }

  Collection.prototype._isEmpty = function() {
    return this._availableItems.length === 0;
  }

  Collection.prototype._refillAvailableItems = function() {
    this._availableItems = this._allItems.slice();
  }

  // --------------------------------------------------------------- //

  var ALL_CASES = ['Nom', 'Gen', 'Dat', 'Acc', 'Abl', 'Voc'];
  var caseCollection = new Collection(ALL_CASES);
  var imagePathCollection;

  function initialize() {
    $.get('/nomina_images', function(imagePaths) {
      imagePathCollection = new Collection(imagePaths);
      generateQuestion();
    });
  }

  function generateQuestion() {
    var randomImagePath = imagePathCollection.chooseRandom();
    var randomCase = caseCollection.chooseRandom();

    _setImage(randomImagePath);
    _setImageVocabLabel(randomImagePath);
    _setCaseLabel(randomCase);
  }

  function _setImage(imagePath) {
    document.getElementById('image').src = imagePath;
  }

  function _setImageVocabLabel(imagePath) {
    document.getElementById('vocab').innerHTML = _getFileNameWithoutExtension(imagePath);
  }

  function _setCaseLabel(caseName) {
    document.getElementById('case').innerHTML = caseName;
  }

  function _getFileNameWithoutExtension(filePath) {
    return filePath.match(/([^/]+)\.\w{2,3}$/)[1];
  }

  exports.initialize = initialize;
  exports.generateQuestion = generateQuestion;

})(window);
