import { Schema, model } from "mongoose";
import Client from "./Client.js";
import Product from "./Product.js";
import Category from "./Category.js";

const orderSchema = Schema({
    total :     { type: Number, required: true },
    client:     { type: Schema.Types.ObjectId, ref: Client},
    orderItems: [{
        _id         : { type: Schema.Types.ObjectId, ref: Product, required: true },
        name        : { type: String, required: true },
        slug        : { type: String, required: true, trim: true, lowercase: true },
        stock       : { type: Number, required: true, min: 0},
        quantity    : { type: Number, required: true, trim: true },
        price       : { type: Number, required: true }
    }]
}, {
    timestamps: true
})

const Order = model('Order', orderSchema);
export default Order;