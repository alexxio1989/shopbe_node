import { Recapito } from "../models/Recapito";
import { ResponseCore } from "./core/ResponseCore";


export class RecapitoResponse extends ResponseCore{
    recapito: Recapito;
    idRecapito: number;
}