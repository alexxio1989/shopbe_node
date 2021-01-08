"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utente = void 0;
const Dominio_1 = require("./Dominio");
const Recapito_1 = require("./Recapito");
class Utente {
    constructor() {
        this.tipoUtente = new Dominio_1.Dominio;
        this.recapito = new Recapito_1.Recapito();
    }
}
exports.Utente = Utente;
//# sourceMappingURL=Utente.js.map