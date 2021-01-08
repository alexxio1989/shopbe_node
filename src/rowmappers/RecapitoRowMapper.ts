import { Recapito } from "../models/Recapito";
import { IRowMapper } from "./core/IRowMapper";


export class RecapitoRowMapper implements IRowMapper<Recapito>{
    getRow(result: any) {
        let recapito = new Recapito();
        return recapito;
    }

}