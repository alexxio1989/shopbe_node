import { Acquisto } from "./Acquisto";
import { Dominio } from "./Dominio";
import { Ordine } from "./Ordine";
import { Recapito } from "./Recapito";

export class Utente{

    id: number;
    nome: string;
    cognome: string;
    email: string;
    password: string;
    tipoUtente: Dominio = new Dominio;
    recapito: Recapito = new Recapito();
    ordini: Ordine[];
    acquisti: Acquisto[];

}
