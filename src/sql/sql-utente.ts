export const utente_save='INSERT INTO utente (nome,cognome,email,password,tipo_utente_idtipo_utente,recapito_idrecapito) values (?,?,?,?,?,?)';

export const utente_delete='DELETE FROM utente WHERE idutente = ?';

export const utente_update='UPDATE utente SET nome = ?,cognome = ?,email = ?,password = ?,tipo_utente_idtipo_utente = ?,recapito_idrecapito = ? WHERE idutente = ?';

export const utente_get='SELECT * FROM utente WHERE idutente = ?';

export const utente_login='SELECT * FROM utente u JOIN recapito r ON u.recapito_idrecapito = r.idrecapito JOIN tipo_utente tu ON u.tipo_utente_idtipo_utente = tu.idtipo_utente WHERE email = ? AND password = ?';

export const utente_get_tipo_utente='SELECT * FROM tipo_utente WHERE idtipo_utente = ? ';

export const ount_utente_by_email='SELECT COUNT(*) FROM utente u WHERE u_email = ? ';

export const get_utente_by_email='SELECT * FROM utente u WHERE u_email = ? ';