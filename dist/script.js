"use strict";
// Narrowing
// type guard - typeof
// in operator
// instanceOf
function getValue(x) {
    if (typeof x == "number") {
        console.log(x.toFixed(2));
    }
    else if (typeof x == "string") {
        console.log(x.toUpperCase());
    }
}
function human(person) {
    if ("birth" in person) {
        console.log("Person is female");
    }
    else if ("nobirth" in person) {
        console.log("Person is male");
    }
}
// human({ nobirth: "" });
function getData(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleDateString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
getData(new Date());
getData("Hello People");
