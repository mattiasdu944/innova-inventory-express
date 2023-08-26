import jwt from 'jsonwebtoken';
import { db } from "../config/index.js";
import User from '../models/User.js';

export const authMiddleware = async ( req, res, next ) => {
    
    let token = req.headers.authorization;

    if( !token && !token.startsWith( 'Bearer ' ) ){
        return res.status(403).json({ message:'Token no valido' })
    }

    try {
        token = token.split( ' ' )[1];  
        const decoded = jwt.verify( token, process.env.JWT_SECRET );
        
        await db.connect();
        req.user = await User.findById( decoded.id ).select('-password -__v -_id');
        await db.disconnect();

        next();

        
    } catch (error) {
        return res.status(403).json({ message:'Token no valido' })
    }


}