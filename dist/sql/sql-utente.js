"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_utente_by_email = exports.ount_utente_by_email = exports.utente_get_tipo_utente = exports.utente_login = exports.utente_get = exports.utente_update = exports.utente_delete = exports.utente_save = void 0;
exports.utente_save = 'INSERT INTO utente (nome,cognome,email,password,tipo_utente_idtipo_utente,recapito_idrecapito) values (?,?,?,?,?,?)';
exports.utente_delete = 'DELETE FROM utente WHERE idutente = ?';
exports.utente_update = 'UPDATE utente SET nome = ?,cognome = ?,email = ?,password = ?,tipo_utente_idtipo_utente = ?,recapito_idrecapito = ? WHERE idutente = ?';
exports.utente_get = 'SELECT * FROM utente WHERE idutente = ?';
exports.utente_login = 'SELECT * FROM utente u JOIN recapito r ON u.recapito_idrecapito = r.idrecapito JOIN tipo_utente tu ON u.tipo_utente_idtipo_utente = tu.idtipo_utente WHERE email = ? AND password = ?';
exports.utente_get_tipo_utente = 'SELECT * FROM tipo_utente WHERE idtipo_utente = ? ';
exports.ount_utente_by_email = 'SELECT COUNT(*) FROM utente u WHERE u_email = ? ';
exports.get_utente_by_email = 'SELECT * FROM utente u WHERE u_email = ? ';
//# sourceMappingURL=sql-utente.js.map