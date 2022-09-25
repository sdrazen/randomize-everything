# Randomize Everything

This npm package enables you to quickly and easily make variety of random mock data for testing your applications or any other similar purpose. It is very flexible and you can produce a whole lot of mock data with just a single line of code.

## Installing

```bash
npm install randomize-everything
```

## Getting started

This package's functionalities can be broken in several sections, from the most basic usage to more complex applications:

- `Basics`: provides basic randomization like random numbers or booleans
- `Generals`: provides random data from lists in many categories
- `Derivatives`: provides random data derived from basic ones
- `Bundles`: provides final objects with prepared properties and random data for each one of them
- `Structures`: provides ability to make your own structures like arrays or objects with random data as values

Every function this package provides can accept several parameters which have a common meaning for each one of them. You can omit them but if you pass those arguments, they have a specific meaning:

- `count`: repeats randomization _count_ times and makes an array instead of returning a single value
- `prop`: makes an object out of the randomization result and provided _prop_ will be its property name

### Basics

- `getRandomNumber`: produces random number between _min_ and _max_, array of random numbers or an object, depending on passed arguments

  - `parameters`: min, max, decimals, count, prop
  - `returns`: number, array or object

- `getRandomBoolean`: produces random boolean value, array of random boolean values or an object, depending on passed arguments

  - `parameters`: count, prop
  - `returns`: boolean, array or object

### Generals

Every function in _Generals_ section accepts arguments _count_ and _prop_ which are optional so they are not shown here for easier readability.

- `getRandom(lists.actors)`: returns random actor, array of actors or an object depending on passed arguments
- `getRandom(lists.artists)`: returns random artist, array of artists or an object depending on passed arguments
- `getRandom(lists.browsers)`: returns random browser, array of browsers or an object depending on passed arguments
- `getRandom(lists.cities)`: returns random city, array of cities or an object depending on passed arguments
- `getRandom(lists.colors)`: returns random color, array of colors or an object depending on passed arguments
- `getRandom(lists.continents)`: returns random continent, array of continents or an object depending on passed arguments
- `getRandom(lists.countries)`: returns random country, array of countries or an object depending on passed arguments
- `getRandom(lists.cryptoCurrencies)`: returns random cryptocurrency, array of cryptocurrencies or an object depending on passed arguments
- `getRandom(lists.currencies)`: returns random currency, array of currencies or an object depending on passed arguments
- `getRandom(lists.daysOfWeek)`: returns random day of week, array of days of week or an object depending on passed arguments
- `getRandom(lists.firstNames)`: returns random first name, array of first names or an object depending on passed arguments
- `getRandom(lists.foodCategories)`: returns random food category, array of food categories or an object depending on passed arguments
- `getRandom(lists.fruits)`: returns random fruit, array of fruits or an object depending on passed arguments
- `getRandom(lists.genders)`: returns random gender, array of genders or an object depending on passed arguments
- `getRandom(lists.hobbies)`: returns random hobby, array of hobbies or an object depending on passed arguments
- `getRandom(lists.itJobTitles)`: returns random IT job title, array of IT job titles or an object depending on passed arguments
- `getRandom(lists.itemConditions)`: returns random item condition, array of item conditions or an object depending on passed arguments
- `getRandom(lists.jobCategories)`: returns random job category, array of job categories or an object depending on passed arguments
- `getRandom(lists.languages)`: returns random language, array of languages or an object depending on passed arguments
- `getRandom(lists.lastNames)`: returns random last name, array of last names or an object depending on passed arguments
- `getRandom(lists.letters)`: returns random letter, array of letters or an object depending on passed arguments
- `getRandom(lists.monthsOfYear)`: returns random month, array of months or an object depending on passed arguments
- `getRandom(lists.mountains)`: returns random mountain, array of mountains or an object depending on passed arguments
- `getRandom(lists.movieGenres)`: returns random movie genre, array of movie genres or an object depending on passed arguments
- `getRandom(lists.musicGenres)`: returns random music genre, array of music genres or an object depending on passed arguments
- `getRandom(lists.oceans)`: returns random oceans, array of oceans or an object depending on passed arguments
- `getRandom(lists.os)`: returns random operating system, array of operating systems or an object depending on passed arguments
- `getRandom(lists.planets)`: returns random planet, array of planets or an object depending on passed arguments
- `getRandom(lists.programmingLanguages)`: returns random programming language, array of programming languages or an object depending on passed arguments
- `getRandom(lists.quotesLatin)`: returns random Latin quote, array of Latin quotes or an object depending on passed arguments
- `getRandom(lists.schoolGradesLettered)`: returns random lettered school grade, array of school grades or an object depending on passed arguments
- `getRandom(lists.schoolGradesNumbered)`: returns random numbered school grade, array of school grades or an object depending on passed arguments
- `getRandom(lists.schoolSubjects)`: returns random school subject, array of school subjects or an object depending on passed arguments
- `getRandom(lists.religions)`: returns random religion, array of religions or an object depending on passed arguments
- `getRandom(lists.sizes)`: returns random size, array of sizes or an object depending on passed arguments
- `getRandom(lists.skillLevels)`: returns random skill level, array of skill levels or an object depending on passed arguments
- `getRandom(lists.todos)`: returns random _todo_, array of _todos_ or an object depending on passed arguments
- `getRandom(lists.vegetables)`: returns random vegetable, array of vegetables or an object depending on passed arguments
- `getRandom(lists.words)`: returns random word, array of words or an object depending on passed arguments
- `getRandom(lists.writers)`: returns random writer, array of writers or an object depending on passed arguments
- `getRandom(lists.zodiacSigns)`: returns random zodiac sign, array of zodiac signs or an object depending on passed arguments

