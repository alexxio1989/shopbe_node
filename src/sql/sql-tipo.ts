export const tipo_save='INSERT INTO tipo (codice_padre,descrizione_padre) VALUES(?,?)';

export const tipo_delete='DELETE FROM tipo WHERE idtipo = ?';

export const tipo_update='UPDATE tipo SET codice_padre = ? , descrizione_padre = ? WHERE idtipo = ?';

export const tipo_get='SELECT * from tipo WHERE idtipo = ?';

export const tipo_get_all='SELECT * from tipo';