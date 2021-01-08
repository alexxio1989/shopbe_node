import { Prodotto } from "../models/Prodotto";
import { ResponseCore } from "./core/ResponseCore";

export class ProdottoResponse extends ResponseCore {

    list: Prodotto[];
    prodotto: Prodotto;

}
