import express from 'express';
import route from './src/routes/user.route.ts';

const userRoute = route
const app = express();

app.use("/soma", userRoute)



app.listen(3000, () => {
    console.log('server on')
});