const CHOOSERS = {
  tenseName: TENSE_NAME_CHOOSER,
  tenseSignum: TENSE_SIGNUM_CHOOSER,
  verb: null,
  noun1: null,
  noun2: null,
  noun2Signum: null
};

function initialize() {
  $.get('/sententiae_images', (images) => {
    Object.keys(images).forEach((category) => {
      if (VOCAB_CHOOSERS[category]) {
        VOCAB_CHOOSERS[category].nounChooser = new ItemChooser(images[category]);
      }
    });

    setVocabChoosers();
    chooseItemsWithVerb();

    $('#sententiae').show()
    $('#with-verb-button,#with-signa-button').attr('disabled', false);
  });
}

function setVocabChoosers() {
  const noun1Category = document.getElementById('noun1-select').value;
  const noun2Category = document.getElementById('noun2-select').value;
  CHOOSERS.noun1 = VOCAB_CHOOSERS[noun1Category].nounChooser;
  CHOOSERS.noun2 = VOCAB_CHOOSERS[noun2Category].nounChooser;
  CHOOSERS.noun2Signum = VOCAB_CHOOSERS[noun2Category].objectSignumChooser;
  CHOOSERS.verb = VOCAB_CHOOSERS[noun2Category].verbChooser;
}

function chooseItemsWithVerb() {
  _setVerbText(CHOOSERS.verb.chooseItem());
  _setTenseText({
    text: CHOOSERS.tenseName.chooseItem()
  });
  _setNounImages({
    noun1Src: CHOOSERS.noun1.chooseItem(),
    noun2Src: CHOOSERS.noun2.chooseItem()
  });
}

function chooseItemsWithSigna() {
  _setVerbText('');
  _setTenseText({
    text: CHOOSERS.tenseSignum.chooseItem(),
    isSignum: true
  });
  _setNounImages({
    noun1Src: CHOOSERS.noun1.chooseItem(),
    noun2Src: CHOOSERS.noun2.chooseItem(),
    noun2Signum: CHOOSERS.noun2Signum.chooseItem()
  });
}

function _setVerbText(text) {
  document.getElementById('verb').innerHTML = text;
}

function _setTenseText({ text, isSignum }) {
  if (isSignum) {
    $('#tense').html(text).addClass('u-signum u-signum-xl');
  } else {
    $('#tense').html(text).removeClass('u-signum u-signum-xl');
  }
}

function _setNounImages({ noun1Src, noun2Src, noun2Signum }) {
  document.getElementById('noun1').src = noun1Src;
  document.getElementById('noun2').src = noun2Src;

  document.getElementById('noun1-label').innerHTML = _getImageName(noun1Src);
  document.getElementById('noun2-label').innerHTML = _getImageName(noun2Src);

  document.getElementById('noun1-signum').innerHTML = noun2Signum ? SUBJECT_SIGNUM : '';
  document.getElementById('noun2-signum').innerHTML = noun2Signum || '';
}

function _getImageName(path) {
  return path.match(/\/([^/]+)\.png/)[1].replace(/-/g, ' ');
}
