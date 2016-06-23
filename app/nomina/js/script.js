var IMAGE_FILE_NAMES = [
  'diva.png', 'draco.png', 'extraterrestris.png', 'genius.png', 'gnomus.png',
  'magus.png', 'monstrum.png', 'pirata.png', 'robotum.png', 'sanguisuga.png',
  'striga.png', 'trollum.png', 'unicornis.png', 'versipellis.png'
];

var ALL_CASES = ['Nom', 'Gen', 'Dat', 'Acc', 'Abl', 'Voc'];

function Collection(allItems) {
  this.allItems = allItems;
  this.availableItems = [];
  this.refillAvailableItems();
}

Collection.prototype.refillAvailableItems = function() {
  this.availableItems = this.allItems.slice();
}

Collection.prototype.chooseRandom = function() {
  if (this.availableItems.length === 0) {
    this.refillAvailableItems();
  }

  var randomIndex = Math.floor(Math.random() * this.availableItems.length);
  var randomItem = this.availableItems[randomIndex];
  this.availableItems.splice(randomIndex, 1);
  return randomItem;
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
  document.getElementById('vocab').innerHTML = imageFileName.replace(/.\w{3,}$/, '');
}

function setCaseLabel(caseName) {
  document.getElementById('case').innerHTML = caseName;
}
