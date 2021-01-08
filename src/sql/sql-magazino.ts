export const magazino_save='INSERT INTO magazino (prodotto_idprodotto,negozio_idnegozio,quantity) VALUES (?,?,?)';

export const magazino_delete='DELETE FROM magazino WHERE prodotto_idprodotto = ? AND negozio_idnegozio = ?'

export const magazino_delete_by_prodotto='DELETE FROM magazino WHERE prodotto_idprodotto = ?'

export const magazino_update='UPDATE magazino SET quantity = ? WHERE prodotto_idprodotto = ? AND negozio_idnegozio = ?'

export const magazino_get='SELECT * from magazino WHERE negozio_idnegozio = ?'

export const get_tipi_sottotipi_prodotti='SELECT * from tipo t \
JOIN sotto_tipo st ON \
t.idtipo = st.tipo_idtipo \
JOIN prodotto p ON \
p.sotto_tipo_idsotto_tipo = st.idsotto_tipo \
JOIN magazino m ON \
p.idprodotto = m.prodotto_idprodotto \
WHERE m.negozio_idnegozio = ?';