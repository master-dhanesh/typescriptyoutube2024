"use strict";
// Generics
// Generics Type
// Generic Function
// Generic Classes
let products = ["A", "B", "C"];
let marks = [{ name: "A" }, { name: "b" }];
function getData(x) {
    // console.log(x);
    return x;
}
// getData<number>(12);
// getData<string>("hello");
// getData<{ name: string }>({ name: "Keyboard" });
class User {
    constructor() {
        this.users = [];
    }
    get getuser() {
        return this.users;
    }
    set setusers(u) {
        this.users.push(u);
    }
}
const user1 = new User();
user1.setusers = "john doe";
user1.setusers = "json doe";
console.log(user1.getuser);
const user2 = new User();
user2.setusers = 12;
user2.setusers = 15;
console.log(user2.getuser);
