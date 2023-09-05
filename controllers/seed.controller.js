import User from "../models/User.js";
import Product from "../models/Product.js";
import Client from "../models/Client.js";
import Category from "../models/Category.js";

import { users } from "../data/users.js";
import { clients } from "../data/clients.js";
import { categories } from "../data/categories.js";
import { seedingProducts } from "../data/products.js";


export const seed = async ( req, res ) => {
    await Category.deleteMany();
    await Product.deleteMany();
    await Client.deleteMany();
    await User.deleteMany();
    
    const categoriesSeed = await Category.insertMany(categories);
    await Client.insertMany(clients);
    await User.insertMany(users);
    

    const productsSeeding = seedingProducts(categoriesSeed);
    await Product.insertMany(productsSeeding);

    return res.json({
        message: 'Seed data successfully'
    })
}