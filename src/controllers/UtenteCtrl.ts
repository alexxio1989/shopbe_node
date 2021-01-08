import { Express } from "express-serve-static-core";
import { Connection } from "mysql";
import { UtenteRepo } from "../repositories/UtenteRepo";
import { utente_save } from "../sql/sql-utente";
import { ICtrl } from "./core/ICtrl";

export class UtenteCtrl implements ICtrl {

    utenteRepo = new UtenteRepo();

    save(req: any, res: any, connection: Connection): void {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            this.utenteRepo.save(req,connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        } else {
            res.status(500).send("Error");
        }
    }

    update(req: any, res: any, connection: Connection): void {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            this.utenteRepo.update(req,connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        } else {
            res.status(500).send("Error");
        }
    }

    get(req: any, res: any, connection: Connection): void {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            let utenteResponse = this.utenteRepo.get(req,connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        } else {
            res.status(500).send("Error");
        }
    }

    delete(req: any, res: any, connection: Connection): void {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            let utenteResponse = this.utenteRepo.delete(req,connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        } else {
            res.status(500).send("Error");
        }
    }

    getAll(req: any, res: any, connection: Connection): void {
        throw new Error("Method not implemented.");
    }

    login(req: any, res: any, connection: Connection): void {
        const utente = req.body;
        if (!this.isEmpty(utente)) {
            let utenteResponse = this.utenteRepo.login(req,connection).subscribe(next => {
                res.status(next.httpStatus).send(next);
            });
        } else {
            res.status(500).send("Error");
        }
    }



    isEmpty(obj: object) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

}