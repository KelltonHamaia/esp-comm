import { RequestHandler } from "express";
import { luzService } from "../services/luz-service";

const id = "12817936-c530-4b61-8a9e-70a98e599b31";

const manipularLuzController: RequestHandler = async (req, res) => {
    let luz = await luzService.verificarLuz({ id });
    if(!luz) {
        luz = await luzService.criarLuz({ id });
    }

    if(luz.status === "DESLIGADA") {
        luz = await luzService.manipularLuz({ id, status:  "LIGADA" });
    } else {
        luz = await luzService.manipularLuz({ id, status: "DESLIGADA" });
    }

    res.json({ mensagem: "A luz será " +luz.status });
}

const verificarStatusLuzController:RequestHandler = async (req, res) => {
    let luz = await luzService.verificarLuz({ id });

    if(luz?.status === "LIGADA") {
        console.log("Ligando a luz!")
    } else {
        console.log("Esperando a luz ser ligada!")
    }
    
    res.status(200).json({ status: luz?.status });
    return;
}

export const luzController = {
    manipularLuzController,
    verificarStatusLuzController
};