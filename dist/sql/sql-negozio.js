"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negozio_get_all = exports.negozio_get = exports.negozio_update = exports.negozio_delete = exports.negozio_save = void 0;
exports.negozio_save = 'INSERT INTO negozio (nome,recapito_idrecapito) values (?,?)';
exports.negozio_delete = 'DELETE FROM negozio WHERE idnegozio = ?';
exports.negozio_update = 'UPDATE negozio SET nome = ? WHERE idnegozio = ?';
exports.negozio_get = 'SELECT * FROM negozio WHERE idnegozio = ?';
exports.negozio_get_all = 'SELECT * FROM negozio';
//# sourceMappingURL=sql-negozio.js.map