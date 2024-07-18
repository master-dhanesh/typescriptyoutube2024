"use strict";
// Enums
// let PI: 3.14 = 3.14;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var city;
(function (city) {
    city["bpl"] = "Bhopal";
    city["ind"] = "indore";
    city["gw"] = "gwalior";
})(city || (city = {}));
var random;
(function (random) {
    random["value"] = "qw";
    random[random["age"] = 34] = "age";
})(random || (random = {}));
console.log(random.age);
