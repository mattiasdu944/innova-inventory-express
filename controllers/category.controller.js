import { Types, isValidObjectId } from "mongoose";
import { db } from "../config/index.js";
import Category from "../models/Category.js";
import { createCategory, getCategories } from "../services/categoryService.js";
import { createSlug } from "../utils/create-slug.js";



export const getAllCategories = async (req, res) => {
    const categories = await getCategories();
    return res.json( categories )
}   

export const createNewCategory = async (req, res) => {

    if(Object.values(req.body).length === 0) { 
        return res.status(403).json({ message: 'Debe llenar todos los campos' })
    }

    const { name, description, image } = req.body;

    if( !name || name.trim() === ''  ){
        return res.status(403).json({ message: 'El nombre el obligatorio' })
    }

    if( !description ||  description.trim() === '' ){
        return res.status(403).json({ message: 'Debe agregar una descripcion' });
    }

    if( !image || image.trim() === '' ){
        return res.status(403).json({ message: 'La imagen es obligatoria' });
    }

    try {
        await db.connect();
        const existCategory = await Category.findOne({ name });
        await db.disconnect();
        if( existCategory ){
            return res.status(403).json({ message: 'Ya existe una categoria con este nombre' });
        }
        
        const slug = createSlug(name);

        const category = await createCategory({...req.body, slug });
        console.log(category);
        return res.json({
            message: 'Categoria creada con exito',
            category,
        });

    } catch (error) {
        return res.status(403).json( error );
    }
}

export const getCategoryByTerm = async (req, res) => {
    const { term } = req.params;
    await db.connect();

    const category = await Category.findOne({ $or: [
        { _id: isValidObjectId(term) ? term : undefined },
        { slug: term }
    ]}).select('-__v')
    await db.disconnect();

    if( !category ){
        return res.status(404).json( { message: 'Categoria no encontrada o no existe' } );
    }

    return res.json( category );

}