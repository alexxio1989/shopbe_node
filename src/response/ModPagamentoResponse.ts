import { ModalitaPagamento } from "../models/ModalitaPagamento";
import { ResponseCore } from "./core/ResponseCore";

export class ModPagamentoResponse extends ResponseCore {
	
	list: ModalitaPagamento[];

}
