"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count_prodotti_acquistati = exports.prodotto_delete_by_sottotipo = exports.prodotto_get_all = exports.prodotto_get = exports.prodotto_update = exports.prodotto_delete = exports.prodotto_save = void 0;
exports.prodotto_save = 'INSERT INTO prodotto (nome_prodotto,descrizione,image,prezzo,sotto_tipo_idsotto_tipo,unita , step) VALUES (?,?,?,?,?,? , ?)';
exports.prodotto_delete = 'DELETE FROM prodotto WHERE idprodotto = ?';
exports.prodotto_update = 'UPDATE prodotto SET nome_prodotto = ?, descrizione = ? , image = ? , prezzo = ? , unita = ? , step = ? WHERE idprodotto = ?';
exports.prodotto_get = 'SELECT * from prodotto WHERE idprodotto = ?';
exports.prodotto_get_all = 'SELECT * from prodotto';
exports.prodotto_delete_by_sottotipo = 'DELETE FROM prodotto WHERE sotto_tipo_idsotto_tipo = ?';
exports.count_prodotti_acquistati = 'SELECT COUNT(*) FROM prodotto p JOIN acquisto a ON p.idprodotto = a.prodotto_idprodotto WHERE p.sotto_tipo_idsotto_tipo = ? ';
//# sourceMappingURL=sql-prodotto.js.map