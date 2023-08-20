import { Schema, model } from "mongoose";

const productSchema = Schema({
    name:           { type: String, required: true, trim: true },
    slug:           { type: String, trim: true, lowercase: true },
    description:    { type: String, required: true, trim: true },
    image:          { type: String, trim: true, default: '' },
    price:          { type: String, trim: true, default: '' },
    stock:          { type: Number, default: 0, required: true},
    category:       { type: Schema.Types.ObjectId, ref: 'Category' },
})

const Product = model('Product', productSchema);
export default Product;