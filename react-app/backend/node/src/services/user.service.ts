// A pasta services é uma camada de lógica de negócio que fica entre os controllers e os models. Ela serve para organizar melhor seu código, deixando o controller mais limpo e o model mais isolado.
import User from "../models/User";


const userCreate = (body) => User.create(body);
const userFindAll = () => User.find();
const userFindById = (id) => User.findById(id);
const userUpdate = (
    id, name, username, email, telefone, password,
        sexo, idade, antecedentesMedicos,
        praticaExercicios, frequenciaTrilhas
) => User.findOneAndUpdate({_id: id},{name, username, email, telefone, password,
        sexo, idade, antecedentesMedicos,
        praticaExercicios, frequenciaTrilhas})

export {
    userCreate,
    userFindAll,
    userFindById,
    userUpdate,
    
}