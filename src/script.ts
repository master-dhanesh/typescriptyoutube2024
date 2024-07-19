// Interface
// Types and Interface

interface Product {
    name: string;
    brand: string;
    price: number;
    dets: () => string;
}

interface Product {
    stock: number;
    review: string;
}

const p1: Product = {
    name: "Pixel 4a",
    brand: "Google",
    price: 28000,
    dets: () => "product Details",
    stock: 12,
    review: "any review",
};
console.log(p1);

interface ProductDetails extends Product {
    readonly id: number | string;
    discount?: number;
}

const p2: ProductDetails = {
    id: 173,
    name: "Pixel 4a",
    brand: "Google",
    price: 28000,
    dets: () => "product Details",
    stock: 12,
    review: "any review",
    discount: 34,
};
console.log(p2);
