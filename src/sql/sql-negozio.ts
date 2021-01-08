export const negozio_save='INSERT INTO negozio (nome,recapito_idrecapito) values (?,?)'

export const negozio_delete='DELETE FROM negozio WHERE idnegozio = ?'

export const negozio_update='UPDATE negozio SET nome = ? WHERE idnegozio = ?'

export const negozio_get='SELECT * FROM negozio WHERE idnegozio = ?'

export const negozio_get_all='SELECT * FROM negozio'