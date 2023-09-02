import {db} from "../config/index.js"
import Category from "../models/Category.js";
import { createSlug } from "../utils/create-slug.js";

export const getCategories = async () => {
    //
    const categories = await Category.find().select('-__v');
    //
    return categories;
}



export const createCategory = async (category) => {
    //
    const newCategory = await Category.create(category);
    await newCategory.save();
    //
    console.log(newCategory);
    return newCategory;
}

export const updateCategory = async (category, categoryUpdate) => {
    //
    
    category.name = categoryUpdate.name || category.name;
    category.image = categoryUpdate.image || category.image;
    category.description = categoryUpdate.description || category.description;
    category.slug = categoryUpdate.name ?  createSlug(categoryUpdate.name) : category.slug;

    await category.save();
    //
    return category;
}

export const deleteCategory = async (category) => {
    try {
        //
        await category.deleteOne();
        //
        
    } catch (error) {
        console.log(error);
    } 
};