"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtenteRowMapper = void 0;
const Utente_1 = require("../models/Utente");
class UtenteRowMapper {
    getRow(result) {
        let utente = new Utente_1.Utente();
        utente.id = result.idutente;
        utente.nome = result.nome;
        utente.cognome = result.cognome;
        utente.email = result.email;
        utente.recapito.id = result.recapito_idrecapito;
        utente.recapito.citta = result.citta;
        utente.recapito.zip = result.zip;
        utente.recapito.indirizzo = result.indirizzo;
        utente.tipoUtente.id = result.idtipo_utente;
        utente.tipoUtente.codice = result.codice;
        utente.tipoUtente.descrizione = result.descrizione;
        return utente;
    }
}
exports.UtenteRowMapper = UtenteRowMapper;
//# sourceMappingURL=UtenteRowMapper.js.map