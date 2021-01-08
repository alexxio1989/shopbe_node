export const giorni_lavorativi_save='INSERT INTO giorni_chiusura (negozio_idnegozio,day,descrizione,orario_apertura,orario_pausa_inizio,orario_pausa_fine,orario_chiusura,chiuso) VALUES (?,?,?,?,?,?,?,?)'

export const giorni_lavorativi_delete='';

export const giorni_lavorativi_update='UPDATE giorni_chiusura SET day = ? , descrizione = ? , orario_apertura = ? , orario_pausa_inizio = ? , orario_pausa_fine = ? , orario_chiusura = ? , chiuso = ? WHERE negozio_idnegozio = ? AND idgiorni_chiusura = ?';

export const giorni_lavorativi_get='';

export const giorni_lavorativi_get_all='SELECT * from giorni_chiusura WHERE negozio_idnegozio = ?';