import Product from "../models/Product.js"
import { createSlug } from "../utils/create-slug.js";

const findAll = async () => {
    
    const products = await Product.find()
        .select('-__v')
        .populate('category', '-__v');

    return products;
}

const create = async (product) => {
    const newProduct = new Product(product);
    await newProduct.save();

    return newProduct;
}

const findOneBySlug = async (slug) => {
    const product = await Product.find({ slug }).select('-__v').populate('category', '-__v');
    return product[0];
}

const remove = async (slug) => {
    await Product.deleteOne({ slug } )       
}

const update = async ( product, productUpdate ) => {
    
    product.name = productUpdate.name || product.name;
    product.price = productUpdate.price || product.price;
    product.stock = productUpdate.stock || product.stock;
    product.category = productUpdate.category || product.category;
    product.images = productUpdate.images || product.images;
    product.description = productUpdate.description || product.description;
    product.slug = productUpdate.name ?  createSlug(productUpdate.name) : product.slug;

    await product.save();
    return product;
}

export default {
    findAll,
    findOneBySlug,
    create,
    update,
    remove
};