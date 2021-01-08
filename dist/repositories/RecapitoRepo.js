"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecapitoRepo = void 0;
const sql_recapito_1 = require("../sql/sql-recapito");
const RecapitoResponse_1 = require("../response/RecapitoResponse");
class RecapitoRepo {
    constructor() {
        this.recapitoResponse = new RecapitoResponse_1.RecapitoResponse();
    }
    getOBS() {
        return this.iSubject.asObservable();
    }
    save(req, connection) {
        let utente;
        utente = req.body;
        const sql = sql_recapito_1.recapito_save;
        const params = [utente.recapito.indirizzo, utente.recapito.zip, utente.recapito.telefono, utente.recapito.citta];
        const result = connection.query(sql, params, (err, result) => {
            if (err) {
                this.recapitoResponse.httpStatus = 500;
                throw err;
            }
            this.recapitoResponse.idRecapito = result.insertId;
            this.recapitoResponse.status = "Salvataggio recapito avvenuto con successo";
            this.recapitoResponse.httpStatus = 200;
            this.iSubject.next(this.recapitoResponse);
        });
        return this.getOBS();
    }
    update(req, connection) {
        return this.getOBS();
    }
    get(req, connection) {
        return this.getOBS();
    }
    delete(req, connection) {
        return this.getOBS();
    }
    getAll(req, connection) {
        return this.getOBS();
    }
}
exports.RecapitoRepo = RecapitoRepo;
//# sourceMappingURL=RecapitoRepo.js.map