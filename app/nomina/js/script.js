(function(exports) {
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

})(this);
