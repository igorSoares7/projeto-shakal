import User from "../models/User";


const userCreate = (body) => User.create(body);

export {
    userCreate,
    
}