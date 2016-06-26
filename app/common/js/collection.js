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
