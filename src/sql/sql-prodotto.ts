export const prodotto_save='INSERT INTO prodotto (nome_prodotto,descrizione,image,prezzo,sotto_tipo_idsotto_tipo,unita , step) VALUES (?,?,?,?,?,? , ?)'

export const prodotto_delete='DELETE FROM prodotto WHERE idprodotto = ?'

export const prodotto_update='UPDATE prodotto SET nome_prodotto = ?, descrizione = ? , image = ? , prezzo = ? , unita = ? , step = ? WHERE idprodotto = ?'

export const prodotto_get='SELECT * from prodotto WHERE idprodotto = ?';

export const prodotto_get_all='SELECT * from prodotto';

export const prodotto_delete_by_sottotipo='DELETE FROM prodotto WHERE sotto_tipo_idsotto_tipo = ?'


export const count_prodotti_acquistati='SELECT COUNT(*) FROM prodotto p JOIN acquisto a ON p.idprodotto = a.prodotto_idprodotto WHERE p.sotto_tipo_idsotto_tipo = ? ';