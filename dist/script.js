"use strict";
// Function
// Parameter Types
// Return Types (void and Never)
// function greet() {
//     // console.log("hello");
//     return "hello";
// }
// let x = greet();
// console.log(x);
// function dets(username: string, age: number): string {
//     console.log(username, age);
//     return "ok";
// }
// let x: string = dets("john", 12);
// console.log(x);
// function dbStore(port: number, host: string): void {
//     console.log(port, host, "Saved in Database");
// }
// dbStore(3000, "locahost");
function errorHandler(msg) {
    // ksdjfo
    throw new Error(msg);
}
errorHandler("kuch bhi error ");
