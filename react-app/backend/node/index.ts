import express from 'express';
import route from './src/routes/user.route.ts';
const PORT = 3000

const userRoute = route
const app = express();
app.use(express.json());

app.use("/user", userRoute)





app.listen(PORT, () => {
    console.log(`server on na porta ${PORT}`)
});