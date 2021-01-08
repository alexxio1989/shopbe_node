import { Utente } from "../models/Utente";
import { IRowMapper } from "./core/IRowMapper";


export class UtenteRowMapper implements IRowMapper<Utente>{
    getRow(result: any) {
        let utente = new Utente();
        utente.id = result.idutente;
        utente.nome = result.nome;
        utente.cognome = result.cognome;
        utente.email = result.email
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