import express from 'express';
import userController from '../controllers/user.controller.ts';

const route = express.Router();

route.post("/", userController.create); //a função de callback fica em controllers!
route.get("/", userController.findAll);
route.get("/:id", userController.findById);


export default route;