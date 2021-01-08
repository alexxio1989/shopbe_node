import { Acquisto } from "../models/Acquisto";
import { Dominio } from "../models/Dominio";
import { Negozio } from "../models/Negozio";
import { Status } from "../models/Status";
import { ResponseCore } from "./core/ResponseCore";

export class DatiPaginaResponse extends ResponseCore{

	    list: Negozio[];
	    
	    listTipo: Dominio[];
	    
	    listAcquisti: Acquisto[];
	    
	    listStatus: Status[];

	    negozio: Negozio;

}