### Derivatives

Every function in _Derivatives_ section accepts arguments _count_ and _prop_ which are optional so they are not shown here for easier readability.

- `getRandomCreditCardNumber()`: returns random credit card number, array of credit card numbers or an object depending on passed arguments
- `getRandomDate()`: returns random date, array of dates or an object depending on passed arguments
- `getRandomDateTime()`: returns random date and time, array of dates and times or an object depending on passed arguments
- `getRandomEmail()`: returns random e-mail, array of e-mails or an object depending on passed arguments
- `getRandomFullName()`: returns random full name, array of full names or an object depending on passed arguments
- `getRandomFullAddress()`: returns random full address, array of full addresses or an object depending on passed arguments
- `getRandomGoogleMapsCoordinates()`: returns random Google Maps coordinates (lat, lng), array of Google Maps coordinates or an object depending on passed arguments
- `getRandomPhoneNumber()`: returns random phone number, array of phone numbers or an object depending on passed arguments
- `getRandomStreet()`: returns random street, array of streets or an object depending on passed arguments
- `getRandomStreetNumber()`: returns random street with number, array of streets with numbers or an object depending on passed arguments
- `getRandomStreetNumberCity()`: returns random street with number and city, array of streets with numbers and city or an object depending on passed arguments
- `getRandomTime()`: returns random time, array of times or an object depending on passed arguments

### Bundles

- `getRandomUser(2, "users")`: returns two objects in an array with predefined properties suitable for some users data as a _users_ object
- `getRandomStudent(4, "students")`: returns four objects in an array with predefined properties suitable for some students data as a _students_ object
- `getRandomTodo(10, "todos")`: returns ten objects in an array with predefined properties suitable for some _todo_ data as a _todos_ object
- `getRandomCrypto(3, "cryptos")`: returns three objects in an array with predefined properties suitable for some crypto data as a _cryptos_ object

### Structures

Unlike previous functionalities which work with predefined data and lists, _Structures_ enable us to create more complex arrays and objects of our own liking and needs. Its usage may seem a little complicated but they are used just like any of the previous functions. The only difference is that this time we prepare values to be randomized as strings and those strings have to start with `"func:"`. All object properties also have to be _stringified_, just like `JSON.stringify()` would do. If we are careful with preparation (i. e. _stringification_), we can create very complex arrays and nested objects with random data. More on that in **Usage** and **Examples**.

