import { Request, Response } from 'express';
import { userCreate, userFindAll } from '../services/user.Service.ts';

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

}






export default {
    create,
    findAll

}