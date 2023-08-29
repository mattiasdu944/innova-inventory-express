import jwt from 'jsonwebtoken';
import { db } from "../config/index.js";
import User from '../models/User.js';

export const authMiddleware = async ( req, res, next ) => {
    
    let token = req.headers.authorization.replaceAll('"', '');

    if( !token ){
        return res.status(403).json({ message:'Token no valido' })
    }

    if( !token.startsWith( 'Bearer ' ) ){
        return res.status(403).json({ message:'Token no valido' })
    }

    try {
        token = token.split( ' ' )[1];  
        const decoded = jwt.verify( token, process.env.JWT_SECRET );
        
        await db.connect();
        const user = await User.findById( decoded.id ).select('-password -__v -_id -updatedAt');
        await db.disconnect();

        req.user = user;
        next();

        
    } catch (error) {
        return res.status(403).json({ message:'Token no valido' })
    }


}