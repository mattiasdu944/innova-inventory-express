
import Category from "../models/Category.js";
import { createSlug } from "../utils/create-slug.js";

const findAll = async () => {
    const categories = await Category.find().select('-__v');
    return categories;
}

const create = async (category) => {
    const newCategory = await Category.create(category);
    await newCategory.save();
    return newCategory;
}

const update = async (category, categoryUpdate) => {
    category.name = categoryUpdate.name || category.name;
    category.image = categoryUpdate.image || category.image;
    category.description = categoryUpdate.description || category.description;
    category.slug = categoryUpdate.name ?  createSlug(categoryUpdate.name) : category.slug;
    
    await category.save();
    return category;
}

const remove = async (category) => {
    await category.deleteOne(); 
};

export default {
    findAll,
    create,
    update,
    remove
};