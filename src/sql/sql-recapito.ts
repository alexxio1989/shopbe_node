export const recapito_save='INSERT INTO recapito (indirizzo,zip,telefono,citta) values (?,?,?,?)'

export const recapito_delete='';

export const recapito_update='UPDATE recapito SET indirizzo = ? , zip = ? , telefono = ? , prezzo = ? , citta = ? WHERE idrecapito = ?'

export const recapito_get='SELECT * FROM  recapito WHERE idrecapito  = ?'

export const recapito_get_citta='SELECT * FROM citta WHERE idcitta = ?'

