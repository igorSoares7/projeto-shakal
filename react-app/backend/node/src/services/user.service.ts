import User from "../models/User";


const userCreate = (body) => User.create(body);
const userFindAll = () => User.find();

export {
    userCreate,
    userFindAll,
    
}