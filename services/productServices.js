import { db } from "../config/index.js"
import Product from "../models/Product.js"

export const getProducts = async () => {
    await db.connect()
    
    const products = await Product.find()
        .select('-__v')
        .populate('category', '-__v');

    await db.disconnect()

    return products;
}