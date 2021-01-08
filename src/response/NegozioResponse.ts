import { Negozio } from "../models/Negozio";
import { ResponseCore } from "./core/ResponseCore";

export class NegozioResponse extends ResponseCore{


    list: Negozio[];

    negozio: Negozio;

    
}
