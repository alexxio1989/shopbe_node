"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod_pagamento_get = exports.mod_pagamento_get_all = exports.mod_pagamento_update = exports.mod_pagamento_delete = exports.mod_pagamento_save = void 0;
exports.mod_pagamento_save = 'INSERT INTO modalita_pagamento (codice,descrizione,enable) VALUES (?,?,?)';
exports.mod_pagamento_delete = 'DELETE FROM modalita_pagamento WHERE idmodalita_pagamento = ?';
exports.mod_pagamento_update = 'UPDATE modalita_pagamento SET descrizione = ? , enable = ? WHERE idmodalita_pagamento = ?';
exports.mod_pagamento_get_all = 'SELECT * from modalita_pagamento WHERE enable = true';
exports.mod_pagamento_get = 'SELECT * from modalita_pagamento WHERE idmodalita_pagamento = ?';
//# sourceMappingURL=sql-mod-pagamento.js.map