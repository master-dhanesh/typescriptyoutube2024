// Objects
// Type Aliases
// Combine Type Aliases

type ID = number;
let uid: ID = 123;
let nanoid: ID = 123;
let a: string = "45";

type ProfileType = { name: string; age: number; address: string };

const Profile1: ProfileType = {
    name: "John",
    age: 12,
    address: "Delhi",
};

const Profile2: ProfileType = {
    name: "John",
    age: 12,
    address: "Delhi",
};

// console.log(Profile1);
// console.log(Profile2);

const createProfile = (user: ProfileType): void => {
    console.log("user saved in the database");
};
createProfile({ name: "pradeep", age: 12, address: "indore" });

type UserType = ProfileType & {
    isAdmin: boolean;
    status: string;
};

const User1: UserType = {
    name: "Harsh Sen",
    age: 20,
    address: "bhopal",
    isAdmin: true,
    status: "single",
};
console.log(User1);
