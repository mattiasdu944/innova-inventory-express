import { db } from "../config/index.js"
import Product from "../models/Product.js"
import { createSlug } from "../utils/create-slug.js";

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
    const product = await Product.find({ slug }).select('-__v').populate('category', '-__v');
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

export const updateProduct = async ( product, productUpdate ) => {
    await db.connect();
    
    product.name = productUpdate.name || product.name;
    product.price = productUpdate.price || product.price;
    product.stock = productUpdate.stock || product.stock;
    product.category = productUpdate.category || product.category;
    product.images = productUpdate.images || product.images;
    product.description = productUpdate.description || product.description;
    product.slug = productUpdate.name ?  createSlug(productUpdate.name) : product.slug;

    await product.save();
    await db.disconnect();
    return product;
}