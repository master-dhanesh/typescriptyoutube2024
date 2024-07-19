// Generics
// Generics Type
// Generic Function
// Generic Classes

type T = { name: string };
let products: Array<string> = ["A", "B", "C"];
let marks: Array<T> = [{ name: "A" }, { name: "b" }];

function getData<T>(x: T): T {
    // console.log(x);
    return x;
}
// getData<number>(12);
// getData<string>("hello");
// getData<{ name: string }>({ name: "Keyboard" });

class User<T> {
    private users: T[] = [];

    get getuser(): T[] {
        return this.users;
    }

    set setusers(u: T) {
        this.users.push(u);
    }
}

const user1 = new User<string>();
user1.setusers = "john doe";
user1.setusers = "json doe";
console.log(user1.getuser);

const user2 = new User<number>();
user2.setusers = 12;
user2.setusers = 15;
console.log(user2.getuser);
