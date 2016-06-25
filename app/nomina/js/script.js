var IMAGE_FILE_NAMES = [
  'diva.png', 'draco.png', 'extraterrestris.png', 'genius.png', 'gnomus.png',
  'magus.png', 'monstrum.png', 'pirata.png', 'robotum.png', 'sanguisuga.png',
  'striga.png', 'trollum.png', 'unicornis.png', 'versipellis.png'
];

var ALL_CASES = ['Nom', 'Gen', 'Dat', 'Acc', 'Abl', 'Voc'];

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

var imageCollection = new Collection(IMAGE_FILE_NAMES);
var caseCollection = new Collection(ALL_CASES);

function generateQuestion() {
  var randomFileName = imageCollection.chooseRandom();
  var randomCase = caseCollection.chooseRandom();

  setImage(randomFileName);
  setImageVocabLabel(randomFileName);
  setCaseLabel(randomCase);
}

function setImage(imageFileName) {
  document.getElementById('image').src = '/nomina/images/' + imageFileName;
}

function setImageVocabLabel(imageFileName) {
  document.getElementById('vocab').innerHTML = imageFileName.replace(/\.\w{3,}$/, '');
}

function setCaseLabel(caseName) {
  document.getElementById('case').innerHTML = caseName;
}
