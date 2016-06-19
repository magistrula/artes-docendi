var ItemChooser = function(allItems) {
  this.allItems = allItems;
  this.availableItems = [];
};

ItemChooser.prototype.chooseItem = function() {
  if (!this.availableItems.length) {
    this.availableItems = this.allItems.slice();
  }

  const randomIndex = _getRandomIndex(this.availableItems.length);
  return this.availableItems.splice(randomIndex, 1)[0];
}

function _getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}
