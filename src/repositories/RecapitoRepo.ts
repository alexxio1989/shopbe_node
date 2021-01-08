import { Connection } from "mysql";
import { recapito_save } from "../sql/sql-recapito";
import { RecapitoResponse } from "../response/RecapitoResponse";
import { IRepo } from "./core/IRepo";
import { Utente } from "../models/Utente";
import {Subject , Observable} from 'rxjs';

export class RecapitoRepo implements IRepo<RecapitoResponse>{


    iSubject: Subject<RecapitoResponse>;

    recapitoResponse= new RecapitoResponse();


    getOBS(): Observable<any> {
        return this.iSubject.asObservable();
    }

    save(req: any, connection: Connection) {
        let utente: Utente;
        utente = req.body ;
        const sql = recapito_save;
        const params = [utente.recapito.indirizzo, utente.recapito.zip, utente.recapito.telefono, utente.recapito.citta];
        const result = connection.query(sql, params, (err: any, result: any) => {
            if (err) {
                this.recapitoResponse.httpStatus = 500;
                throw err;
            }
            this.recapitoResponse.idRecapito = result.insertId;
            this.recapitoResponse.status = "Salvataggio recapito avvenuto con successo";
            this.recapitoResponse.httpStatus = 200;
            this.iSubject.next(this.recapitoResponse)
        })
        return this.getOBS();
    }
    
    update(req: any, connection: Connection) {
        return this.getOBS();
    }
    get(req: any, connection: Connection) {
        return this.getOBS();
    }
    delete(req: any, connection: Connection){
        return this.getOBS();
    }
    getAll(req: any, connection: Connection) {
        return this.getOBS();
    }
    
}