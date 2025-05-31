import { Request, Response } from 'express';
import { userCreate } from '../services/user.Service.ts';

const create = async (req, res)=> {
    const { name, username, email, telefone, password,
        sexo, idade, antecedentesMedicos,
        praticaExercicios, frequenciaTrilhas } = req.body; //os campos em variáveis para que eu possa validar elas individualmente

    if (!name || !username || !email || !telefone || !password || !sexo || !idade
        || !antecedentesMedicos || !praticaExercicios || !frequenciaTrilhas) {
       return res.status(400).send({ message: "Insira todos os campos para se registrar" })
    }

  const userService = await userCreate(req.body)

  if (!userService) {
  return res.status(400).send({message: "Erro ao criar usuário!"})
}
  
  return(

    res.status(201).send({
        message: "Usuário criado com sucesso!",
        user: {
            name,
            username,
            email,
            telefone,
            password,
            sexo,
            idade,
            antecedentesMedicos,
            praticaExercicios,
            frequenciaTrilhas
        }
    }))

};







export default {
    create,

}