import { GiornoLavorativo } from "./GiornoLavorativo";
import { Magazzino } from "./Magazzino";
import { Recapito } from "./Recapito";

export class Negozio {

    id: number;
    nome: string;
    magazino: Magazzino = new Magazzino();
    recapito: Recapito = new Recapito();
    giorniLavorativi: GiornoLavorativo[]; 

}
