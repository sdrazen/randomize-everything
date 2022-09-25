const { Basics } = require('../classes/basics');
require('../common/globals');

class Generals {

  constructor() { }

  getRandom(list = daysOfWeek, count = 1, prop = "") {

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

    // Ok
    let retry = 0;
    for (let i = 1; i <= count; i++) {
      let randomNumber = new Basics().getRandomNumber(0, list.length - 1);
      res = list[randomNumber];
      if (arr.indexOf(res) === -1) {
        arr.push(res);
      } else {
        if (retry <= 5) {
          i--;
          retry++;
        }
      }
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
  Generals
}