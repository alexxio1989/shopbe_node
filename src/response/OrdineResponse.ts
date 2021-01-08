import { Negozio } from "../models/Negozio";
import { Utente } from "../models/Utente";
import { ResponseCore } from "./core/ResponseCore";


export class OrdineResponse extends ResponseCore {
	
    negozio: Negozio;
    utente: Utente;

    
}
