import { Schema, model } from "mongoose";

const clientSchema = Schema({
    ci:         { type: String, required: true, trim: true, unique: true },
    name:       { type: String, required: true, trim: true },
    email:      { type: String, required: true, trim: true, unique: true, lowercase: true},
},{
    timestamps: true
})

const Client = model('Client', clientSchema);

export default Client;