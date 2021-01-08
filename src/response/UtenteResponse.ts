import { Utente } from "../models/Utente";
import { ResponseCore } from "./core/ResponseCore";


export class UtenteResponse extends ResponseCore {
    utente: Utente;
}
