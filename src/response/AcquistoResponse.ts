import { Acquisto } from "../models/Acquisto";
import { Status } from "../models/Status";
import { ResponseCore } from "./core/ResponseCore";


export class AcquistoResponse extends ResponseCore {
	
	listStatus: Status[];
    list: Acquisto[];
    
}
