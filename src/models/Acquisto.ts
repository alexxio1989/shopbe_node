import { ModalitaPagamento } from "./ModalitaPagamento";
import { Negozio } from "./Negozio";
import { Prodotto } from "./Prodotto";
import { Status } from "./Status";
import { Utente } from "./Utente";


export class Acquisto {

     id: number;
     prodotti: Prodotto[];
     prodotto: Prodotto;
     codiceAquisto: string;
     dataAcquisto: Date;
     totale: number;
     modalitaPagamento: ModalitaPagamento;
     dataRitiro: Date;
     negozioRitiro: Negozio;
     dataCosegnaPrevista: Date;
     stripeToken: string;
     utente: Utente;
     status: Status;
     qnt: number;
    
}
