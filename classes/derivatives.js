const { Basics } = require('../classes/basics');
const { Generals } = require('../classes/generals');
const lists = require('../common/globals');

class Derivatives {

  constructor() { }

  getRandomPhoneNumber(count = 1, prop = "") {

    let ret;
    let res = "";
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
      let rnd1 = new Basics().getRandomNumber(1, 999, 0, 1, "");
      let rnd2 = new Basics().getRandomNumber(1, 99, 0, 1, "");
      let rnd3 = new Basics().getRandomNumber(1000, 9999, 0, 1, "");
      let rnd4 = new Basics().getRandomNumber(100, 999, 0, 1, "");
      res = `+${rnd1} (${rnd2}) ${rnd3} ${rnd4}`;
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

  getRandomCreditCardNumber(count = 1, prop = "") {

    let ret;
    let res = "";
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
      let rnd1 = new Basics().getRandomNumber(1000, 9999, 0, 1, "");
      let rnd2 = new Basics().getRandomNumber(1000, 9999, 0, 1, "");
      let rnd3 = new Basics().getRandomNumber(1000, 9999, 0, 1, "");
      let rnd4 = new Basics().getRandomNumber(1000, 9999, 0, 1, "");
      res = `${rnd1} ${rnd2} ${rnd3} ${rnd4}`;
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

  getRandomDate(count = 1, prop = "") {

    let ret;
    let res = "";
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
      let rnd1 = new Basics().getRandomNumber(2000, 2030, 0, 1, "");
      let rnd2 = new Basics().getRandomNumber(1, 12, 0, 1, "");
      let rnd3 = new Basics().getRandomNumber(1, 30, 0, 1, "");
      rnd2 = rnd2 < 10 ? "0" + rnd2 : rnd2;
      rnd3 = rnd3 < 10 ? "0" + rnd3 : rnd3;
      res = `${rnd1}-${rnd2}-${rnd3}`;
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

  getRandomDateTime(count = 1, prop = "") {

    let ret;
    let res = "";
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
      let rnd1 = new Basics().getRandomNumber(2000, 2030, 0, 1, "");
      let rnd2 = new Basics().getRandomNumber(1, 12, 0, 1, "");
      let rnd3 = new Basics().getRandomNumber(1, 30, 0, 1, "");
      let rnd4 = new Basics().getRandomNumber(0, 23, 0, 1, "");
      let rnd5 = new Basics().getRandomNumber(0, 59, 0, 1, "");
      let rnd6 = new Basics().getRandomNumber(0, 59, 0, 1, "");
      rnd2 = rnd2 < 10 ? "0" + rnd2 : rnd2;
      rnd3 = rnd3 < 10 ? "0" + rnd3 : rnd3;
      rnd4 = rnd4 < 10 ? "0" + rnd4 : rnd4;
      rnd5 = rnd5 < 10 ? "0" + rnd5 : rnd5;
      rnd6 = rnd6 < 10 ? "0" + rnd6 : rnd6;
      res = `${rnd1}-${rnd2}-${rnd3} ${rnd4}:${rnd5}:${rnd6}`;
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

  getRandomTime(count = 1, prop = "") {

    let ret;
    let res = "";
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
      let rnd1 = new Basics().getRandomNumber(0, 23, 0, 1, "");
      let rnd2 = new Basics().getRandomNumber(0, 59, 0, 1, "");
      let rnd3 = new Basics().getRandomNumber(0, 59, 0, 1, "");
      rnd1 = rnd1 < 10 ? "0" + rnd1 : rnd1;
      rnd2 = rnd2 < 10 ? "0" + rnd2 : rnd2;
      rnd3 = rnd3 < 10 ? "0" + rnd3 : rnd3;
      res = `${rnd1}:${rnd2}:${rnd3}`;
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

  getRandomFullName(count = 1, prop = "") {

    let ret;
    let res = "";
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
      let fn = new Generals().getRandom(lists.firstNames);
      let ln = new Generals().getRandom(lists.lastNames);
      res = `${fn} ${ln}`;
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

  getRandomEmail(count = 1, prop = "") {

    let ret;
    let res = "";
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
      const domains = ["example", "domain", "google", "telecom", "microsoft", "mongo", "network"];
      const extensions = ["com", "eu", "hr", "ba", "ru", "fr", "gr", "at", "de", "si", "rs", "es", "net"];
      let rnd1 = new Basics().getRandomNumber(0, domains.length - 1);
      let rnd2 = new Basics().getRandomNumber(0, extensions.length - 1);
      let randomDomain = domains[rnd1];
      let randomExtension = extensions[rnd2];
      let fn = new Generals().getRandom(lists.firstNames);
      let ln = new Generals().getRandom(lists.lastNames);
      fn = fn.toLowerCase();
      ln = ln.toLowerCase();
      res = `${fn}.${ln}@${randomDomain}.${randomExtension}`;
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

  getRandomGoogleMapsCoordinates(count = 1, prop = "") {

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
      let lat = new Basics().getRandomNumber(-90, 90, 5);
      let lng = new Basics().getRandomNumber(-180, 180, 5);
      res = { lat: lat, lng: lng };
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

  getRandomStreet(count = 1, prop = "") {

    let ret;
    let res = "";
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
      const streets = ["Street", "Boulevard", "Square", "Avenue"];
      let ln = new Generals().getRandom(lists.lastNames);
      let rnd1 = new Basics().getRandomNumber(0, streets.length - 1);
      let randomStreet = streets[rnd1];
      res = `${ln} ${randomStreet}`;
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

  getRandomStreetNumber(count = 1, prop = "") {

    let ret;
    let res = "";
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
      const streets = ["Street", "Boulevard", "Square", "Avenue"];
      let ln = new Generals().getRandom(lists.lastNames);
      let rnd1 = new Basics().getRandomNumber(0, streets.length - 1);
      let rnd2 = new Basics().getRandomNumber(1, 999);
      let randomStreet = streets[rnd1];
      res = `${ln} ${randomStreet} ${rnd2}`;
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

  getRandomStreetNumberCity(count = 1, prop = "") {

    let ret;
    let res = "";
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
      const streets = ["Street", "Boulevard", "Square", "Avenue"];
      let ln = new Generals().getRandom(lists.lastNames);
      let city = new Generals().getRandom(lists.cities);
      let rnd1 = new Basics().getRandomNumber(0, streets.length - 1);
      let rnd2 = new Basics().getRandomNumber(1, 999);
      let randomStreet = streets[rnd1];
      res = `${ln} ${randomStreet} ${rnd2}, ${city}`;
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

  getRandomFullAddress(count = 1, prop = "") {

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
      const streets = ["Street", "Boulevard", "Square", "Avenue"];
      let ln = new Generals().getRandom(lists.lastNames);
      let city = new Generals().getRandom(lists.cities);
      let rnd1 = new Basics().getRandomNumber(0, streets.length - 1);
      let rnd2 = new Basics().getRandomNumber(1, 999);
      let randomStreet = streets[rnd1];
      res = { street: `${ln} ${randomStreet}`, number: rnd2, city: city }
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

}

module.exports = {
  Derivatives
}