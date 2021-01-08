"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.giorni_lavorativi_get_all = exports.giorni_lavorativi_get = exports.giorni_lavorativi_update = exports.giorni_lavorativi_delete = exports.giorni_lavorativi_save = void 0;
exports.giorni_lavorativi_save = 'INSERT INTO giorni_chiusura (negozio_idnegozio,day,descrizione,orario_apertura,orario_pausa_inizio,orario_pausa_fine,orario_chiusura,chiuso) VALUES (?,?,?,?,?,?,?,?)';
exports.giorni_lavorativi_delete = '';
exports.giorni_lavorativi_update = 'UPDATE giorni_chiusura SET day = ? , descrizione = ? , orario_apertura = ? , orario_pausa_inizio = ? , orario_pausa_fine = ? , orario_chiusura = ? , chiuso = ? WHERE negozio_idnegozio = ? AND idgiorni_chiusura = ?';
exports.giorni_lavorativi_get = '';
exports.giorni_lavorativi_get_all = 'SELECT * from giorni_chiusura WHERE negozio_idnegozio = ?';
//# sourceMappingURL=sql-giorni-lavorativi.js.map