- `getRandomObject`: returns array or object of our own structure

  - `parameters`: str, count, prop
  - `returns`: array or object

## Usage

Declare the package and use its functions with appropriate parameters, like so:

```javascript
const re = require("randomize-everything");

// Basics
console.log(re.basics().getRandomBoolean(1, "isadmin"));
console.log(re.basics().getRandomNumber(10, 100, 2, 1, ""));

// Generals
console.log(re.generals().getRandom(re.lists.actors));
console.log(re.generals().getRandom(re.lists.artists));
console.log(re.generals().getRandom(re.lists.browsers));
console.log(re.generals().getRandom(re.lists.cities));
console.log(re.generals().getRandom(re.lists.colors));
console.log(re.generals().getRandom(re.lists.continents));
console.log(re.generals().getRandom(re.lists.countries));
console.log(re.generals().getRandom(re.lists.cryptoCurrencies));
console.log(re.generals().getRandom(re.lists.currencies));
console.log(re.generals().getRandom(re.lists.daysOfWeek));
console.log(re.generals().getRandom(re.lists.firstNames));
console.log(re.generals().getRandom(re.lists.foodCategories));
console.log(re.generals().getRandom(re.lists.fruits));
console.log(re.generals().getRandom(re.lists.genders));
console.log(re.generals().getRandom(re.lists.hobbies));
console.log(re.generals().getRandom(re.lists.itJobTitles));
console.log(re.generals().getRandom(re.lists.itemConditions));
console.log(re.generals().getRandom(re.lists.jobCategories));
console.log(re.generals().getRandom(re.lists.languages));
console.log(re.generals().getRandom(re.lists.lastNames));
console.log(re.generals().getRandom(re.lists.letters));
console.log(re.generals().getRandom(re.lists.monthsOfYear));
console.log(re.generals().getRandom(re.lists.mountains));
console.log(re.generals().getRandom(re.lists.movieGenres));
console.log(re.generals().getRandom(re.lists.musicGenres));
console.log(re.generals().getRandom(re.lists.oceans));
console.log(re.generals().getRandom(re.lists.os));
console.log(re.generals().getRandom(re.lists.planets));
console.log(re.generals().getRandom(re.lists.programmingLanguages));
console.log(re.generals().getRandom(re.lists.quotesLatin));
console.log(re.generals().getRandom(re.lists.schoolGradesLettered));
console.log(re.generals().getRandom(re.lists.schoolGradesNumbered));
console.log(re.generals().getRandom(re.lists.schoolSubjects));
console.log(re.generals().getRandom(re.lists.religions));
console.log(re.generals().getRandom(re.lists.sizes));
console.log(re.generals().getRandom(re.lists.skillLevels));
console.log(re.generals().getRandom(re.lists.todos));
console.log(re.generals().getRandom(re.lists.vegetables));
console.log(re.generals().getRandom(re.lists.words));
console.log(re.generals().getRandom(re.lists.writers));
console.log(re.generals().getRandom(re.lists.zodiacSigns));

// Derivatives
console.log(re.derivatives().getRandomCreditCardNumber());
console.log(re.derivatives().getRandomDate());
console.log(re.derivatives().getRandomDateTime());
console.log(re.derivatives().getRandomEmail());
console.log(re.derivatives().getRandomFullName());
console.log(re.derivatives().getRandomFullAddress());
console.log(re.derivatives().getRandomGoogleMapsCoordinates());
console.log(re.derivatives().getRandomPhoneNumber());
console.log(re.derivatives().getRandomStreet());
console.log(re.derivatives().getRandomStreetNumber());
console.log(re.derivatives().getRandomStreetNumberCity());
console.log(re.derivatives().getRandomTime());

// Bundles
console.log(re.bundles().getRandomUser(2, "users"));
console.log(re.bundles().getRandomStudent(2, "students"));
console.log(re.bundles().getRandomTodo(2, "todos"));
console.log(re.bundles().getRandomCrypto(2, "cryptos"));

// Structures
let str = `
{
  "fullname": "func:derivatives().getRandomFullName()",
  "address": "func:derivatives().getRandomFullAddress()",
  "location": "func:derivatives().getRandomGoogleMapsCoordinates()"
}
`;
console.log(re.structures().getRandomObject(str, 2, "data"));
```

