import Category from "../models/Category.js";
import { createCategory, getCategories } from "../services/categoryService.js";



export const getAllCategories = async (req, res) => {
    const categories = await getCategories();
    return res.json( categories )
}   

export const createNewCategory = async (req, res) => {
    
    const { name, description, image } = req.body;

    if( name.trim() === '' ){
        return res.status(403).json({ message: 'El nombre el obligatorio' })
    }

    if( description.trim() === '' ){
        return res.status(403).json({ message: 'Debe agregar una descripcion' });
    }

    if( image.trim() === '' ){
        return res.status(403).json({ message: 'La imagen es obligatoria' });
    }

    try {

        const existCategory = await Category.findOne({ name });
    
        if( existCategory ){
            return res.status(403).json({ message: 'Ya existe una categoria con este nombre' });
        }
    
        const category = await createCategory( req.body );
    
        return res.json({
            message: 'Categoria creada con exito',
            category,
        });

    } catch (error) {
        return res.status(403).json( error );
    }
}