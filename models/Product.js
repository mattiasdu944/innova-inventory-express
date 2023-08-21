import { Schema, model } from "mongoose";

const productSchema = Schema({
    name:           { type: String, required: true, trim: true },
    slug:           { type: String, trim: true, lowercase: true },
    description:    { type: String, required: true, trim: true },
    images:         [{ type: String, trim: true, default: '' }],
    price:          { type: String, trim: true, default: 0 },
    stock:          { type: Number, default: 0, required: true},
    category:       { type: Schema.Types.ObjectId, ref: 'Category' },
}, {
    timestamps: true
})

const Product = model('Product', productSchema);
export default Product;