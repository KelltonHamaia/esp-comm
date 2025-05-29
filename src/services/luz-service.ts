import { prisma } from "../libs/prisma";

export type StatusLuz = "LIGADA" | "DESLIGADA";

export const criarLuz = async ({ id }: { id: string}) => {
    const luz = await prisma.server.create({
        data: { id }
    });
    return luz;
}

const manipularLuz = async ({ id, status }: { id: string, status: StatusLuz}) => {
    let luz = await prisma.server.update({
        where: { id },
        data: { status }
    });
    return luz;
}

const verificarLuz = async ({ id }: { id: string}) => {
    const luzes = await prisma.server.findUnique({
        where: { id }
    });
    return luzes;
}

export const luzService = {
    criarLuz,
    manipularLuz,
    verificarLuz
};

