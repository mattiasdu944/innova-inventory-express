
import Sale from "../models/Sale.js";

const findAll = async () => {
    const sales = await Sale.find()
        .select('-__v')
        .populate({
            path: 'details',
            populate: {
                path: 'product',
                select: '-__v'
            }
        });

    return sales;
};

const findOneById = async ( id ) => {};

const create = async ( newSale ) => {
    const sale = new Sale( newSale );
    await sale.save();
    return sale;
};

const update = async ( id ) => {};

const remove = async ( id ) => {};

export default {
    findAll,
    findOneById,
    create,
    update,
    remove
};