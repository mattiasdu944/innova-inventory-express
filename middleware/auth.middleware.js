import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authMiddleware = async ( req, res, next ) => {

    if( !req.headers.authorization ){
        return res.status(403).json({ message:'No esta autenticado' })
    }

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
     
        const user = await User.find({ _id: decoded.id }).select('-password -__v -_id -updatedAt');
       
        req.user = user;
        next();

        
    } catch (error) {
        return res.status(403).json({ message:'Token no valido' })
    }


}