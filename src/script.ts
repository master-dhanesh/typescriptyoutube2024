// readonly
// optional ?
// union type |
// Literal Type

type ProductType = {
    readonly id: string | number;
    name: string;
    price: number;
    brand: string;
    discount?: number;
};

let Product1: ProductType = {
    id: "12",
    name: "Mouse",
    price: 2000,
    brand: "logitech",
    discount: 56,
};

// Product1.id = 845;

// console.log(Product1);

// const Pi = 3.14
// Pi = 84

let PI: 3.14 = 3.14;
PI = 3.14;

console.log(PI);
