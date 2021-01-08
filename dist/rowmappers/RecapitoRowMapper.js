"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecapitoRowMapper = void 0;
const Recapito_1 = require("../models/Recapito");
class RecapitoRowMapper {
    getRow(result) {
        let recapito = new Recapito_1.Recapito();
        return recapito;
    }
}
exports.RecapitoRowMapper = RecapitoRowMapper;
//# sourceMappingURL=RecapitoRowMapper.js.map