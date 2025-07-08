import mongoose from 'mongoose';


const connetcDatabase = async () => {
    const uri = "mongodb+srv://igorsoaresrosa77:root@cluster0.xbrjmn9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    console.log("Aguardando conexão")
    try {
        await mongoose.connect(uri, {dbName: 'DB_shakal'})
        console.log("Conectado!")
    } catch (error) {
        console.log('Erro na conexão', error)
    }
}

export default connetcDatabase;