## Examples

### Basics

```javascript
console.log(re.basics().getRandomBoolean());

// true

console.log(re.basics().getRandomBoolean(3));

// [ true, false, true ]

console.log(re.basics().getRandomBoolean(1, "isadmin"));

// { isadmin: false }

console.log(re.basics().getRandomBoolean(2, "isadmin"));

// { isadmin: [ true, false ] }

console.log(re.basics().getRandomNumber(1, 10));

// 7

console.log(re.basics().getRandomNumber(10, 100, 2));

// 57.32

console.log(re.basics().getRandomNumber(10, 100, 2, 3));

// [ 91.14, 93.07, 52.8 ]

console.log(re.basics().getRandomNumber(10, 100, 2, 3, ""));

// [ 91.14, 93.07, 52.8 ]

console.log(re.basics().getRandomNumber(10, 100, 0, 1, "num"));

// { num: 80 }

console.log(re.basics().getRandomNumber(10, 100, 2, 3, "num"));

// { num: [ 49.07, 80.46, 69.22 ] }
```

### Generals

```javascript
console.log(re.generals().getRandom(re.lists.actors));

// Sean Connery

console.log(re.generals().getRandom(re.lists.actors, 3));

// [ 'Megan Fox', 'Robert De Niro', 'Ian McKellen' ]

console.log(re.generals().getRandom(re.lists.actors, 1, "actor"));

// { actor: 'Nicolas Cage' }

console.log(re.generals().getRandom(re.lists.actors, 3, "actors"));

// { actors: [ 'Catherine Zeta - Jones', 'Nicolas Cage', 'Vin Diesel' ] }
```

### Derivatives

```javascript
console.log(re.derivatives().getRandomPhoneNumber());

// +152 (40) 9686 232

console.log(re.derivatives().getRandomPhoneNumber(2));

// [ '+145 (11) 7739 402', '+777 (59) 4752 783' ]

console.log(re.derivatives().getRandomPhoneNumber(1, "phone"));

// { phone: '+926 (58) 1163 301' }

console.log(re.derivatives().getRandomPhoneNumber(3, "phones"));

// { phones: [ '+506 (42) 4274 918', '+316 (11) 2468 291', '+647 (47) 1706 175' ] }
```

### Bundles

```javascript
console.log(re.bundles().getRandomUser());

// {
//   users: {
//     firstname: 'Douglas',
//     lastname: 'Mitchell',
//     phone: '+760 (91) 4949 238',
//     email: 'douglas.mitchell@example.com',
//     address: { street: 'Taylor Street', number: 986, city: 'Tbilisi' },
//     occupation: 'Network engineer',
//     hobbies: [ 'Crosswords', 'Card games', 'Photography', 'Chess' ],
//     languages: [ 'Icelandic', 'Uzbek', 'Italian' ],
//     isregistered: true,
//     visited: [
//       'Malawi',
//       'Uruguay',
//       'Seychelles',
//       'Gabon',
//       'El Salvador',
//       'Andorra',
//       'Cuba',
//       'Palau'
//     ]
//   }
// }

console.log(re.bundles().getRandomStudent(2, "students"));

// {
//   students: [
//     {
//       firstname: 'Alan',
//       lastname: 'Johnson',
//       mainSubject: 'Pre - algebra',
//       otherSubjects: [Array],
//       favouriteWriters: [Array],
//       hasgraduated: false
//     },
//     {
//       firstname: 'Beverly',
//       lastname: 'Torres',
//       mainSubject: 'Algebra',
//       otherSubjects: [Array],
//       favouriteWriters: [Array],
//       hasgraduated: true
//     }
//   ]
// }

console.log(re.bundles().getRandomTodo(2, "todos"));

// {
//   todos: [
//     {
//       subject: 'Find lost keys',
//       created: '2003-04-20 16:23:35',
//       others: [Array],
//       completed: true
//     },
//     {
//       subject: 'Brush teeth',
//       created: '2006-12-30 15:49:37',
//       others: [Array],
//       completed: true
//     }
//   ]
// }

console.log(re.bundles().getRandomCrypto(3, "cryptos"));

// {
//   cryptos: [
//     { asset_id: 'DOT', name: 'Polkadot', price_usd: 4599.7865855206 },
//     { asset_id: 'ETH', name: 'Ethereum', price_usd: 7048.8463438487 },
//     { asset_id: 'DAI', name: 'Dai', price_usd: 5130.0346719575 }
//   ]
// }
```

