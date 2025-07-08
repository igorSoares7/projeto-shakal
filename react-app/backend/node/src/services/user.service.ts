import User from "../models/User";


const userCreate = (body) => User.create(body);
const userFindAll = () => User.find();
const userFindById = (id) => User.findById(id);

export {
    userCreate,
    userFindAll,
    userFindById,
    
}