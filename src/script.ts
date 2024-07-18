// Array
// Tuples -> restrics the length and the index value of an array

let user1 = ["John", 23, true];
let users: string[] = ["John", "Hitesh", "Pradeep"];
let marks: Array<number> = [12, 344, 767, 446]; // number[]
let ids: (string | number)[] = [12, "as4uij", "sdujd", 348];
// console.log(ids);

type DetailType = [string, number, string];
let detail1: [string, number, string] = ["john", 23, "bhopal"];
let detail2: DetailType = ["john", 23, "bhopal"];

detail1.push(45);

console.log(detail1);
console.log(detail2);
