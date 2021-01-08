"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipo_get_all = exports.tipo_get = exports.tipo_update = exports.tipo_delete = exports.tipo_save = void 0;
exports.tipo_save = 'INSERT INTO tipo (codice_padre,descrizione_padre) VALUES(?,?)';
exports.tipo_delete = 'DELETE FROM tipo WHERE idtipo = ?';
exports.tipo_update = 'UPDATE tipo SET codice_padre = ? , descrizione_padre = ? WHERE idtipo = ?';
exports.tipo_get = 'SELECT * from tipo WHERE idtipo = ?';
exports.tipo_get_all = 'SELECT * from tipo';
//# sourceMappingURL=sql-tipo.js.map