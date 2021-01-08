export const acquisto_save='INSERT INTO acquisto (prodotto_idprodotto,utente_idutente,totale,codice_acquisto,modalita_pagamento_idmodalita_pagamento,data_acquisto,data_ritiro,idNegozio_ritiro,data_consegna_prevista, status , qnt) VALUES (?,?,?,?,?,?,?,?,?,?,?)'

export const acquisto_delete='DELETE FROM magazino WHERE prodotto_idprodotto = ? AND negozio_idnegozio = ?'

export const acquisto_update='UPDATE acquisto SET data_consegna_prevista = ? , status = ?  WHERE codice_acquisto = ?'

export const acquisto_get_all='select * from acquisto'

export const acquisto_get_all_utente='select * from acquisto a WHERE a_utente_idutente = ?'