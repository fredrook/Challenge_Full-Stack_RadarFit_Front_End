import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./IProduct";
import { IProductForm } from "./IProductForm";

export interface IAuthContext {
  product: IProduct;
  modalIn: boolean;
  products: IProductForm[];
  setModalIn: Dispatch<SetStateAction<boolean>>;
  CreateProduct: (data: IProduct) => void;
/*   ListAllProducts: ( ) => void; */
 /* UpdatedAllDadosVeicle: (data: "PassarTipagemAqui", id: string) => void;
  DeleteProductVeicle: (id: string) => void; */
}