"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acquisto_get_all_utente = exports.acquisto_get_all = exports.acquisto_update = exports.acquisto_delete = exports.acquisto_save = void 0;
exports.acquisto_save = 'INSERT INTO acquisto (prodotto_idprodotto,utente_idutente,totale,codice_acquisto,modalita_pagamento_idmodalita_pagamento,data_acquisto,data_ritiro,idNegozio_ritiro,data_consegna_prevista, status , qnt) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
exports.acquisto_delete = 'DELETE FROM magazino WHERE prodotto_idprodotto = ? AND negozio_idnegozio = ?';
exports.acquisto_update = 'UPDATE acquisto SET data_consegna_prevista = ? , status = ?  WHERE codice_acquisto = ?';
exports.acquisto_get_all = 'select * from acquisto';
exports.acquisto_get_all_utente = 'select * from acquisto a WHERE a_utente_idutente = ?';
//# sourceMappingURL=sql-acquisto.js.map