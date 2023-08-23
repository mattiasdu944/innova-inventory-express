import { isValidObjectId } from "mongoose";

export const validateNewProduct = (product, res) => {
    if(Object.values(product).length === 0) { 
        return res.status(403).json({ message: 'Debe llenar todos los campos' })
    }

    if( !product.name || product.name.trim() === ''  ){
        return res.status(403).json({ message: 'El nombre el obligatorio' })
    }

    if( !product.description ||  product.description.trim() === '' ){
        return res.status(403).json({ message: 'Debe agregar una descripcion' });
    }

    if( !product.images || product.images.includes('') ){
        return res.status(403).json({ message: 'Las imagenes son obligatorias' });
    }

    if( !product.price ){
        return res.status(403).json({ message: 'El precio es obligatorio' })
    }

    if( !product.stock ){
        return res.status(403).json({ message: 'El stock es obligatorio' })
    }
    
    if( !product.category || product.category.trim() === '' ){
        return res.status(403).json({ message: 'Debe asignar una categoria' })
    }

    if( !isValidObjectId(product.category) ){
        return res.status(403).json({ message: 'La categoria no es valida' })
    }

    return true;
}