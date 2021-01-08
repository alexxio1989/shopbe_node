"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negozio = void 0;
const Magazzino_1 = require("./Magazzino");
const Recapito_1 = require("./Recapito");
class Negozio {
    constructor() {
        this.magazino = new Magazzino_1.Magazzino();
        this.recapito = new Recapito_1.Recapito();
    }
}
exports.Negozio = Negozio;
//# sourceMappingURL=Negozio.js.map