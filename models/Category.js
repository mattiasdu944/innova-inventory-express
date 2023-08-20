import { Schema, model } from "mongoose";

const categorySchema = Schema({
    name:           { type: String, required: true, trim: true },
    slug:           { type: String, trim: true, lowercase: true },
    description:    { type: String, required: true, trim: true },
    image:          { type: String, trim: true, default: '' }
})

const Category = model('Category', categorySchema);
export default Category;