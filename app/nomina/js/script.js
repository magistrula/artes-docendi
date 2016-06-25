function Collection(allItems) {
  this._allItems = allItems;
  this._availableItems = [];
  this._refillAvailableItems();
}

Collection.prototype._refillAvailableItems = function() {
  this._availableItems = this._allItems.slice();
}

Collection.prototype.chooseRandom = function() {
  if (this._availableItems.length === 0) {
    this._refillAvailableItems();
  }

  var randomIndex = Math.floor(Math.random() * this._availableItems.length);
  return this._availableItems.splice(randomIndex, 1)[0];
}

// --------------------------------------------------------------- //

var ALL_CASES = ['Nom', 'Gen', 'Dat', 'Acc', 'Abl', 'Voc'];
var caseCollection = new Collection(ALL_CASES);
var imageCollection;

function initialize() {
  $.get('/nomina_images', function(imagePaths) {
    imageCollection = new Collection(imagePaths);
    generateQuestion();
  });
}

function generateQuestion() {
  var randomFileName = imageCollection.chooseRandom();
  var randomCase = caseCollection.chooseRandom();

  setImage(randomFileName);
  setImageVocabLabel(randomFileName);
  setCaseLabel(randomCase);
}

function setImage(imagePath) {
  document.getElementById('image').src = imagePath;
}

function setImageVocabLabel(imagePath) {
  document.getElementById('vocab').innerHTML = imagePath.match(/([^/]+)\.\w{2,3}$/)[1];
}

function setCaseLabel(caseName) {
  document.getElementById('case').innerHTML = caseName;
}
