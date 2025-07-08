import express from 'express';
import route from './src/routes/user.route.ts';
import connetcDatabase from './src/database/db.ts';

const PORT = 3000

const userRoute = route
const app = express();

connetcDatabase()
app.use(express.json());

app.use("/user", userRoute) 
//essa rota é somada com a rota de 'routes'! Exemplo? a rota é www.igor.com/user/igor, sendo /user a rota daqui e /igor a que está no diretorio routes





app.listen(PORT, () => {
    console.log(`server on na porta ${PORT}`)
});