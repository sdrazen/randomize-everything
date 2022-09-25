class Basics {

  constructor() { }

  getRandomNumber(min, max, decimals = 0, count = 1, prop = "") {

    let ret;
    let res = 0;
    let arr = [];

    // Check inputs
    if (typeof count < 1) {
      throw new Error("Count has to be positive.");
    }

    if (typeof prop != "string") {
      throw new Error("Property has to be string.");
    }

    if (min > max) {
      throw new Error("Min has to ge less than max.");
    }

    if (decimals < 0) {
      throw new Error("Decimals cannot be negative.");
    }

    // Ok
    for (let i = 1; i <= count; i++) {

      if (decimals == 0) {
        // No decimals
        res = Math.floor(Math.random() * (max - min + 1) + min);
      } else {
        let temp = Math.random() * (max - min + 1) + min;
        res = Math.floor((temp * Math.pow(10, decimals))) / Math.pow(10, decimals);
      }

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

  getRandomBoolean(count = 1, prop = "") {

    let ret;
    let res = false;
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
      res = Math.floor(Math.random() * 2) == 0 ? false : true;
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
  Basics
}