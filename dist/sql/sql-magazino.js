"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_tipi_sottotipi_prodotti = exports.magazino_get = exports.magazino_update = exports.magazino_delete_by_prodotto = exports.magazino_delete = exports.magazino_save = void 0;
exports.magazino_save = 'INSERT INTO magazino (prodotto_idprodotto,negozio_idnegozio,quantity) VALUES (?,?,?)';
exports.magazino_delete = 'DELETE FROM magazino WHERE prodotto_idprodotto = ? AND negozio_idnegozio = ?';
exports.magazino_delete_by_prodotto = 'DELETE FROM magazino WHERE prodotto_idprodotto = ?';
exports.magazino_update = 'UPDATE magazino SET quantity = ? WHERE prodotto_idprodotto = ? AND negozio_idnegozio = ?';
exports.magazino_get = 'SELECT * from magazino WHERE negozio_idnegozio = ?';
exports.get_tipi_sottotipi_prodotti = 'SELECT * from tipo t \
JOIN sotto_tipo st ON \
t.idtipo = st.tipo_idtipo \
JOIN prodotto p ON \
p.sotto_tipo_idsotto_tipo = st.idsotto_tipo \
JOIN magazino m ON \
p.idprodotto = m.prodotto_idprodotto \
WHERE m.negozio_idnegozio = ?';
//# sourceMappingURL=sql-magazino.js.map