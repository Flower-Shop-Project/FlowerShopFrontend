export interface StoreItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    images: Array<string>;
    price: number;
    type: string;
    flowerTypes: Array<string>;
    apointments: Array<string>;
}

export const MOCKPRODUCTS: StoreItem[] = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        imageUrl: "https://picsum.photos/300/300"
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        imageUrl: "https://picsum.photos/300/300"
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        imageUrl: "https://picsum.photos/300/300"
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
        imageUrl: "https://picsum.photos/300/300"
    },
    {
        id: 5,
        name: "Product 5",
        price: 500,
        imageUrl: "https://picsum.photos/300/300"
    },
    {
        id: 6,
        name: "Product 6",
        price: 600,
        imageUrl: "https://picsum.photos/300/300"
    },
    {
        id: 7,
        name: "Product 7",
        price: 700,
        imageUrl: "https://picsum.photos/300/300"
    },
    {
        id: 8,
        name: "Product 8",
        price: 800,
        imageUrl: "https://picsum.photos/300/300"
    },
    {
        id: 9,
        name: "Product 9",
        price: 900,
        imageUrl: "https://picsum.photos/300/300"
    },
]
