import { db } from "../config/index.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateJWT } from "../utils/genereta-jwt.js";

export const register = async ( req, res ) => {
    //TODO: Valida los campos
    if( Object.values(req.body).includes('') ){
        return res.status(403).json({ message: 'Credenciales invalidas' } );
    }

    const { email, password } = req.body;

    //TODO: Evita duplicados
    await db.connect();
    const userExist = await User.findOne({ email });


    if( userExist ){
        await db.disconnect();
        return res.status(403).json({ message: 'El usuario ya se encuentra registrado' } );
    }

    //TODO: Min characters for password
    if( password.length < 8 ){
        await db.disconnect();
        return res.status(403).json({ message: 'La contraseña es muy corta' } );
    }

    const user = new User(req.body);
    await user.save();
    await db.disconnect();

    return res.json({
        message: 'Usuario creado',
        data: user
    });
}


export const login = async ( req, res ) => {
    //TODO: User exist
    const { email, password } = req.body;

    await db.connect();
    const user = await User.findOne({ email })
    await db.disconnect();

    if( !user ){
        return res.status(404).json({ message: 'El usuario no existe' } );
    }

    const passwordVerified = await bcrypt.compare(password, user.password);
    if( !passwordVerified ){
        return res.status(403).json({ message: 'Correo o contraseña incorrectos' } );
    }

    const token = generateJWT(user._id)
    
    await db.connect();
    user.token = token;
    await user.save();
    await db.disconnect();

    return res.json( user )

}


export const user = async ( req, res ) => {
    return res.json( req.user )
    
}