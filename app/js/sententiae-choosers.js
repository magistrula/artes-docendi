const SUBJECT_SIGNUM = 'a';
const DIR_OBJ_SIGNUM = 's';
const IND_OBJ_SIGNUM = 'h';
const TO_SIGNUM = 's';
const FROM_SIGNUM = 'j';
const IN_SIGNUM = 'k';
const WITH_SIGNUM = 'l';
const ALL_TENSE_NAMES = ['present', 'imperfect', 'future', 'perfect', 'pluperfect', 'future perfect'];
const ALL_TENSE_SYMBOLS = ['q', 'w', 'e', 'i', 'o', 'p'];

const ANIMATE_VERB_CHOOSER = new ItemChooser([
  'servāre', 'salūtāre', 'vidēre', 'timēre', 'reprehendere', 'conspicere', 'audīre', 'custōdīre'
]);

const FOOD_VERB_CHOOSER = new ItemChooser([
  'amāre', 'parāre', 'cupere', 'sūmere', 'emere', 'petere', 'rapere', 'iacere'
]);

const LINKING_VERB_CHOOSER = new ItemChooser([
  'esse'
]);

const TRAVEL_VERB_CHOOSER = new ItemChooser([
  'appropinquāre', 'fugere', 'venīre'
]);

const ADJ_SIGNUM_CHOOSER = new ItemChooser([SUBJECT_SIGNUM]);
const PLACE_OBJECT_SIGNUM_CHOOSER = new ItemChooser([DIR_OBJ_SIGNUM, TO_SIGNUM, FROM_SIGNUM, IN_SIGNUM]);
const PERSON_OBJECT_SIGNUM_CHOOSER = new ItemChooser([DIR_OBJ_SIGNUM, IND_OBJ_SIGNUM, WITH_SIGNUM, FROM_SIGNUM]);
const FOOD_OBJECT_SIGNUM_CHOOSER = new ItemChooser([DIR_OBJ_SIGNUM, WITH_SIGNUM]);
const VEHICLE_OBJECT_SIGNUM_CHOOSER = new ItemChooser([DIR_OBJ_SIGNUM, WITH_SIGNUM, IN_SIGNUM]);

const TENSE_NAME_CHOOSER = new ItemChooser(ALL_TENSE_NAMES);
const TENSE_SIGNUM_CHOOSER = new ItemChooser(ALL_TENSE_SYMBOLS);

const VOCAB_CATEGORIES = {
  affectus: { verbChooser: LINKING_VERB_CHOOSER, objectSignumChooser: ADJ_SIGNUM_CHOOSER },
  animalia: { verbChooser: ANIMATE_VERB_CHOOSER, objectSignumChooser: PERSON_OBJECT_SIGNUM_CHOOSER },
  cibi: { verbChooser: FOOD_VERB_CHOOSER, objectSignumChooser: FOOD_OBJECT_SIGNUM_CHOOSER },
  homines: { verbChooser: ANIMATE_VERB_CHOOSER, objectSignumChooser: PERSON_OBJECT_SIGNUM_CHOOSER },
  loca: { verbChooser: TRAVEL_VERB_CHOOSER, objectSignumChooser: PLACE_OBJECT_SIGNUM_CHOOSER },
  monstra: { verbChooser: ANIMATE_VERB_CHOOSER, objectSignumChooser: PERSON_OBJECT_SIGNUM_CHOOSER },
  vehicula: { verbChooser: TRAVEL_VERB_CHOOSER, objectSignumChooser: VEHICLE_OBJECT_SIGNUM_CHOOSER }
};