### Structures

```javascript
let str = `
{
  "fullname": "func:derivatives().getRandomFullName()",
  "address": "func:derivatives().getRandomFullAddress()",
  "location": "func:derivatives().getRandomGoogleMapsCoordinates()"
}
`;

console.log(re.structures().getRandomObject(str, 2, "data"));

// {
//   "data": [
//     {
//       "fullname": "Philip Gonzalez",
//       "address": {
//         "street": "Baker Square",
//         "number": 211,
//         "city": "Kampala"
//       },
//       "location": {
//         "lat": 57.87272,
//         "lng": 46.46332
//       }
//     },
//     {
//       "fullname": "Carolyn Moore",
//       "address": {
//         "street": "Johnson Street",
//         "number": 63,
//         "city": "Bishkek"
//       },
//       "location": {
//         "lat": -3.67129,
//         "lng": 100.71773
//       }
//     }
//   ]
// }
```

Let's say we would now like to add some more custom data to our previous object. We want to add to each person an array of courses taken by that person with some details about each course (that would be an array of objects). Let's add three courses for each person:

```javascript
let strCourses = `
{
  "course": "func:generals().getRandom(lists.schoolSubjects)",
  "started": "func:derivatives().getRandomDate()",
  "completed": "func:basics().getRandomBoolean()"
}
`;

let courses = JSON.stringify(re.structures().getRandomObject(strCourses, 3));

let str = `
{
  "fullname": "func:derivatives().getRandomFullName()",
  "address": "func:derivatives().getRandomFullAddress()",
  "location": "func:derivatives().getRandomGoogleMapsCoordinates()",
  "courses": ${courses}
}
`;

console.log(re.structures().getRandomObject(str, 2, "data"));

// {
//   "data": [
//     {
//       "fullname": "Sara Perez",
//       "address": {
//         "street": "Jones Street",
//         "number": 4,
//         "city": "Pristina"
//       },
//       "location": {
//         "lat": -3.7104,
//         "lng": -64.79701
//       },
//       "courses": [
//         {
//           "course": "Resource Program",
//           "started": "2026-02-11",
//           "completed": true
//         },
//         {
//           "course": "U.S.History and Government",
//           "started": "2026-11-29",
//           "completed": false
//         },
//         {
//           "course": "Occupational Therapy",
//           "started": "2001-09-28",
//           "completed": false
//         }
//       ]
//     },
//     {
//       "fullname": "Peter Jones",
//       "address": {
//         "street": "Robinson Boulevard",
//         "number": 929,
//         "city": "Addis Ababa"
//       },
//       "location": {
//         "lat": 63.79121,
//         "lng": 84.13548
//       },
//       "courses": [
//         {
//           "course": "Resource Program",
//           "started": "2026-02-11",
//           "completed": true
//         },
//         {
//           "course": "U.S.History and Government",
//           "started": "2026-11-29",
//           "completed": false
//         },
//         {
//           "course": "Occupational Therapy",
//           "started": "2001-09-28",
//           "completed": false
//         }
//       ]
//     }
//   ]
// }
```

Instead of an array we also could have added a nested object the same way. Possibilities are endless here. As long we are very careful with _stringification_ before calling `re.structures().getRandomObject()`, we are good to go. Also, don't forget to add the `func:` prefix for every value to be randomized. If you get an error saying something like "_Unexpected token at position XXX_", that's the strongest sign that your `str` argument is not prepared careful enough before passing it to the `re.structures().getRandomObject()` function.
