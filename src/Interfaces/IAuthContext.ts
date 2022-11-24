import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./IProduct";

export interface IAuthContext {
  product: IProduct;
  modalIn: boolean;
  setModalIn: Dispatch<SetStateAction<boolean>>;
 /*  CreateProduct: (data: "PassarTipagemAqui") => void;
  UpdatedAllDadosVeicle: (data: "PassarTipagemAqui", id: string) => void;
  DeleteProductVeicle: (id: string) => void; */
}