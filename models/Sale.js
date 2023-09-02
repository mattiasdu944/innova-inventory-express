import { Schema, model } from "mongoose";
import Client from "./Client.js";
import Product from "./Product.js";

const saleSchema = Schema({
    total:      { type: Number, required: true },
    client:     { type: Schema.Types.ObjectId, ref: Client},
    details:    [{
        product: { type: Schema.Types.ObjectId, ref: Product },
        amount:  { type: Number, required: true },
    }],
}, {
    timestamps: true
})

const Sale = model('Sale', saleSchema);
export default Sale;