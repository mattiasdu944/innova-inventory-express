import { isValidObjectId } from "mongoose";
import Category from "../models/Category.js";
import { createSlug } from "../utils/create-slug.js";
import categoryService from "../services/categoryService.js";



export const getAllCategories = async (req, res) => {
    const categories = await categoryService.findAll();
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
        const existCategory = await Category.findOne({ name });

        if( existCategory ){
            return res.status(403).json({ message: 'Ya existe una categoria con este nombre' });
        }
        
        
        const slug = createSlug(name);
        const category = await categoryService.create({...req.body, slug });

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
    const category = await Category.findOne({ $or: [
        { _id: isValidObjectId(term) ? term : undefined },
        { slug: term }
    ]}).select('-__v');

    if( !category ){
        return res.status(404).json( { message: 'Categoria no encontrada o no existe' } );
    }

    return res.json( category );

}

export const updateCategoryById = async (req, res) => {
    const { term } = req.params;
    const { name, description, image } = req.body;

    if( !isValidObjectId(term)){
        return res.status(404).json({ message: 'Categoria no encontrada o no existe' } );
    }

    const category = await Category.findById(term);
    
    if( !category ){
        return res.status(404).json({ message: 'Categoria no encontrada o no existe' } );
    }

    const categoryUpdate = await categoryService.update(category, { name, description, image})

    return res.json({
        message: 'Categoria actualizada correctamente',
        data: categoryUpdate
    })
    
}

export const deleteOneCategory = async (req, res) => { 
    const { term : id } = req.params;
    
    if( !isValidObjectId(id)){
        return res.status(404).json({ message: 'Categoria no encontrada o no existe' } );
    }

    const category = await Category.findById(id);

    if( !category ){
        return res.status(404).json({ message: 'Categoria no encontrada o no existe' } );
    }

    await categoryService.remove(category)

    return res.json({
        message: 'Categoria eliminada correctamente',
    })
    
}