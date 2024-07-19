"use strict";
// 1. CLASS OBJECT
// class Product {
//     name: string = "Google Pixel";
// }
// const p = new Product();
// console.log(p.name);
// 2. PUBLIC PRIVATE
// class Product {
//     public count: number = 0;
//     private name: string = "Google Pixel";
//     private price: number = 28000;
//     public getProducts(): void {
//         console.log(this.name, this.price);
//         this.setcount();
//     }
//     private setcount(): void {
//         this.count++;
//     }
// }
// const p = new Product();
// p.count = 890;
// console.log(p.count);
// p.getProducts();
// console.log(p.count);
//3. CONSTRUCTOR GETTER SETTERS
// class Product {
//     public count: number = 0;
//     constructor(private name: string, private price: number) {
//         this.name = name;
//         this.price = price;
//         this.count++;
//     }
//     get getProduct(): { name: string; price: number } {
//         return { name: this.name, price: this.price };
//     }
//     // public setname(name: string) {
//     //     this.name = name;
//     // }
//     set setname(name: string) {
//         this.name = name;
//     }
// }
// const p1 = new Product("Keyboard", 12300);
// const p2 = new Product("Moniter", 20000);
// console.log(p1.getProduct);
// p1.setname("mobile");
// p1.setname = "mobile";
// console.log(p1.getProduct);
// 4. INHERITENCE PROTECTED
// class Product {
//     constructor(protected name: string) {
//         this.name = name;
//     }
// }
// class ProductDetials extends Product {
//     constructor(name: string, private price: number) {
//         super(name);
//         this.price = price;
//     }
//     get getname(): string {
//         return this.name;
//     }
//     get getprice(): number {
//         return this.price;
//     }
// }
// const p = new ProductDetials("Laptop", 120000);
// console.log(p.getname);
// console.log(p.getprice);
// 5. INTERFACE POLYMORPHISM
// interface Human {
//     features: () => {};
// }
// class Male implements Human {
//     features() {
//         return "Can not Give Birth";
//     }
// }
// class Female implements Human {
//     features() {
//         return "Can Give Birth";
//     }
// }
// function getData(o: Male | Female) {
//     console.log(o.features());
// }
// const m = new Male();
// // m.features()
// getData(m);
// getData(new Female());
// 6.ABSTRACT CLASS
class Product {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class Cosmetic extends Product {
    getDetails() {
        return this.name;
    }
}
const c = new Cosmetic("Lotion");
console.log(c.getDetails());
