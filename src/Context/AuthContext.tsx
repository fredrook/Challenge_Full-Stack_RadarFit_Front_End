import { createContext, useEffect, useState } from "react";
import { IAuthContext } from "../Interfaces/IAuthContext";
import { IProduct } from "../Interfaces/IProduct";
import { IProviderPropsChildren } from "../Interfaces/IProviderPropsChildren";
import api from "../Api/api";
import { IProductForm } from "../Interfaces/IProductForm";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IProviderPropsChildren) => {
  const [products, setProducts] = useState<IProductForm[]>(
    [] as IProductForm[]
  );
  const [modalIn, setModalIn] = useState(false);
  const [modalInEdit, setModalInEdit] = useState(false);

  const createProduct = async (data: IProduct) => {
    try {
      const newProduct = await api.post<IProductForm>("/produtos", data);
      setProducts([...products, newProduct.data]);
      setModalIn(false);
    } catch (error) {
      console.log("CON-LOG CATCH ERROR CreateProduct", error);
    }
  };

  useEffect(() => {
    const ListAllProducts = async () => {
      try {
        const renderListSearch = await api.get<IProductForm[]>("/produtos");
        setProducts(renderListSearch.data);
      } catch (error) {
        console.log("CON-LOG CATCH ERROR CreateProduct", error);
      }
    };
    ListAllProducts();
  }, []);

 /*  const DeleteProduct = async (id: string) => {
    try {
      await api.delete<IProductForm[]>(`/produto/${id}`);

      const newProduct = products.filter((elem) => elem.id !== id);

      setProducts(newProduct);
    } catch (error) {
      console.log("CON-LOG CATCH ERROR DeleteProduct", error);
    }
  }; */

  return (
    <AuthContext.Provider
      value={{
        products,
        modalIn,
        setModalIn,
        modalInEdit,
        setModalInEdit,
        createProduct,
        /* DeleteProduct, */
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
