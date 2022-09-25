const lists = require('../common/globals');
const { Basics } = require('../classes/basics');
const { Generals } = require('../classes/generals');
const { Derivatives } = require('../classes/derivatives');

class Structures {

  constructor() { }

  getRandomObject(str, count = 1, prop = "") {

    let ret;
    let tmp = [];

    // Check inputs
    if (typeof str != "string") {
      throw new Error("Argument 'str' has to be string.");
    }

    if (str == "") {
      throw new Error("Argument 'str' cannot be empty string.");
    }

    if (typeof count < 1) {
      throw new Error("Count has to be positive.");
    }

    if (typeof prop != "string") {
      throw new Error("Property has to be string.");
    }

    // Ok
    for (let k = 1; k <= count; k++) {
      let result = JSON.parse(str, ((key, value) => {
        if (typeof value == "string" && value.startsWith("func:")) {
          value = eval("this." + value.slice(5, value.length));
        }
        return value
      }));
      // Push result
      tmp.push(result);
    }

    if (prop != "") {
      let tmpStringified = JSON.stringify(tmp);
      let str = "{" + `"${prop}"` + ": " + `${tmpStringified}` + "}";
      ret = JSON.parse(str);
    } else {
      count == 1 ? ret = tmp[0] : ret = tmp;
    }

    return ret;

  }

  basics() {
    let ret = new Basics();
    return ret;
  }

  generals() {
    let ret = new Generals();
    return ret;
  }

  derivatives() {
    let ret = new Derivatives();
    return ret;
  }

}

module.exports = {
  Structures
}