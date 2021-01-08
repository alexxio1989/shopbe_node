"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtenteRepo = void 0;
const UtenteResponse_1 = require("../response/UtenteResponse");
const sql_utente_1 = require("../sql/sql-utente");
const RecapitoRepo_1 = require("./RecapitoRepo");
const rxjs_1 = require("rxjs");
const UtenteRowMapper_1 = require("../rowmappers/UtenteRowMapper");
class UtenteRepo {
    constructor() {
        this.iSubject = new rxjs_1.Subject();
        this.utenteResponse = new UtenteResponse_1.UtenteResponse();
        this.recapitoRepo = new RecapitoRepo_1.RecapitoRepo();
        this.utenteRowMapper = new UtenteRowMapper_1.UtenteRowMapper();
    }
    getOBS() {
        return this.iSubject.asObservable();
    }
    save(req, connection) {
        const utente = req.body;
        this.recapitoRepo.save(req, connection);
        const responseRecapito = this.recapitoRepo.getOBS().subscribe(next => {
            if (200 === next.httpStatus) {
                const params = [utente.nome, utente.cognome, utente.email, utente.password, 6, next.idRecapito];
                const result = connection.query(sql_utente_1.utente_save, params, (err, result) => {
                    if (err) {
                        this.utenteResponse.httpStatus = 500;
                        this.utenteResponse.status = "Salvataggio Utente in errore";
                        throw err;
                    }
                    this.utenteResponse.httpStatus = 200;
                    this.utenteResponse.status = "Salvataggio Utente avvenuto con successo";
                    this.iSubject.next(this.utenteResponse);
                });
            }
            else {
                this.utenteResponse.httpStatus = 500;
                this.utenteResponse.status = "Salvataggio Utente in errore";
                this.iSubject.next(this.utenteResponse);
            }
        });
        return this.getOBS();
    }
    update(req, connection) {
        return this.getOBS();
    }
    get(req, connection) {
        return this.getOBS();
    }
    login(req, connection) {
        const utente = req.body;
        const result = connection.query(sql_utente_1.utente_login, [utente.email, utente.password], (err, result) => {
            if (err) {
                this.utenteResponse.httpStatus = 500;
                this.utenteResponse.status = "Recupero Utente in errore";
                throw err;
            }
            this.utenteResponse.utente = this.utenteRowMapper.getRow(result[0]);
            this.utenteResponse.httpStatus = 200;
            this.utenteResponse.status = "Login Utente avvenuto con successo";
            this.iSubject.next(this.utenteResponse);
        });
        return this.getOBS();
    }
    delete(req, connection) {
        return this.getOBS();
    }
    getAll(req, connection) {
        return this.getOBS();
    }
}
exports.UtenteRepo = UtenteRepo;
//# sourceMappingURL=UtenteRepo.js.map