const lists = require('./common/globals');
const { Basics } = require('./classes/basics');
const { Generals } = require('./classes/generals');
const { Derivatives } = require('./classes/derivatives');
const { Bundles } = require('./classes/bundles');
const { Structures } = require('./classes/structures');

function basics() {
  let ret = new Basics();
  return ret;
}

function generals() {
  let ret = new Generals();
  return ret;
}

function derivatives() {
  let ret = new Derivatives();
  return ret;
}

function bundles() {
  let ret = new Bundles();
  return ret;
}

function structures() {
  let ret = new Structures();
  return ret;
}

////////
// USAGE
////////

// Basics
// console.log(basics().getRandomBoolean(2, "isadmin"));
// console.log(basics().getRandomNumber(10, 100, 2, 3, ""));

// Generals
// console.log(generals().getRandom(lists.actors));
// console.log(generals().getRandom(lists.animals));
// console.log(generals().getRandom(lists.artists));
// console.log(generals().getRandom(lists.bands));
// console.log(generals().getRandom(lists.books));
// console.log(generals().getRandom(lists.browsers));
// console.log(generals().getRandom(lists.cars));
// console.log(generals().getRandom(lists.cats));
// console.log(generals().getRandom(lists.chemicalElements));
// console.log(generals().getRandom(lists.chessPlayers));
// console.log(generals().getRandom(lists.cities));
// console.log(generals().getRandom(lists.colors));
// console.log(generals().getRandom(lists.continents));
// console.log(generals().getRandom(lists.countries));
// console.log(generals().getRandom(lists.cryptoCurrencies));
// console.log(generals().getRandom(lists.currencies));
// console.log(generals().getRandom(lists.daysOfWeek));
// console.log(generals().getRandom(lists.dinosaurs));
// console.log(generals().getRandom(lists.dogs));
// console.log(generals().getRandom(lists.extensions));
// console.log(generals().getRandom(lists.firstNames));
// console.log(generals().getRandom(lists.foodCategories));
// console.log(generals().getRandom(lists.fruits));
// console.log(generals().getRandom(lists.genders));
// console.log(generals().getRandom(lists.hobbies));
// console.log(generals().getRandom(lists.ingredients));
// console.log(generals().getRandom(lists.instruments));
// console.log(generals().getRandom(lists.itJobTitles));
// console.log(generals().getRandom(lists.itemConditions));
// console.log(generals().getRandom(lists.jobCategories));
// console.log(generals().getRandom(lists.languages));
// console.log(generals().getRandom(lists.lastNames));
// console.log(generals().getRandom(lists.letters));
// console.log(generals().getRandom(lists.mobilePhones));
// console.log(generals().getRandom(lists.monthsOfYear));
// console.log(generals().getRandom(lists.motorcycles));
// console.log(generals().getRandom(lists.mountains));
// console.log(generals().getRandom(lists.movieGenres));
// console.log(generals().getRandom(lists.movies));
// console.log(generals().getRandom(lists.musicGenres));
// console.log(generals().getRandom(lists.oceans));
// console.log(generals().getRandom(lists.os));
// console.log(generals().getRandom(lists.painters));
// console.log(generals().getRandom(lists.paintings));
// console.log(generals().getRandom(lists.philosophers));
// console.log(generals().getRandom(lists.planets));
// console.log(generals().getRandom(lists.programmingLanguages));
// console.log(generals().getRandom(lists.quotesLatin));
// console.log(generals().getRandom(lists.religions));
// console.log(generals().getRandom(lists.schoolGradesLettered));
// console.log(generals().getRandom(lists.schoolGradesNumbered));
// console.log(generals().getRandom(lists.schoolSubjects));
// console.log(generals().getRandom(lists.scientists));
// console.log(generals().getRandom(lists.seasons));
// console.log(generals().getRandom(lists.sizes));
// console.log(generals().getRandom(lists.skillLevels));
// console.log(generals().getRandom(lists.soccerTeams));
// console.log(generals().getRandom(lists.socialMedia));
// console.log(generals().getRandom(lists.sportists));
// console.log(generals().getRandom(lists.sports));
// console.log(generals().getRandom(lists.todos));
// console.log(generals().getRandom(lists.tools));
// console.log(generals().getRandom(lists.vegetables));
// console.log(generals().getRandom(lists.vehicles));
// console.log(generals().getRandom(lists.words));
// console.log(generals().getRandom(lists.writers));
// console.log(generals().getRandom(lists.zodiacSigns));

// Derivatives
// console.log(derivatives().getRandomCreditCardNumber());
// console.log(derivatives().getRandomDate());
// console.log(derivatives().getRandomDateTime());
// console.log(derivatives().getRandomEmail());
// console.log(derivatives().getRandomFilename());
// console.log(derivatives().getRandomFullName());
// console.log(derivatives().getRandomFullAddress());
// console.log(derivatives().getRandomGoogleMapsCoordinates());
// console.log(derivatives().getRandomIpAddress());
// console.log(derivatives().getRandomPhoneNumber());
// console.log(derivatives().getRandomStreet());
// console.log(derivatives().getRandomStreetNumber());
// console.log(derivatives().getRandomStreetNumberCity());
// console.log(derivatives().getRandomTime());
// console.log(derivatives().getRandomUrl());

// Bundles
// console.log(bundles().getRandomUser(2, "users"));
// console.log(bundles().getRandomStudent(2, "students"));
// console.log(bundles().getRandomTodo(2, "todos"));
// console.log(bundles().getRandomCrypto(3, "cryptos"));

// Structures
// let strCourses = `
// {
//   "course": "func:generals().getRandom(lists.schoolSubjects)",
//   "started": "func:derivatives().getRandomDate()",
//   "completed": "func:basics().getRandomBoolean()"
// }
// `
// let str = `
// {
//   "fullname": "func:derivatives().getRandomFullName()",
//   "address": "func:derivatives().getRandomFullAddress()",
//   "location": "func:derivatives().getRandomGoogleMapsCoordinates()",
//   "courses": [${strCourses}, ${strCourses}, ${strCourses}]
// }
// `
// console.log(structures().getRandomObject(str, 2, "data"));

module.exports = {
  lists,
  basics,
  generals,
  derivatives,
  bundles,
  structures
}
