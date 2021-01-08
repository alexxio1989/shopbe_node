"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtenteCtrl = void 0;
const UtenteRepo_1 = require("../repositories/UtenteRepo");
class UtenteCtrl {
    constructor() {
        this.utenteRepo = new UtenteRepo_1.UtenteRepo();
    }
    save(req, res, connection) {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            this.utenteRepo.save(req, connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        }
        else {
            res.status(500).send("Error");
        }
    }
    update(req, res, connection) {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            this.utenteRepo.update(req, connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        }
        else {
            res.status(500).send("Error");
        }
    }
    get(req, res, connection) {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            let utenteResponse = this.utenteRepo.get(req, connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        }
        else {
            res.status(500).send("Error");
        }
    }
    delete(req, res, connection) {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            let utenteResponse = this.utenteRepo.delete(req, connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        }
        else {
            res.status(500).send("Error");
        }
    }
    getAll(req, res, connection) {
        throw new Error("Method not implemented.");
    }
    login(req, res, connection) {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            let utenteResponse = this.utenteRepo.login(req, connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        }
        else {
            res.status(500).send("Error");
        }
    }
    isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
}
exports.UtenteCtrl = UtenteCtrl;
//# sourceMappingURL=UtenteCtrl.js.map