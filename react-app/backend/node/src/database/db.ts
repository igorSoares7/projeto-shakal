import mongoose from 'mongoose';


const connetcDatabase = async () => {
    const uri = "mongodb+srv://igorsoaresrosa77:GvK1koBUTlg6dmuG@cluster0.xbrjmn9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    console.log("Aguardando conexão")
    try {
        await mongoose.connect(uri)
        console.log("Conectado!")
    } catch (error) {
        console.log('Erro na conexão', error)
    }
}

export default connetcDatabase