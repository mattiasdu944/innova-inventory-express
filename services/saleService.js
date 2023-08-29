import { db } from "../config/index.js";
import Sale from "../models/Sale.js";

const findAll = async () => {
    await db.connect()
    const sales = await Sale.find().lean();
    await db.disconnect()

    return sales;
};

const findOneById = async ( id ) => {};

const create = async () => {};

const update = async ( id ) => {};

const remove = async ( id ) => {};

export default {
    findAll,
    findOneById,
    create,
    update,
    remove
};