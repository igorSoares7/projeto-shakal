//Aqui eu interajo com o MongoDB e crio entidades (schemas)

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        name: {
            type:String,
            required: true,
        },
        username: {
            type:String,
            required: true,
        },
        email: {
            type:String,
            required: true,
            unique: true,
        },
        telefone: {
            type:String,
            required: true,
        },
        password: {
            type:String,
            required: true,
        },
        sexo: {
            type:String,
            required: true,            
        },
        idade: {
            type:String,
            required: true,
        },
        antecedentesMedicos: {
            type:String,
            required: true,
        },
        praticaExercicios: {
            type:String,
            required: true,
        },
        frequenciaTrilhas: {
            type:String,
            required: true,
        },

});

const User = mongoose.model("User", UserSchema);

export default User;