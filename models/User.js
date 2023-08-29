import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = Schema({
    name:       { type: String, required: true, trim: true },
    password:   { type: String, required: true, trim: true },
    email:      { type: String, required: true, trim: true, unique: true, lowercase: true},
    token:      { type: String },
    image:      { type: String, trim: true, default:"https://www.innovacode.online/wp-content/uploads/2023/06/cropped-Logo-Innova-Code.png" }
}, {
    timestamps: true
})

// MIDLEWARE ANTES DEL REGISTRO
userSchema.pre('save', async function (next) {
    if( !this.isModified('password') ){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

const User = model('User', userSchema);

export default User;