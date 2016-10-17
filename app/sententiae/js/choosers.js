const SUBJECT_SIGNUM = 'a';
const DIR_OBJ_SIGNUM = 's';
const IND_OBJ_SIGNUM = 'h';
const TO_SIGNUM = 's';
const FROM_SIGNUM = 'j';
const IN_SIGNUM = 'k';
const WITH_SIGNUM = 'l';
const ALL_TENSE_NAMES = ['present', 'imperfect', 'future', 'perfect', 'pluperfect', 'future perfect'];
const ALL_TENSE_SYMBOLS = ['q', 'w', 'e', 'i', 'o', 'p'];

const ANIMATE_VERB_CHOOSER = new Collection([
  'servare', 'salūtare', 'videre', 'timere', 'reprehendere', 'conspicere', 'audire', 'custodire'
]);

const FOOD_VERB_CHOOSER = new Collection([
  'amare', 'parare', 'cupere', 'sūmere', 'emere', 'petere', 'rapere', 'iacere'
]);

const LINKING_VERB_CHOOSER = new Collection([
  'esse', 'videri', 'fieri'
]);

const TRAVEL_VERB_CHOOSER = new Collection([
  'appropinquare', 'fugere', 'venire'
]);

const ADJ_SIGNUM_CHOOSER = new Collection([SUBJECT_SIGNUM]);
const PLACE_OBJECT_SIGNUM_CHOOSER = new Collection([DIR_OBJ_SIGNUM, TO_SIGNUM, FROM_SIGNUM, IN_SIGNUM]);
const PERSON_OBJECT_SIGNUM_CHOOSER = new Collection([DIR_OBJ_SIGNUM, IND_OBJ_SIGNUM, WITH_SIGNUM, FROM_SIGNUM]);
const FOOD_OBJECT_SIGNUM_CHOOSER = new Collection([DIR_OBJ_SIGNUM, WITH_SIGNUM]);
const VEHICLE_OBJECT_SIGNUM_CHOOSER = new Collection([DIR_OBJ_SIGNUM, WITH_SIGNUM, IN_SIGNUM]);

const TENSE_NAME_CHOOSER = new Collection(ALL_TENSE_NAMES);
const TENSE_SIGNUM_CHOOSER = new Collection(ALL_TENSE_SYMBOLS);

const VOCAB_CATEGORIES = {
  affectus: { verbChooser: LINKING_VERB_CHOOSER, objectSignumChooser: ADJ_SIGNUM_CHOOSER },
  animalia: { verbChooser: ANIMATE_VERB_CHOOSER, objectSignumChooser: PERSON_OBJECT_SIGNUM_CHOOSER },
  cibi: { verbChooser: FOOD_VERB_CHOOSER, objectSignumChooser: FOOD_OBJECT_SIGNUM_CHOOSER },
  homines: { verbChooser: ANIMATE_VERB_CHOOSER, objectSignumChooser: PERSON_OBJECT_SIGNUM_CHOOSER },
  simpsonii: { verbChooser: ANIMATE_VERB_CHOOSER, objectSignumChooser: PERSON_OBJECT_SIGNUM_CHOOSER },
  loca: { verbChooser: TRAVEL_VERB_CHOOSER, objectSignumChooser: PLACE_OBJECT_SIGNUM_CHOOSER },
  monstra: { verbChooser: ANIMATE_VERB_CHOOSER, objectSignumChooser: PERSON_OBJECT_SIGNUM_CHOOSER },
  vehicula: { verbChooser: TRAVEL_VERB_CHOOSER, objectSignumChooser: VEHICLE_OBJECT_SIGNUM_CHOOSER }
};
