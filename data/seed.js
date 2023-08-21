import dotenv from "dotenv";
import { db } from "../config/index.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";

import { categories } from "./categories.js";
import { seedingProducts } from "./products.js";

dotenv.config();
const command = process.argv[2];

async function seed(){
    await db.connect();

    await Category.deleteMany();
    await Product.deleteMany();
    
    const categoriesSeed = await Category.insertMany(categories)

    const productsSeeding = seedingProducts(categoriesSeed);
    await Product.insertMany(productsSeeding);
    
    await db.disconnect();
}


async function clear(){
    await db.connect();
    await Category.deleteMany();
    await Product.deleteMany();
    await db.disconnect();
}
switch (command) {
    case '--seed':
        seed();
        break;
    case '--clear':
        clear();
        break;
}