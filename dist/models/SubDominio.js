"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubDominio = void 0;
const Dominio_1 = require("./Dominio");
class SubDominio {
    constructor() {
        this.tipoPadre = new Dominio_1.Dominio();
        this.prodottiAssociati = [];
    }
}
exports.SubDominio = SubDominio;
//# sourceMappingURL=SubDominio.js.map