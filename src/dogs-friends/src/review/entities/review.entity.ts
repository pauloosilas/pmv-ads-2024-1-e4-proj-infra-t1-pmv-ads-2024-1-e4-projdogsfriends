import { Prisma } from "@prisma/client";

export class Review implements Prisma.ReviewUncheckedCreateInput{
    id?: string;
    nota: number;
    comentario: string;
    passeadorId: string;
    passeioId: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
 
}
