import { Request, Response } from 'express';
import { userCreate, userFindAll, userFindById, userUpdate } from '../services/user.Service.ts';
import mongoose from 'mongoose';

const create = async (req:Request, res ) => { //ver pq dá erro quando tipo 'res' com :Response
    const { name, username, email, telefone, password,
        sexo, idade, antecedentesMedicos,
        praticaExercicios, frequenciaTrilhas } = req.body; //os campos em variáveis para que eu possa validar elas individualmente

    if (!name || !username || !email || !telefone || !password || !sexo || !idade
        || !antecedentesMedicos || !praticaExercicios || !frequenciaTrilhas) {
       return res.status(400).send({ message: "Insira todos os campos para se registrar" })
    }

  const user = await userCreate(req.body)

  if (!user) {
  return res.status(400).send({message: "Erro ao criar usuário!"})
}
  
  return(

    res.status(201).send({
        message: "Usuário criado com sucesso!",
        user: {
            id: user._id,
            name,
            username,
            email,
            telefone,
            sexo,
            idade,
            antecedentesMedicos,
            praticaExercicios,
            frequenciaTrilhas
        }
    }))

};

const findAll = async (req:Request, res) => {
    const users = await userFindAll()

    if(users.length === 0){
        return res.status(400).send({message: "Não há usuários cadastrados"})
    };

    res.send(users)

};

const findById = async (req: Request, res) => {
    const id = req.params.id //esse parametro é exatamente o que esta na rota

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Id inválido"})
    }

    const user = await userFindById(id)
    if(!user){
        return res.status(400).send({message: "Usuário não encontrado!"})
    }

    res.send(user)
};

const update = async (req, res) => {

    const { name, username, email, telefone, password,
        sexo, idade, antecedentesMedicos,
        praticaExercicios, frequenciaTrilhas } = req.body; //os campos em variáveis para que eu possa validar elas individualmente

    if (!name && !username && !email && !telefone && !password && !sexo && !idade
       && !antecedentesMedicos && !praticaExercicios && !frequenciaTrilhas) {
       return res.status(400).send({ message: "Insira pelo menos um dos campos para atualizar!" })
    }

    const id = req.params.id;
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Id inválido"})
    }

    const user = await userFindById(id);

 if(!user){
        return res.status(400).send({message: "Usuário não encontrado!"})
    }

    await userUpdate(
        id, name, username, email, telefone, password,
        sexo, idade, antecedentesMedicos,
        praticaExercicios, frequenciaTrilhas
    );
    res.send("Usuário atualizado!")
};





export default {
    create,
    findAll,
    findById,
    update

}