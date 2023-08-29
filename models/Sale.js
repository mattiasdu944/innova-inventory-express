import { Schema, model } from "mongoose";

const saleSchema = Schema({
    total:      { type: Number, required: true },
    details:    [{
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
        amount:  { type: Number, required: true },
    }],  
    client:     { type: Schema.Types.ObjectId, ref: 'Client', required: true },
}, {
    timestamps: true
})

const Sale = model('Sale', saleSchema);
export default Sale;