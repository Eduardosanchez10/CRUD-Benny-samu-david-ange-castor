import { Router } from "express";
import { UserController } from "./controller";

export class UserRoute{
    static get routes(): Router{
        const routes= Router();
        const controller = new UserController();
        routes.get('/',controller.findAll);
        routes.get('/:id',controller.findOne);
        routes.post('/',controller.create);
        routes.delete('/:id',controller.delete);
        routes.put('/:id',controller.update);

        return routes;
    }
}