import { GiornoLavorativo } from "../models/GiornoLavorativo";
import { ResponseCore } from "./core/ResponseCore";


export class GiornoLavorativoResponse extends ResponseCore {
	
	giorniLavorativi: GiornoLavorativo[];

}
