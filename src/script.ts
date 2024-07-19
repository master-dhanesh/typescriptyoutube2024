// Narrowing
// type guard - typeof
// in operator
// instanceOf

function getValue(x: number | string): void {
    if (typeof x == "number") {
        console.log(x.toFixed(2));
    } else if (typeof x == "string") {
        console.log(x.toUpperCase());
    }
}
// getValue(12.3545);
// getValue("hello");

type Male = { nobirth: string };
type Female = { birth: string };
function human(person: Male | Female): void {
    if ("birth" in person) {
        console.log("Person is female");
    } else if ("nobirth" in person) {
        console.log("Person is male");
    }
}
// human({ nobirth: "" });

function getData(x: Date | string): void {
    if (x instanceof Date) {
        console.log(x.toLocaleDateString());
    } else {
        console.log(x.toUpperCase());
    }
}

getData(new Date());
getData("Hello People");
