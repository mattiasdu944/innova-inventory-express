import {db} from "../config/index.js"
import Category from "../models/Category.js";

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