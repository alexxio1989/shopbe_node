export const mod_pagamento_save='INSERT INTO modalita_pagamento (codice,descrizione,enable) VALUES (?,?,?)';

export const mod_pagamento_delete='DELETE FROM modalita_pagamento WHERE idmodalita_pagamento = ?'

export const mod_pagamento_update='UPDATE modalita_pagamento SET descrizione = ? , enable = ? WHERE idmodalita_pagamento = ?'

export const mod_pagamento_get_all='SELECT * from modalita_pagamento WHERE enable = true';

export const mod_pagamento_get='SELECT * from modalita_pagamento WHERE idmodalita_pagamento = ?';