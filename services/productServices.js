import { db } from "../config/index.js"
import Product from "../models/Product.js"
import { createSlug } from "../utils/create-slug.js";

export const getProducts = async () => {
    
    const products = await Product.find()
        .select('-__v')
        .populate('category', '-__v');


    return products;
}

export const createProduct = async (product) => {
    console.log(product);
    const newProduct = new Product(product);
    //
    await newProduct.save();
    //
    return newProduct;
}

export const getProduct = async (slug) => {
    //
    const product = await Product.find({ slug }).select('-__v').populate('category', '-__v');
    //

    return product[0];
}

export const deleteOneProduct = async (slug) => {
    try {
        //
        await Product.deleteOne({ slug } )
        //
        
    } catch (error) {
        console.log(error);
    } 
}

export const updateProduct = async ( product, productUpdate ) => {
    //
    
    product.name = productUpdate.name || product.name;
    product.price = productUpdate.price || product.price;
    product.stock = productUpdate.stock || product.stock;
    product.category = productUpdate.category || product.category;
    product.images = productUpdate.images || product.images;
    product.description = productUpdate.description || product.description;
    product.slug = productUpdate.name ?  createSlug(productUpdate.name) : product.slug;

    await product.save();
    //
    return product;
}