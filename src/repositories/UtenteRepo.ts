import { Connection } from "mysql";
import { UtenteResponse } from "../response/UtenteResponse";
import { utente_save , utente_login} from "../sql/sql-utente";
import { IRepo } from "./core/IRepo";
import { RecapitoRepo } from "./RecapitoRepo";
import {Subject,Observable} from 'rxjs';
import { UtenteRowMapper } from "../rowmappers/UtenteRowMapper";

export class UtenteRepo implements IRepo<UtenteResponse>{

    iSubject: Subject<UtenteResponse> = new Subject();

    utenteResponse = new UtenteResponse();

    recapitoRepo = new RecapitoRepo();

    utenteRowMapper = new UtenteRowMapper();


    getOBS(): Observable<any> {
        return this.iSubject.asObservable();
    }

    save(req: any, connection: Connection) {
        const utente = req.body;
        this.recapitoRepo.save(req,connection);

        const responseRecapito = this.recapitoRepo.getOBS().subscribe(next => {

            if(200 === next.httpStatus){
                const params = [utente.nome, utente.cognome, utente.email, utente.password, 6 , next.idRecapito];
                const result = connection.query(utente_save, params, (err: any, result: any) => {
                    if (err) {
                        this.utenteResponse.httpStatus = 500;
                        this.utenteResponse.status = "Salvataggio Utente in errore";
                        throw err;
                    }
                    this.utenteResponse.httpStatus = 200;
                    this.utenteResponse.status = "Salvataggio Utente avvenuto con successo";
                    this.iSubject.next(this.utenteResponse)
                })
    
            } else {
                this.utenteResponse.httpStatus = 500;
                this.utenteResponse.status = "Salvataggio Utente in errore";
                this.iSubject.next(this.utenteResponse)
            }
            
        });

        return this.getOBS();
    }

    update(req: any, connection: Connection) {
        return  this.getOBS();
    }

    get(req: any, connection: Connection) {
        return this.getOBS();
    }

    login(req: any, connection: Connection): Observable<UtenteResponse>{
        const utente = req.body;

        const result = connection.query(utente_login, [utente.email, utente.password], (err: any, result: any) => {
            if (err) {
                this.utenteResponse.httpStatus = 500;
                this.utenteResponse.status = "Recupero Utente in errore";
                throw err;
            }
            this.utenteResponse.utente = this.utenteRowMapper.getRow(result[0]);
            this.utenteResponse.httpStatus = 200;
            this.utenteResponse.status = "Login Utente avvenuto con successo";
            this.iSubject.next(this.utenteResponse)
        })

        return this.getOBS();
    }

    delete(req: any, connection: Connection){
        return this.getOBS();
    }
    getAll(req: any, connection: Connection) {
        return this.getOBS();
    }
    
}