const { Basics } = require('../classes/basics');
const { Generals } = require('../classes/generals');
const { Derivatives } = require('./derivatives');
const lists = require('../common/globals');

class Bundles {

  constructor() { }

  getRandomUser(count = 1, prop = "users") {

    let ret;
    let res = {};
    let arr = [];

    // Check inputs
    if (typeof count < 1) {
      throw new Error("Count has to be positive.");
    }

    if (typeof prop != "string") {
      throw new Error("Property has to be string.");
    }

    // Ok
    for (let i = 1; i <= count; i++) {
      let hobbiesCount = new Basics().getRandomNumber(2, 5);
      let languagesCount = new Basics().getRandomNumber(2, 5);
      let visitedCount = new Basics().getRandomNumber(2, 10);
      let firstName = new Generals().getRandom(lists.firstNames);
      let lastName = new Generals().getRandom(lists.lastNames);
      let phone = new Derivatives().getRandomPhoneNumber();
      let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
      let address = new Derivatives().getRandomFullAddress();
      let occupation = new Generals().getRandom(lists.itJobTitles);
      let hobbies = new Generals().getRandom(lists.hobbies, hobbiesCount);
      let languages = new Generals().getRandom(lists.languages, languagesCount);
      let isregistered = new Basics().getRandomBoolean();
      let visited = new Generals().getRandom(lists.countries, visitedCount);
      hobbies = this.removeDups(hobbies);
      languages = this.removeDups(languages);
      visited = this.removeDups(visited);
      res = { firstname: firstName, lastname: lastName, phone: phone, email: email, address: address, occupation: occupation, hobbies: hobbies, languages: languages, isregistered: isregistered, visited: visited };
      arr.push(res);
    }

    if (prop == "") {
      // No property
      ret = count == 1 ? arr[0] : arr;
    } else {
      // Property
      let arrStringified = JSON.stringify(count == 1 ? arr[0] : arr);
      let str = "{" + `"${prop}"` + ": " + `${arrStringified}` + "}";
      ret = JSON.parse(str);
    }

    return ret;

  }

  getRandomStudent(count = 1, prop = "students") {

    let ret;
    let res = {};
    let arr = [];

    // Check inputs
    if (typeof count < 1) {
      throw new Error("Count has to be positive.");
    }

    if (typeof prop != "string") {
      throw new Error("Property has to be string.");
    }

    // Ok
    for (let i = 1; i <= count; i++) {
      let otherSubjectsCount = new Basics().getRandomNumber(4, 7);
      let favouriteWritersCount = new Basics().getRandomNumber(4, 7);
      let firstName = new Generals().getRandom(lists.firstNames);
      let lastName = new Generals().getRandom(lists.lastNames);
      let mainSubject = new Generals().getRandom(lists.schoolSubjects);
      let otherSubjects = new Generals().getRandom(lists.schoolSubjects, otherSubjectsCount);
      let favouriteWriters = new Generals().getRandom(lists.writers, favouriteWritersCount);
      let hasgraduated = new Basics().getRandomBoolean();
      otherSubjects = this.removeDups(otherSubjects);
      favouriteWriters = this.removeDups(favouriteWriters);
      res = { firstname: firstName, lastname: lastName, mainSubject: mainSubject, otherSubjects: otherSubjects, favouriteWriters: favouriteWriters, hasgraduated: hasgraduated };
      arr.push(res);
    }

    if (prop == "") {
      // No property
      ret = count == 1 ? arr[0] : arr;
    } else {
      // Property
      let arrStringified = JSON.stringify(count == 1 ? arr[0] : arr);
      let str = "{" + `"${prop}"` + ": " + `${arrStringified}` + "}";
      ret = JSON.parse(str);
    }

    return ret;

  }

  getRandomTodo(count = 1, prop = "todos") {

    let ret;
    let res = {};
    let arr = [];

    // Check inputs
    if (typeof count < 1) {
      throw new Error("Count has to be positive.");
    }

    if (typeof prop != "string") {
      throw new Error("Property has to be string.");
    }

    // Ok
    for (let i = 1; i <= count; i++) {
      let othersCount = new Basics().getRandomNumber(4, 7);
      let subject = new Generals().getRandom(lists.todos);
      let created = new Derivatives().getRandomDateTime();
      let others = new Generals().getRandom(lists.todos, othersCount);
      let completed = new Basics().getRandomBoolean();
      others = this.removeDups(others);
      res = { subject: subject, created: created, others: others, completed: completed };
      arr.push(res);
    }

    if (prop == "") {
      // No property
      ret = count == 1 ? arr[0] : arr;
    } else {
      // Property
      let arrStringified = JSON.stringify(count == 1 ? arr[0] : arr);
      let str = "{" + `"${prop}"` + ": " + `${arrStringified}` + "}";
      ret = JSON.parse(str);
    }

    return ret;

  }

  getRandomCrypto(count = 1, prop = "cryptos") {

    let ret;
    let res = {};
    let arr = [];

    // Check inputs
    if (typeof count < 1) {
      throw new Error("Count has to be positive.");
    }

    if (typeof prop != "string") {
      throw new Error("Property has to be string.");
    }

    // Ok
    for (let i = 1; i <= count; i++) {
      let asset = new Generals().getRandom(lists.cryptoCurrencies);
      let asset_id = asset.slice(asset.indexOf("(") + 1, asset.indexOf(")"));
      let name = asset.slice(0, asset.indexOf(" ("));
      let price_usd = new Basics().getRandomNumber(100, 9999, 10);
      res = { asset_id: asset_id, name: name, price_usd: price_usd };
      arr.push(res);
    }

    if (prop == "") {
      // No property
      ret = count == 1 ? arr[0] : arr;
    } else {
      // Property
      let arrStringified = JSON.stringify(count == 1 ? arr[0] : arr);
      let str = "{" + `"${prop}"` + ": " + `${arrStringified}` + "}";
      ret = JSON.parse(str);
    }

    return ret;

  }

  removeDups(arr) {

    let unique = arr.filter((element, index) => {
      return arr.indexOf(element) === index;
    });

    return unique;

  }

}

module.exports = {
  Bundles
}