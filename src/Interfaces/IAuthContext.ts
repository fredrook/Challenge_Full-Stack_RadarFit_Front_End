import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./IProduct";
import { IProductForm } from "./IProductForm";

export interface IAuthContext {
  products: IProductForm[];
  modalIn: boolean;
  modalInEdit: boolean;
  setModalInEdit: Dispatch<SetStateAction<boolean>>;
  setModalIn: Dispatch<SetStateAction<boolean>>;
  createProduct: (data: IProduct) => void;
  /* DeleteProduct: (id: string) => void; */
}
