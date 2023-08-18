import {db} from "../config/index.js"
import Category from "../models/Category.js";
import { createSlug } from "../utils/create-slug.js";

export const getCategories = async () => {
    await db.connect();
    const categories = await Category.find().select('-__v');
    await db.disconnect();
    return categories;
}



export const createCategory = async (category) => {
    await db.connect();
    const newCategory = await Category.create(category);
    await newCategory.save();
    await db.disconnect();
    console.log(newCategory);
    return newCategory;
}

export const updateCategory = async (category, categoryUpdate) => {
    await db.connect();
    
    category.name = categoryUpdate.name || category.name;
    category.image = categoryUpdate.image || category.image;
    category.description = categoryUpdate.description || category.description;
    category.slug = categoryUpdate.name ?  createSlug(categoryUpdate.name) : category.slug;

    await category.save();
    await db.disconnect();
    return category;
}