import express from 'express';
import route from './src/routes/user.route.ts';
import connetcDatabase from './src/database/db.ts';

const PORT = 3000

const userRoute = route
const app = express();

connetcDatabase()
app.use(express.json());

app.use("/user", userRoute)





app.listen(PORT, () => {
    console.log(`server on na porta ${PORT}`)
});