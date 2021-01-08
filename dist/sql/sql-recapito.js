"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapito_get_citta = exports.recapito_get = exports.recapito_update = exports.recapito_delete = exports.recapito_save = void 0;
exports.recapito_save = 'INSERT INTO recapito (indirizzo,zip,telefono,citta) values (?,?,?,?)';
exports.recapito_delete = '';
exports.recapito_update = 'UPDATE recapito SET indirizzo = ? , zip = ? , telefono = ? , prezzo = ? , citta = ? WHERE idrecapito = ?';
exports.recapito_get = 'SELECT * FROM  recapito WHERE idrecapito  = ?';
exports.recapito_get_citta = 'SELECT * FROM citta WHERE idcitta = ?';
//# sourceMappingURL=sql-recapito.js.map