(function(exports) {

  const CHOOSERS = {
    tenseName: TENSE_NAME_CHOOSER,
    tenseSignum: TENSE_SIGNUM_CHOOSER,
    verb: null,
    noun1: null,
    noun2: null,
    noun2Signum: null
  };

  function initialize() {
    $.get('/sententiae_images', function(images) {
      Object.keys(images).forEach(function(category) {
        if (VOCAB_CATEGORIES[category]) {
          VOCAB_CATEGORIES[category].nounChooser = new Collection(images[category]);
        }
      });

      setVocabChoosers();
      chooseItemsWithVerb();

      $('#sententiae').show()
      $('#with-verb-button,#with-signa-button').attr('disabled', false);
    });
  }

  function chooseItemsWithVerb() {
    _setVerbText(CHOOSERS.verb.chooseRandom());
    _setTenseText(CHOOSERS.tenseName.chooseRandom());
    _setNounImages(
      CHOOSERS.noun1.chooseRandom(),
      CHOOSERS.noun2.chooseRandom()
    );
  }

  function chooseItemsWithSigna() {
    _setVerbText('');
    _setTenseText(CHOOSERS.tenseSignum.chooseRandom(), true);
    _setNounImages(
      CHOOSERS.noun1.chooseRandom(),
      CHOOSERS.noun2.chooseRandom(),
      CHOOSERS.noun2Signum.chooseRandom()
    );
  }

  function setVocabChoosers() {
    const noun1Category = document.getElementById('noun1-select').value;
    const noun2Category = document.getElementById('noun2-select').value;
    CHOOSERS.noun1 = VOCAB_CATEGORIES[noun1Category].nounChooser;
    CHOOSERS.noun2 = VOCAB_CATEGORIES[noun2Category].nounChooser;
    CHOOSERS.noun2Signum = VOCAB_CATEGORIES[noun2Category].objectSignumChooser;
    CHOOSERS.verb = VOCAB_CATEGORIES[noun2Category].verbChooser;
  }

  function _setVerbText(text) {
    document.getElementById('verb').innerHTML = text;
  }

  function _setTenseText(text, isSignum) {
    if (isSignum) {
      $('#tense').html(text).addClass('u-signum Info-tense--signum');
    } else {
      $('#tense').html(text).removeClass('u-signum Info-tense--signum');
    }
  }

  function _setNounImages(noun1Src, noun2Src, noun2Signum) {
    document.getElementById('noun1').src = noun1Src;
    document.getElementById('noun2').src = noun2Src;

    document.getElementById('noun1-label').innerHTML = _getImageName(noun1Src);
    document.getElementById('noun2-label').innerHTML = _getImageName(noun2Src);

    document.getElementById('noun1-signum').innerHTML = noun2Signum ? SUBJECT_SIGNUM : '';
    document.getElementById('noun2-signum').innerHTML = noun2Signum || '';
  }

  function _getImageName(path) {
    return path.match(/\/([^/]+)\.(png|jpg|gif|svg)/)[1].replace(/-/g, ' ');
  }

  exports.initialize = initialize;
  exports.chooseItemsWithVerb = chooseItemsWithVerb;
  exports.chooseItemsWithSigna = chooseItemsWithSigna;
  exports.setVocabChoosers = setVocabChoosers;
})(this);
