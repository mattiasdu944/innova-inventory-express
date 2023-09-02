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
    //
    const userExist = await User.findOne({ email });


    if( userExist ){
        //
        return res.status(403).json({ message: 'El usuario ya se encuentra registrado' } );
    }

    //TODO: Min characters for password
    if( password.length < 8 ){
        //
        return res.status(403).json({ message: 'La contraseña es muy corta' } );
    }

    const user = new User(req.body);
    await user.save();
    //

    return res.json({
        message: 'Usuario creado',
        data: user
    });
}


export const login = async ( req, res ) => {
    //TODO: User exist
    const { email, password } = req.body;

    //
    const user = await User.findOne({ email });
    //

    if( !user ){
        return res.status(404).json({ message: 'El usuario no existe' } );
    }

    const passwordVerified = await bcrypt.compare(password, user.password);
    if( !passwordVerified ){
        return res.status(403).json({ message: 'Correo o contraseña incorrectos' } );
    }

    const token = generateJWT(user._id)
    
    //
    user.token = token;
    await user.save();
    //
    const { name, image  } = user;
    return res.json({
        name,
        email,
        image,
        token,
    })

}


export const user = async ( req, res ) => {
    const { name, email, image, token } = req.user;
    console.log(req.user);
    return res.json({
        name,
        email,
        image,
        token,
    })
    
}