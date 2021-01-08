"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_prodotti_associati = exports.sotto_tipo_get_sotto_tipi = exports.sotto_tipo_get = exports.sotto_tipo_update = exports.sotto_tipo_delete_all = exports.sotto_tipo_delete = exports.sotto_tipo_save = void 0;
exports.sotto_tipo_save = 'INSERT INTO sotto_tipo (codice_figlio,descrizione_figlio,tipo_idtipo) VALUES(?,?,?)';
exports.sotto_tipo_delete = 'DELETE FROM sotto_tipo WHERE idsotto_tipo = ?';
exports.sotto_tipo_delete_all = 'DELETE FROM sotto_tipo WHERE tipo_idtipo = ?';
exports.sotto_tipo_update = 'UPDATE sotto_tipo SET codice_figlio = ? , descrizione_figlio = ? WHERE idsotto_tipo = ?';
exports.sotto_tipo_get = 'SELECT * from sotto_tipo WHERE idsotto_tipo = ?';
exports.sotto_tipo_get_sotto_tipi = 'SELECT * from sotto_tipo WHERE tipo_idtipo = ?';
exports.get_prodotti_associati = 'Select * from prodotto p Join sotto_tipo st ON st.idsotto_tipo = p.sotto_tipo_idsotto_tipo WHERE st.idsotto_tipo = ?';
//# sourceMappingURL=sql-sotto-tipo.js.map