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

export const createProduct = async (product) => {
    console.log(product);
    const newProduct = new Product(product);
    await db.connect();
    await newProduct.save();
    await db.disconnect();
    return newProduct;
}

export const getProduct = async (slug) => {
    await db.connect();
    const product = await Product.find({ slug }).select('-__v')
    await db.disconnect();

    return product[0];
}

export const deleteOneProduct = async (slug) => {
    try {
        await db.connect();
        await Product.deleteOne({ slug } )
        await db.disconnect();
        
    } catch (error) {
        console.log(error);
    } 
}