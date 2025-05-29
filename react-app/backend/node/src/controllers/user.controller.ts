import { Request, Response } from 'express';

const create = (req: Request, res: Response): void => {
    const { name, username, email, telefone, password,
        sexo, idade, antecedentesMedicos,
        praticaExercicios, frequenciaTrilhas } = req.body; //os campos em variáveis para que eu possa validar elas individualmente

    if (!name || !username || !email || !telefone || !password || !sexo || !idade
        || !antecedentesMedicos || !praticaExercicios || !frequenciaTrilhas) {
        res.status(400).send({message: "Insira todos os campos para se registrar"})
    }

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
    });
};







export default {
    create,

}