import { Router } from "express";
import { luzController } from "../controller/luz-controller";

export const mainRoutes = Router();
mainRoutes.post("/ligar-luz", luzController.manipularLuzController);
mainRoutes.get("/verificar-luz", luzController.verificarStatusLuzController);

